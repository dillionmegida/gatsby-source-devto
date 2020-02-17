const axios = require('axios');

// The DEV API makes these possible

// get all posts
const getPosts = username => {
    const posts = axios.get(`https://dev.to/api/articles?username=${username}`);
    return posts;
}

/*
    GET SINGLE POSTS
    -------------------------
    Single posts would need a customized template and a url to be 
    opened in a page. The html files are downloaded in cache
    and I do not know how to pull them from cache.

    I do not feel there is need for it though, since all posts are already
    fetched. However, if there is a perfect workaround
    for it by me or any contributor, please do. For now, the getPost() function
    would be commented and not exported as a module.

const getPost = postID => {
    const post = axios.get(`https://dev.to/api/articles/${postID}`);
    return post;
}
*/
module.exports =  { getPosts };