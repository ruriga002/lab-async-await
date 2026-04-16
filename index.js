const API_URL = "https://jsonplaceholder.typicode.com/posts";
function displayPosts(posts) {
    const ul = document.getElementById("post-list");
    ul.innerHTML = "";
    posts.forEach(post => {
        // Create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        // Add content
        h1.textContent = post.title;
        p.textContent = post.body;

        // Append elements
        li.appendChild(h1);
        li.appendChild(p);
        ul.appendChild(li);
    });
}
async function getPosts() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch posts");
        }

        const posts = await response.json();

        // Call displayPosts AFTER fetch (REQUIRED)
        displayPosts(posts);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}
getPosts();
