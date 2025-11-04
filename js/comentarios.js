import { database } from './firebaseConfig.js';
import { ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";

const commentsRef = ref(database, 'comments');

const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

commentForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('commentName').value;
  const text = document.getElementById('commentText').value;

  if (name && text) {
    push(commentsRef, { name, text });
    commentForm.reset();
  }
});

// Mostrar comentarios en tiempo real
onValue(commentsRef, snapshot => {
  commentsList.innerHTML = '';
  snapshot.forEach(child => {
    const comment = child.val();
    commentsList.innerHTML += `
      <div class="comment mb-2 p-2 border rounded">
        <strong>${comment.name}</strong>: ${comment.text}
      </div>
    `;
  });
});
