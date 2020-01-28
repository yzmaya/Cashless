firebase.auth().onAuthStateChanged(function(user) {
  if (user) {


    // User is signed in.

    var user = firebase.auth().currentUser;
    console.log('usuario autentificado');
    var uid = user.uid;
   
        guardarInfo(uid);

    if(user != null){
//window.location.href = 'monitor.html';
    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')

  }
});

var db = firebase.firestore();


function cuentaNueva(){

  

  var newName = document.getElementById('nuevo_nombre').value;
  var newApel = document.getElementById('nuevo_apellido').value;

  var newEmail = document.getElementById('nuevo_email').value;
  //var newPwd = document.getElementById('nuevo_pwd').value;
  var newPwd = 'admin1';

  if(newName == ''){
    alert('llena los campos faltantes');
    $("#nuevo_nombre").focus();

    
  }else if(newApel == ''){
    alert('llena los campos faltantes');
    $("#nuevo_apellido").focus();
  }else{


  firebase.auth().createUserWithEmailAndPassword(newEmail, newPwd).catch(function(error) {
  // Handle Errors here.


  var errorCode = error.code;
  var errorMessage = error.message;
  // ...

  window.alert(errorMessage);
  $("#nuevo_email").focus();
});

//aqui termina else
 };

}



function guardarInfo(id){
  var nom = document.getElementById("nuevo_nombre").value;
  var apel = document.getElementById("nuevo_apellido").value;

 db.collection('users').doc(""+id+"").set({
          fnombre: nom,
          fapellido: apel
          
      })
      .then(function(docRef) {
        //  console.log("Document written with ID: ", docRef.perfil);
        document.getElementById("nuevo_nombre").value = '';
        document.getElementById("nuevo_apellido").value = ''; 
        document.getElementById("nuevo_email").value = '';
        //***** COMENTA Y DESCOMENTA PARA VER EL MONITOR.HTML *****************************
      
        logout();

       // window.location.href = 'monitor.html';
     //  document.getElementById("item_txt").value = id;
       //$("#item_txt").focus();

      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });


};


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

