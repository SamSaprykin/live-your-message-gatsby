const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  

 /* ======================================================================== */
 
 /* Create pages from Products Listing Template */
 const blogListing = new Promise((resolve, reject) => {
  graphql(`
    query {
        allContentfulBlogPost {
            edges {
              node {
                blogPostCategory
                id
            }
          }
        }
    }
  `).then(result => {
    if (result.errors) {
      reject(result.errors)
    }
    const BlogPostListingData = result.data.allContentfulBlogPost.edges
    const blogCardsPerPage = 100
    const numPages = Math.ceil(BlogPostListingData.length / blogCardsPerPage)
    const categorySet = new Set()
    BlogPostListingData.forEach(post => {
      post.node.blogPostCategory &&
        categorySet.add(post.node.blogPostCategory)
    })
    
    const blogCategoryList = Array.from(categorySet)


    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve(`./src/templates/blogListing.js`),
        context: {
          limit: blogCardsPerPage,
          skip: i * blogCardsPerPage,
          numPages,
          categoryList: blogCategoryList,
          currentPage: i + 1,
        },
      })
    })
    
    
    blogCategoryList.forEach((category, i) => {
      let blogCategoryNumPages = Math.ceil(
        blogCategoryList.length / blogCardsPerPage
      )
      Array.from({ length: blogCategoryNumPages }).forEach((_, k) => {
        let newCat = category.replace(/\s/g, '-')
        createPage({
          path:
            k === 0
              ? `/blog/${newCat.toLowerCase()}`
              : `/blog/${newCat.toLowerCase()}/${k + 1}`,
          component: path.resolve(`./src/templates/blogCategoryListing.js`),
          context: {
            limit: blogCardsPerPage,
            skip: k * blogCardsPerPage,
            pressNumPages: blogCategoryNumPages,
            currentPage: k + 1,
            categoryList: blogCategoryList,
            category,
            slugPrefix: `/blog/${newCat.toLowerCase()}`,
          },
        })
      })
    })
    resolve()
  })
})


  
  /* ======================================================================== */
  /* Create pages from Read Blog Post Template */

  const blogPage = new Promise((resolve, reject) => {
    graphql(`
      query {
        allContentfulBlogPost {
            edges {
              node {
                id
                slug
                blogPostCategory
              }
            }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      result.data.allContentfulBlogPost.edges.forEach((edge, index) => {
        createPage({
          path: `/blog/${edge.node.slug}`,
          component: path.resolve(`./src/templates/blogPostTemplate.js`),
          context: {
            category: `${edge.node.blogPostCategory}`,
            next: edge.next,
            id: edge.node.id,
          },
        })
      })
      resolve()
    })
  })



  return Promise.all([
    blogListing,
    blogPage
  ])
}




