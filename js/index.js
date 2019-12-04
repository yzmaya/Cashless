firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
    var uid = user.uid;
    guardarInfo(uid);
   



   // window.location.href = 'home.html';

    if(user != null){

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')

  }
});


var db = firebase.firestore();


function cuentaNueva(){

  var newEmail = document.getElementById('nuevo_email').value;
  var newPwd = document.getElementById('nuevo_pwd').value;

  firebase.auth().createUserWithEmailAndPassword(newEmail, newPwd).catch(function(error) {
  // Handle Errors here.


  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert(errorMessage);
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




