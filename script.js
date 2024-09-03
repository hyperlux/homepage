document.addEventListener('DOMContentLoaded', function() {
    const postsListElement = document.getElementById('posts-list');
    const categoriesListElement = document.getElementById('categories-list');

    // Fetch latest posts
    fetch('https://aurovillenetwork.org/latest.json')
        .then(response => response.json())
        .then(data => {
            const posts = data.topic_list.topics.slice(0, 5);  // Get first 5 posts
            posts.forEach(post => {
                const li = document.createElement('li');
                li.textContent = post.title;
                postsListElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));

    // Fetch categories
    fetch('https://aurovillenetwork.org/categories.json')
        .then(response => response.json())
        .then(data => {
            const categories = data.category_list.categories;
            categories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category.name;
                categoriesListElement.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching categories:', error));
});
