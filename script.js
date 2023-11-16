// Now you can use axios in your JavaScript code
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        // Display the received post data
        displayPost(response.data);
    })
    .catch(function (error) {
        console.error('Error:', error);
    });

// Function to display post data
function displayPost(post) {
    var postView = document.getElementById('postView');
    postView.innerHTML = `
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
    `;
}
