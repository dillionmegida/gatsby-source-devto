const axios = require('axios');

// The DEV API makes these possible

// get all posts
const getPosts = username => {
    const posts = axios.get(`https://dev.to/api/articles?username=${username}`);
    return posts;
}

// get single posts
const getPost = postID => {
    const post = axios.get(`https://dev.to/api/articles/${postID}`);
    return post;
}
module.exports =  { getPosts, getPost };