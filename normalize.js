const { createRemoteFileNode } = require('gatsby-source-filesystem');

// Download file remotely and create nodes to be accessed with graphql
exports.downloadMediaFile = async ({
    datum,
    store,
    cache,
    createNode,
    createNodeId,
}) => {
    let fileNodeID;
    try {
        const fileNode = await createRemoteFileNode({
          url: datum.preview,
          store,
          cache,
          createNode,
          createNodeId,
        })

        if (fileNode) {
          fileNodeID = fileNode.id
        }
      } catch (e) {
        console.log(`Could not download file, `, e)
      }

    if (fileNodeID) {
        // eslint-disable-next-line require-atomic-updates
        datum.localFile___NODE = fileNodeID
      }
    return datum
}