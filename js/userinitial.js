 // Initialize Firebase
   // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDI6U0vWBHZY0pdkzbQd0NRqpcfY3uPrrk",
    authDomain: "cashless-c8e7b.firebaseapp.com",
    databaseURL: "https://cashless-c8e7b.firebaseio.com",
    projectId: "cashless-c8e7b",
    storageBucket: "cashless-c8e7b.appspot.com",
    messagingSenderId: "482722912691",
    appId: "1:482722912691:web:f8395fd37fef973f7ad3c6",
    measurementId: "G-QLM4ZSX74X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);









  var db = firebase.firestore();
//obteniendo año mes y dia actual





function guardarInfo(id){

   var nombre = document.getElementById('nuevo_nombre').value;
    var apellido = document.getElementById('nuevo_apellido').value;

 db.collection(id).add({
          fnombre: nombre,
          fapellido: apellido
          
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
           document.getElementById('nuevo_nombre').value = '';
           document.getElementById('nuevo_apellido').value = '';
           document.getElementById('nuevo_email').value = '';
           document.getElementById('nuevo_pwd').value = '';

      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });


};