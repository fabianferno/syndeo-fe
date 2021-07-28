$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.user = user;
            if (user.emailVerified) window.location.href = "home.php";
            else {
                document.getElementById('pageLoader').classList.add('d-none');
                document.getElementById('pageContent').classList.remove('d-none');
            }

        } else {
            // signed out
            window.location.href = "index.php"
        }
    });
});

function resendVerificationEmail() {
    document.getElementById('resendEmailButtonLoader').classList.remove('d-none');
    window.user
    .sendEmailVerification()
    .then(function () {
        document.getElementById('resendSuccess').classList.remove('d-none');
        document.getElementById('resendEmailButtonLoader').classList.add('d-none');

        var url = new URL(window.location.href);
        var redirectPage = url.searchParams.get("redirect");
        if (redirectPage)
            document.getElementById('emailVerifiedBtn').href = redirectPage;
        else 
            document.getElementById('emailVerifiedBtn').href = "home.php";

    })
    .catch(function (error) {
        document.getElementById('resendFailed').classList.remove('d-none');
        document.getElementById('resendEmailButtonLoader').classList.add('d-none');

    });
}