$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          document.getElementById('pageLoader').classList.add('d-none');
          document.getElementById('pageContent').classList.remove('d-none');

          document.getElementById('username').innerHTML = user.email;
          // document.getElementById('username').innerHTML = localStorage.fullName;
          // document.getElementById('avatar').innerHTML = localStorage.avatar;
        } else {
            // signed out
          window.location.href = "index.php";
        }
      });
    
})