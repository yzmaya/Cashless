firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
    var uid = user.uid;
   
      

    if(user != null){
window.location.href = 'monitor.html';
    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')

  }
});

var db = firebase.firestore();


function iniciarsesion(){

  

  var crreo = document.getElementById('email').value;
  var password = document.getElementById('pass').value;

 firebase.auth().signInWithEmailAndPassword(crreo, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorMessage);
  // ...
});


}






// Añadir un listener en tiempo real
 //  firebase.auth().onAuthStateChanged( firebaseUser => {
//Si existe autenticación hacer.....
   // if(firebaseUser) {
     //    window.location.href = "form.html";
    //} else {
      //console.log('no logueado');

    //}    
  //});


function logout(){
  firebase.auth().signOut();
}

