<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Syndeo App</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="title" content="Syndeo">
    <?php include "css-assets.php"; ?>
</head>

<body>
    <main>
        <section class="min-vh-100 d-flex align-items-center section-image overlay-soft-dark" style="background-color: #122f37;">
            <div id="pageLoader" class="container text-center">
                <div class="spinner-border text-white" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div id="pageContent" class="container d-none">
                <div class="row justify-content-center">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h4 class="mb-3 h3 text-dark font-weight-bold" style="font-weight: 600;">Syndeo
                                </h4>
                                <h1 class="mb-0 h3">Login To Your Account</h1>
                            </div>
                            <form action="#" id="loginForm" class="mt-4">
                                <div class="form-group mb-4"><label for="email">Your Email</label>
                                    <div class="input-group"><span class="input-group-text" id="basic-addon1"><span class="fas fa-envelope"></span></span> <input type="email" class="form-control" placeholder="example@company.com" id="email"></div>
                                </div>
                                <div class="form-group mb-4">
                                    <div class="form-group"><label for="password">Your Password</label>
                                        <div class="input-group"><span class="input-group-text" id="basic-addon2"><span class="fas fa-unlock-alt"></span></span> <input type="password" placeholder="Password" class="form-control" id="password">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-2">
                                    <span id="formMessage" class="text-danger font-weight-bold"></span>
                                </div>
                                <div class="d-grid">
                                    <button type="submit" id="loginButton" class="btn btn-primary d-flex justify-content-center">
                                        <span id="loginButtonText">
                                            Login
                                        </span>
                                        <div class="spinner-border spinner-border-sm text-light d-none my-1" role="status" id="loginButtonLoader">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <div class="mt-3 mb-4 text-center"><span class="font-weight-normal">or login with</span>
                            </div>
                            <div class="btn-wrapper my-4 text-center">
                                <button onclick="signInWithGoogle()" class="btn btn-danger-outline text-google mr-2" aria-label="google button" title="google button">
                                    <span aria-hidden="true" class="fab fa-google"></span><span class="pl-1">Google</span>
                                </button>
                                <!-- <button class="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2"
                                    aria-label="facebook button" title="facebook button">
                                    <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                </button>
                                <button class="btn btn-icon-only btn-pill btn-outline-light text-apple mr-2"
                                    aria-label="apple button" title="apple button">
                                    <span aria-hidden="true" class="fab fa-apple"></span>
                                </button> -->
                            </div>
                            <div class="d-flex justify-content-center align-items-center mt-4">
                                <span class="font-weight-normal">
                                    Don't have an account?
                                    <a href="register.php" class="font-weight-bold">Create one!
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include "js-assets.php"; ?>
    <script src="js/login.js"></script>
</body>

</html>