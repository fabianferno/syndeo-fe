$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (user.emailVerified) window.location.href = "home.php";
            else window.location.href = "verify-account.php";

            
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

                // TODO: get userType and isActive and save in localstorage
                window.location.href = "home.php";
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