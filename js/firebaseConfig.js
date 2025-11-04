// Importa Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.1/firebase-database.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV3wZFGE_KXqVVxJe9vBov7yoymnhG2vA",
  authDomain: "comentarios-34380.firebaseapp.com",
  databaseURL: "https://comentarios-34380-default-rtdb.firebaseio.com",
  projectId: "comentarios-34380",
  storageBucket: "comentarios-34380.firebasestorage.app",
  messagingSenderId: "170526326",
  appId: "1:170526326:web:16cc82a00d5d4e18b10157",
  measurementId: "G-PBET61TK6M"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
