# gatsby-source-devto

Source plugin for sourcing posts from [dev.to](https://dev.to)

## Usage

### Install Package

```shell
npm i --save gatsby-source-devto
```

### Add to `gatsby-config.js`

```js
{
    resolve: `gatsby-source-devto`,
    options: {
        username: yourDevUsername
    }
},
```

`yourDevUsername` is your Dev.to username.

### Query the Posts

At build time, the total posts in your Dev profile are fetched with the DEV api (with internet connection) and they are added as nodes which you can query with graphql.

#### Query all posts

```shell
{
    allDevNode {
        nodes {
            id
            frontmatter {
                title
            }
        }
    }
}
```

## Gatsby Starter

If you're just starting out with gatsby and you want to use this plugin, you could create a gatsby site with the gatsby starter I created for this - [gatsby-starter-devto]().

```shell
gatsby new project-folder https:
cd project-folder
```

Change the username in the gatsby-config.js file to your own username and continue configuring the website as you desire.

## Contributions

This plugin is open for contributions. There's no guideline yet, but acceptable contributions are pull requests and feature requests for making the plugin better.

### Another thing you could contribute to is:

Single post page have not been implemented yet. All "All Posts" page have been implemented. I do not think there is need for it, but if you feel there is a perfect workaround for it, kindly create a feature request or pull request on it.

## License

This plugin is under the MIT License

## Author

[Dillion Megida](https://dillionmegida.com/about) 🚀