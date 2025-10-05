// Get posts from localStorage instead of data.json
const posts = JSON.parse(localStorage.getItem('posts')) || [];
const container = document.getElementById('explore-container');

if (posts.length === 0) {
    const exploreMsg  = document.getElementById('exploreMsg');
    exploreMsg.style.display = 'block';
} 
else {
  exploreMsg.style.display = 'none';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = post['content'];

    container.appendChild(postDiv);

    const trashIcon = document.createElement('img');
    trashIcon.src = '../assets/trash-can.png';

    trashIcon.onclick = () => deletePost(post.id);
    postDiv.appendChild(trashIcon);

  });
}

function deletePost(postId) {
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts = posts.filter(post => post.id !== postId);
  localStorage.setItem('posts', JSON.stringify(posts)); 
  console.log("Deleted post with ID:", postId);
  window.location.reload();
}