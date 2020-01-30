firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
      var uid = user.uid;
    localStorage.setItem('uiid',uid);
       guardarInfo();

    if(user != null){

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')

  }
});

var db = firebase.firestore();

function login(){

  var userEmail = document.getElementById('campo_email').value;
  var userPwd = document.getElementById('campo_pwd').value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPwd).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

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




function guardarInfo(){
  var xaja = localStorage.getItem('uiid');
 var newStnd = document.getElementById('nuevo_estand').value;
  var newName = document.getElementById('nuevo_nombre').value;


 db.collection('suppliers').doc(xaja).set({
          festand: newStnd,
          fnombre: newName
          
      })
      .then(function(docRef) {
        //  console.log("Document written with ID: ", docRef.perfil);
       window.location.href = 'home.html';
        //***** COMENTA Y DESCOMENTA PARA VER EL MONITOR.HTML *****************************
      
        //logout();

       // window.location.href = 'monitor.html';
     //  document.getElementById("item_txt").value = id;
       //$("#item_txt").focus();

      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });


};

function restablecePwd(){
  var auth = firebase.auth();
  
var correo = document.getElementById('restablece_email').value;

auth.sendPasswordResetEmail(correo).then(function() {
  $('#mensajito').show();
  // Email sent.
}).catch(function(error) {
  // An error happened.
  window.alert(error);
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




