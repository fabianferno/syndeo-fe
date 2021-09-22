$(document).ready(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      window.user = user;
      if (user.emailVerified) {
        window.uid = user.uid;

        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log(page);
        $('[href="' + page + '"]').addClass("active");

        firebase
          .auth()
          .currentUser.getIdToken(true)
          .then(function (idToken) {
            localStorage.idToken = idToken;
            console.log(window.uid);

            $.ajax({
              type: "POST",
              url: APIRoute + "users/auth-status",
              datatype: "html",
              data: {
                uid: window.uid,
                idToken: idToken,
              },

              success: function (response) {
                if (response.authStatus == "true") {
                  localStorage.displayName = user.displayName;
                  document.getElementById("username").innerHTML =
                    user.displayName;
                  document.getElementById("avatar").innerHTML =
                    response.profilePic;
                  localStorage.type = response.userType;
                  localStorage.isActive = response.isActive;

                  if (response.userType == "Student") {
                    document
                      .getElementById("search-mentors-link")
                      .classList.remove("d-none");
                  }

                  pageScript();
                } else logout();
              },
            });
          });
      } else {
        var thisPage = window.location.href.split("/").pop();
        window.location.href = "verify-account.php?redirect=" + thisPage;
      }
    } else {
      // signed out
      window.location.href = "index.php";
    }
  });
});
