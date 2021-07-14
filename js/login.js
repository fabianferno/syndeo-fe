$(document).ready(function () {
  // Check if user is also signed in
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (idToken) {
          window.id_token = idToken;
          window.uid = user.uid;
          localStorage.profilePic = user.photoURL;

          console.log(uid);
          console.log(idToken);

          // Check if registered with backend
          $.ajax({
            type: "POST",
            url: APIRoute + "users/register",
            datatype: "html",
            data: {
              uid: uid,
              idToken: id_token,
            },
            success: function (response) {
              console.log(response);

              // Redirect if admin
              if (response == "admin") {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    window.location.replace(adminAppUrl);
                  });
              }

              // If the profile is incomplete
              else if (response == "profile-incomplete") {
                window.location.replace("complete-profile.php");
              }

              // if the profile is complete
              else if (response == "exists") {
                window.location.replace("dashboard.php");
              }

              // Error !
              else if (response == "fail") {
                var user = firebase.auth().currentUser;
                console.error("db-error");
              }
            },
            error: function (error) {},
          });
        });
    } else {
      // No user is signed in.
      console.log(false);

      // Hide page content and show loader
      $("#pageLoader").addClass("d-none");
      $("#pageContent").removeClass("d-none");
    }
  });

  // Listen for register button submit
  $("#loginForm").submit(function (e) {
    e.preventDefault();

    // Get email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email == "") {
      document.getElementById("email").classList.add("is-invalid");
    }
    if (password == "") {
      document.getElementById("password").classList.add("is-invalid");
    } else {
      // Show loader and hide button text
      document.getElementById("loginButtonText").classList.add("d-none");
      document.getElementById("loginButtonLoader").classList.remove("d-none");
      document.getElementById("loginButton").classList.add("disabled");

      // Login to your account
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          localStorage.profilePic = user.photoURL;
        })
        .catch((error) => {
          // var errorCode = error.code;
          var errorMessage = error.message;
          document.getElementById("formMessage").innerHTML = errorMessage;
          resetForm();
        });
    }
  });
});

function resetForm() {
  // Reset inputs
  document.getElementById("email").classList.add("is-invalid");
  document.getElementById("password").classList.add("is-invalid");
  // Show loader and hide button text
  document.getElementById("loginButtonText").classList.remove("d-none");
  document.getElementById("loginButtonLoader").classList.add("d-none");
  document.getElementById("loginButton").classList.remove("disabled");
}

function resetLoginButton() {
  // Show loader and hide button text
  document.getElementById("loginButtonText").classList.remove("d-none");
  document.getElementById("loginButtonLoader").classList.add("d-none");
  document.getElementById("loginButton").classList.add("disabled");
}

function signInWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}
