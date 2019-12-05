  
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


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
 

    if(user != null){

  
     var uid = user.uid;
    mostrarDatos();
    
    // document.getElementById("uid").innerHTML = uid; 

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')
    window.location.href = 'index.html';

  }
});




  var db = firebase.firestore();

      

function logout(){
  firebase.auth().signOut();
}


function mostrarDatos(){

db.collection("users").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});



db.collection('users').get().then(function(querySnapshot) {
  tabla.innerHTML = '';

    querySnapshot.forEach(function(doc) {


          tabla.innerHTML += `
                  <tr>
                    <td>${doc.id}</td>
                    <td>${doc.data().fnombre}</td>
                    <td>${doc.data().fapellido}</td>
                    <td></td>
                  </tr>
       ` 

    

    });

    
    
});



};


