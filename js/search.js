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

            if (localStorage.type == "mentor") {
              
            } else {
              document.getElementById('search-mentors-link').classList.remove('d-none')
            }
        
            $('[href="' + page + '"]').addClass("active");

            document.getElementById('search').onsubmit((e) => {
                e.preventDefault();
                search();
            })


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

function search() {
  var query = document.getElementById('searchQuery').value;

  $.ajax({
    type: "GET",
    url: APIRoute + "users",
    datatype: "html",
    data: {
      uid: window.uid,
      query: query
  },
  success: function(response) {
    if (response == "error") {
      document.getElementById('message-error').classList.remove('d-none');
    } else if (response == "no-results") {

    } else {

    }
    
  },
    error: (error) =>{
      console.log(error);
      document.getElementById('message-error').classList.remove('d-none');
    },
  })
}