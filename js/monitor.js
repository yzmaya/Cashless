
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


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {


    if (user != null) {


      var uid = user.uid;
      mostrarDatos();
      console.log(uid)

      // document.getElementById("uid").innerHTML = uid; 

    }

  } else {
    // No user is signed in.

    console.log('usuario no logueado')
    window.location.href = 'premonitor.html';

  }
});




var db = firebase.firestore();



function logout() {
  firebase.auth().signOut();
}

function mostrarDatos() {

  db.collection("users").get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
  });

  var conteo = 0;
  db.collection('users').get().then(function (querySnapshot) {
    tabla.innerHTML = '';
    querySnapshot.forEach(function (doc) {
      //    console.log(conteo);
      tabla.innerHTML += `
                  <tr> 
                    <td style="display: none" id='${conteo}'>${doc.id}</td>
                    <td>yzmaya.github.io/Cashless/Pro_sign/docs/</td>
                    <td colspan='2'><img class="img-fluid" src='img/logo.png' height="82px"/></td>
                    <td>${doc.data().fnombre} ${doc.data().fapellido}</td>
                    <td id='codigoQR${conteo}'></td>
                  </tr>
       `
      conteo = conteo + 1;
    });

    veamos(conteo);

  });
};

function veamos(final) {
  var i;
  for (i = 0; i < final; i++) {
    var miid = document.getElementById(i).innerHTML;
    var miCodigoQR = new QRCode("codigoQR" + i);

    hola(miCodigoQR, miid);
  };
};


function hola(qr, myid) {
  var cadena = myid;
  if (cadena == "") {
    console.log("error");

  } else {
    //$("#descargarCodigo").css("display","inline-block");
    qr.makeCode(cadena);
  }
};


//buscar en la tabla
$(document).ready(function () {

  (function ($) {

    $('#filtrar').keyup(function () {

      var rex = new RegExp($(this).val(), 'i');

      $('.buscar tr').hide();
      $('.buscar tr').filter(function () {
        return rex.test($(this).text());

      }).show();

    });

  }(jQuery));


});