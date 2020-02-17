const _ = require('lodash');
const crypto = require('crypto');
const { getPosts, getPost } = require('./devto');
const normalize = require('./normalize');

async function createPostNode(datum) {

    let post = await getPost(datum.id);
    const { data: postData } = post;
    const { body_html, body_markdown } = postData;

    return {
        username: datum.user.username,
        id: datum.id.toString(),

        frontmatter: {
            title: datum.title,
            cover: datum.cover_image ? datum.cover_image : datum.social_image,
            publish_date: datum.readable_publish_date,
            tags: datum.tag_list,
            reactions: datum.postive_reactions_count,
            description: datum.description,
        },

        parent: null,
        internal: {
            type: `DevNode`,
            mediaType: 'text/html'
        },
        children: [],
        preview: datum.url,
        html: body_html,
        markdown: body_markdown
    }
}

async function processDatum(datum) {
    const node = await createPostNode(datum)
  
    // Get content digest of node. (Required field)
    // crypto does data encryption
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(node))
      .digest(`hex`)
  
    node.internal.contentDigest = contentDigest
    return node
  }

exports.sourceNodes = async ({actions, store, cache, createNodeId }, options) => {
    const { createNode, touchNode } = actions;
    const { username } = options;

    let data = getPosts(username);
    data
    .then((response) => {
        const {data} = response;
        return Promise.all(
            data.map(async datum => {
                const res = await normalize.downloadMediaFile({
                    datum: await processDatum(datum),
                    store,
                    cache,
                    createNode,
                    createNodeId,
                    touchNode,
                })
                createNode(res)
            })
        )
    })
    .catch(err => console.log(`Could not fetch data, ${err}`))
}