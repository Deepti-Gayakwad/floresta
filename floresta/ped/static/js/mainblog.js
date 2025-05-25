function confirmDelete() {
    return confirm("Are you sure you want to delete this blog?");
}




function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


// Show the blog form when the "Create Your Blog" icon is clicked
document.getElementById("createBlogIcon").addEventListener("click", function() {
    // Redirect to the create blog page
    window.location.href = "createblog.html";
});

// Function to display blog posts
function displayPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let comments = JSON.parse(localStorage.getItem("comments")) || {};
    let postsContainer = document.getElementById("blogPosts");

    postsContainer.innerHTML = "<h2>Latest Posts</h2>";

    posts.forEach(function(post, index) {
        let postDiv = document.createElement("div");
        postDiv.classList.add("blog-post");

        let postTitle = document.createElement("h3");
        postTitle.textContent = post.title;

        let postContent = document.createElement("p");
        postContent.textContent = post.content;

        let postDate = document.createElement("small");
        postDate.textContent = `Posted on: ${post.date}`;

        // Add image if present
        if (post.image) {
            let postImage = document.createElement("img");
            postImage.src = post.image;
            postImage.style.maxWidth = "100%";
            postImage.style.height = "auto";
            postDiv.appendChild(postImage);
        }

        // Append title, content, etc.
        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(postDate);

        // Add a heading for comments
        let commentHeading = document.createElement("h4");
        commentHeading.textContent = "Comments";
        commentHeading.style.margin = "10px 0 5px 0";  // Optional: spacing
        postDiv.appendChild(commentHeading);


// Function to add and delete COMMENTS

document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".blog-post");

    posts.forEach(post => {
        const postId = post.dataset.blogId;
        const commentSection = post.querySelector(".comment-section");

        // Create form
        const commentForm = document.createElement("form");
        commentForm.innerHTML = `
            <input type="text" placeholder="Write a comment..." required>
            <button type="submit">Comment</button>
        `;

        // Submit comment
        commentForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let input = commentForm.querySelector("input").value.trim();
            if (!input) return;

            addComment(postId, input);
            commentForm.querySelector("input").value = '';
            renderComments(postId, commentList);
        });

        // Comment list
        const commentList = document.createElement("ul");
        commentList.classList.add("comment-list");
        renderComments(postId, commentList);

        commentSection.appendChild(commentList);
        commentSection.appendChild(commentForm);
    });
});

function addComment(postId, comment) {
    let comments = JSON.parse(localStorage.getItem("comments")) || {};
    if (!comments[postId]) comments[postId] = [];
    comments[postId].push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
}

function deleteComment(postId, commentIndex) {
    let comments = JSON.parse(localStorage.getItem("comments")) || {};
    if (comments[postId]) {
        comments[postId].splice(commentIndex, 1);
        localStorage.setItem("comments", JSON.stringify(comments));
    }
}

function renderComments(postId, commentList) {
    commentList.innerHTML = '';
    let comments = JSON.parse(localStorage.getItem("comments")) || {};
    (comments[postId] || []).forEach((comment, index) => {
        const li = document.createElement("li");
        li.textContent = comment;

        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.style.marginLeft = "10px";
        delBtn.onclick = () => {
            deleteComment(postId, index);
            renderComments(postId, commentList);
        };

        li.appendChild(delBtn);
        commentList.appendChild(li);
    });
}


// Function to delete a blog post
function deletePost(index) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];  // Get the existing posts from localStorage
    posts.splice(index, 1);  // Remove the post at the given index
    localStorage.setItem("posts", JSON.stringify(posts));  // Save the updated posts to localStorage
    displayPosts();  // Re-render the posts after deletion
}

// Load existing posts when the page is loaded
window.onload = function() {
    displayPosts();
};
