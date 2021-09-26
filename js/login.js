$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) { 
            var url = new URL(window.location.href);
            var redirectPage = url.searchParams.get("redirect");

            
            if (user.emailVerified) { 
                if (redirectPage) window.location.href = redirectPage;
                else window.location.href = "home.php";
            }
            else {
                if (redirectPage) window.location.href = "verify-account.php?redirect=" + redirectPage;
                else window.location.href = "verify-account.php";
            }

            
        } else {
            // signed out
            document.getElementById('pageLoader').classList.add('d-none');
            document.getElementById('pageContent').classList.remove('d-none');
        }
    });
    
    document.getElementById('signInForm').addEventListener('submit', (e) => {
        e.preventDefault();

        document.getElementById('signInButton').setAttribute('disabled', 'disabled');
        document.getElementById('signInButtonText').classList.add('d-none');
        document.getElementById('signInButtonLoader').classList.remove('d-none');
        document.getElementById('message-error').innerHTML = '';

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                window.user = userCredential.user;
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                document.getElementById('message-error').innerHTML = errorMessage;
                console.log(errorMessage)
                document.getElementById('signInButton').removeAttribute('disabled');
                document.getElementById('signInButtonText').classList.remove('d-none');
                document.getElementById('signInButtonLoader').classList.add('d-none');
            });
    })

})