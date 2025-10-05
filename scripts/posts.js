const postBtn = document.getElementById('postBtn');

//Post functionality
postBtn.addEventListener('click', function() {
  const textarea = document.getElementById('post-content');
  const messageDiv = document.getElementById('messageDiv');
  const content = textarea.value.trim();

  messageDiv.style.display = 'none';

  if (!content) {
    messageDiv.style.display = 'block';
    return;
  }

  console.log("Posting:", content);

  messageDiv.textContent = '';
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push({ id: posts.length + 1, 'content': content });
  localStorage.setItem('posts', JSON.stringify(posts));

  // Redirect to explore.html
  window.location.href = 'explore.html';
});