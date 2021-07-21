$(document).ready(() => {
    document.getElementById('pageLoader').classList.add('d-none');
    document.getElementById('pageContent').classList.remove('d-none');

    document.getElementById('signInForm').addEventListener('submit', (e) => {
        e.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                window.user = userCredential.user;
                window.uid = userCredential.user.uid;
                console.log(window.uid);
                window.location.href = "home.php";
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorMessage)
            });
    })


})