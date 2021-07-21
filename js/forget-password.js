$(document).ready(() => {
    document.getElementById('pageLoader').classList.add('d-none');
    document.getElementById('pageContent').classList.remove('d-none');
})

document.getElementById('forgetPasswordForm').addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('resetPasswordButton').setAttribute('disabled', 'disabled');
    document.getElementById('resetPasswordSendEmail').classList.add('d-none');
    document.getElementById('resetPasswordLoader').classList.remove('d-none');

    var email = document.getElementById('email').value;

    firebase.auth().sendPasswordResetEmail(email, {
        url: userAppUrl + "sign-in.php"
    })
        .then(function() {
            document.getElementById('resetPasswordLoader').classList.add('d-none');
            document.getElementById('resetPasswordEmailSent').classList.remove('d-none');
        })
        .catch(function(error) {
        // Error occurred. Inspect error.code.
        });
})