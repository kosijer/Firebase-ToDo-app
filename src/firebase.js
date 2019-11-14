import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyAC01GXLmtHOyKJ-hQFrsOadOjIfsKWVvs",
  authDomain: "todo-3ace1.firebaseapp.com",
  databaseURL: "https://todo-3ace1.firebaseio.com",
  projectId: "todo-3ace1",
  storageBucket: "todo-3ace1.appspot.com",
  messagingSenderId: "696738769289",
  appId: "1:696738769289:web:8b122fe5e3a5a8231f5958",
  measurementId: "G-VMF619WFDQ"
};
firebase.initializeApp(config);
firebase.analytics();
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");
