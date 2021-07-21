$(document).ready(() => {
    document.getElementById('pageLoader').classList.add('d-none');
    document.getElementById('pageContent').classList.remove('d-none');
})

document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();

    document.getElementById('signInButton').setAttribute('disabled', 'disabled');
    document.getElementById('signInButtonText').classList.add('d-none');
    document.getElementById('signInButtonLoader').classList.remove('d-none');

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.user = userCredential.user;

            localStorage.uid = userCredential.user.uid;
            localStorage.fullName = userCredential.user.displayName;
            localStorage.email = userCredential.user.email;
            
            console.log(localStorage.uid);
            window.location.href = "home.php";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorMessage)
        });
})