// "use strict";
let blog = {
    //api_key
    api_key: 'b3a33d41aec64d3c9431fb2561d21274',

    //fetch blog data
    fetchBlog: (title) => {
        fetch('https://newsapi.org/v2/' +
            title + '?q=tesla&from=2022-08-23&sortBy=publishedAt&apiKey=b3a33d41aec64d3c9431fb2561d21274')
            .then(response => response.json())
            .then((data) => console.log(data))
    },
    displayBlog: (data) => {
        //document.title = title;
        const { name, author } = data.source;
        const { title } = data.title;
        const { description } = data.description;
        const { url } = data.url;
        const { urlToImage } = data.urlToImage;
        const { publishedAt } = data.publishedAt;
        const { content } = data.content;

        console.log(name, author, url, urlToImage, publishedAt, content, description, title)
    }
}



//Tables
// function show(data) {
//     let tab = `
//     <table>
//         <thead>
//             <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Content</th>              
//                 <th>Author</th>
//             </tr>
//         </thead>
//         <tbody>`
//     for (let data of articles) {
//         tab += `
//                         <tr>
//                             <td>${data.title}</td>
//                             <td>${data.description}</td>
//                             <td>${data.content}</td>
//                             <td>${data.author}</td>
//                             </tr>
//                             </tbody>
//                       </table>`;
//     }
//     document.getElementById('tables').innerHTML = tab;
// }