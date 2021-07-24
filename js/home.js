$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.user = user;
          if (user.emailVerified) {
            window.uid = user.uid;
            document.getElementById('pageLoader').classList.add('d-none');
            document.getElementById('pageContent').classList.remove('d-none');

            document.getElementById('username').innerHTML = user.displayName;
            document.getElementById('avatar').innerHTML = user.profileURL;

            var path = window.location.pathname;
            var page = path.split("/").pop();
            console.log(page);
        
            $('[href="' + page + '"]').addClass("active");



          } else {
              var thisPage = window.location.href.split('/').pop();
              window.location.href = "verify-account.php?redirect="+thisPage;
          }

        } else {
            // signed out
          window.location.href = "index.php";
        }
      });
    
})