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

            if (localStorage.type == "mentor") {
                document.getElementById('mentor-message').classList.remove('d-none');
                document.getElementById('profile-visibility').classList.remove('d-none');
                document.getElementById('mentorship-switch').checked = localStorage.isActive;
            } else {
                document.getElementById('search-mentors-link').classList.remove('d-none')
            }

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
    
    document.getElementById('changePasswordForm').addEventListener('submit', (e) => {
        e.preventDefault();
        $('input[required=""]').removeClass('is-invalid');
        document.getElementById('incorrect-password').classList.add('d-none');
        document.getElementById('password-mismatch-message').classList.add('d-none');
        document.getElementById('message-success').classList.add('d-none');

        document.getElementById('changePasswordButton').setAttribute('disabled', 'disabled')
        document.getElementById('changePasswordBtnText').classList.add('d-none');
        document.getElementById('changePasswordLoader').classList.remove('d-none');

        var oldPassword = document.getElementById('oldPassword').value;
        var password = document.getElementById('NewPassword').value;
        var confirmPassword = document.getElementById('confirmNewPassword').value;

        if (password === confirmPassword) {
            if (password != "" || password != null || password != undefined) { 
                var user = firebase.auth().currentUser;
                const credential = firebase.auth.EmailAuthProvider.credential(
                    user.email,
                    oldPassword
                );
                user
                    .reauthenticateWithCredential(credential)
                    .then(user.updatePassword(password))
                    .then(function () {
                    // Update successful
                    showButton();
                    document.getElementById('message-success').classList.remove('d-none');


                }).catch(function (error) {
                    // An error happened.
                    document.getElementById('incorrect-password').classList.remove('d-none');
                    document.getElementById('oldPassword').classList.add('is-invalid');
                    showButton();
                });
            }
        } else {
            document.getElementById('password-mismatch-message').classList.remove('d-none');
            document.getElementById('confirmNewPassword').classList.add('is-invalid');
            showButton();
        }
    })
})

function showButton () {
    document.getElementById('changePasswordButton').removeAttribute('disabled');
    document.getElementById('changePasswordBtnText').classList.remove('d-none');
    document.getElementById('changePasswordLoader').classList.add('d-none');
}

function deleteAccount() {
    var user = firebase.auth().currentUser;
    user
        .delete()
        .then(function () {
            $.ajax({
                type: "DELETE",
                url: APIRoute + "users",
                datatype: "html",
                data: {
                  uid: window.uid,
                },
                success: function (response) {
                    if (response == "success") {
                        localStorage.removeItem("type")
                        localStorage.removeItem("isActive")
                        window.location.replace("index.php");
                    } else {
                        document.getElementById('message-delete-fail').classList.remove('d-none')
                    }
                },
                error: function (error) {}

            })
        })
        .catch(function (error) {
        // An error happened.
        });
}

function saveToggleButtonChanges() {
    document.getElementById('saveToggleSwitchChanges').setAttribute('disabled', 'disabled');
    document.getElementById('message-saved').classList.add('d-none');
    document.getElementById('message-not-saved').classList.add('d-none');
    document.getElementById('ToggleSwitchBtnText').classList.add('d-none');
    document.getElementById('ToggleSwitchLoader').classList.remove('d-none');
    var value = document.getElementById('mentorship-switch').checked;
    $.ajax({
        type: "PATCH",
        url: APIRoute + "users",
        datatype: "html",
        data: {
          op: 'update',
          uid: window.uid,
          key: "isActive",
          value: (value == true) ? 1 : 0,
        },
        success: function (response) {
            if (response == "success") {
                document.getElementById('saveToggleSwitchChanges').removeAttribute('disabled');
                document.getElementById('ToggleSwitchLoader').classList.add('d-none');
                document.getElementById('ToggleSwitchBtnText').classList.remove('d-none');
                document.getElementById('message-saved').classList.remove('d-none');
            } else {
                document.getElementById('saveToggleSwitchChanges').removeAttribute('disabled');
                document.getElementById('ToggleSwitchLoader').classList.add('d-none');
                document.getElementById('ToggleSwitchBtnText').classList.remove('d-none');
                document.getElementById('message-not-saved').classList.remove('d-none')
            }
        },
        error: function (error) {}

    })
    
}