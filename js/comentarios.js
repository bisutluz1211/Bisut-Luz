// comentarios.js
import { db, ref, push, onValue } from "./firebaseConfig.js";

// 1️⃣ Referencia al nodo "comments"
const commentsRef = ref(db, "comments");

// 2️⃣ Elementos del formulario y contenedor de comentarios
const form = document.getElementById("commentForm");
const nameInput = document.getElementById("commentName");
const textInput = document.getElementById("commentText");
const commentsList = document.getElementById("commentsList");

// 3️⃣ Función para mostrar comentarios en la página
function renderComments(snapshot) {
  commentsList.innerHTML = ""; // limpiar lista
  snapshot.forEach(child => {
    const data = child.val();
    const div = document.createElement("div");
    div.className = "comment mb-2 p-2 border rounded";
    div.innerHTML = `<strong>${data.nombre}</strong>: ${data.mensaje} <br><small>${data.fecha}</small>`;
    commentsList.appendChild(div);
  });
}

// 4️⃣ Escuchar cambios en tiempo real (esto creará automáticamente el nodo "comments")
onValue(commentsRef, snapshot => {
  renderComments(snapshot);
});

// 5️⃣ Enviar comentario
form.addEventListener("submit", e => {
  e.preventDefault();

  const nombre = nameInput.value.trim();
  const mensaje = textInput.value.trim();

  if (!nombre || !mensaje) return;

  // 6️⃣ Push crea automáticamente un nodo hijo bajo "comments"
  push(commentsRef, {
    nombre,
    mensaje,
    fecha: new Date().toLocaleString()
  });

  form.reset();
});
