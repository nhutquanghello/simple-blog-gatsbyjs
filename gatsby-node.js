// exports.createPages = async function({actions, grapql}) {
//     const {data} = await grapql `
//         query {
//             allMdx(sort: {fields: rawBody, order: DESC}) {
//                 edges {
//                   node {
//                     frontmatter {
//                       slug
//                     }
//                     id
//                   }
//                 }
//               }
//         }
//     `
//     //Tạo phân trang cho bài đăng - Create paginated pages for posts
//     const postPerPage = 3
//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//     Array.from({length: numPages}).forEach((_, i) => {
//         actions.createPages({
//             path: i == 0 ? `/` : `/${i + 1}`,
//             component: require.resolve("./src/template/allPosts.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages, 
//                 currentPage: i + 1,
//             }
//         })
//     })

//     //Tạo các bài đăng trên blog - Create single blog posts
//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.fontmatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: { id },
//         })
//     })
// }