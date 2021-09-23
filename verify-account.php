<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include "components/css-assets.php" ?>
    <title>Syndeo App</title>
  </head>

  <body>
      <!-- Page Loader Starts Here -->
    <div id="pageLoader" class="container text-center d-flex align-items-center justify-content-center w-100" style="height: 100vh;">
        <div class="spinner-border text-dark" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- Page Loader Ends Here -->
    <div id="pageContent" class="d-none">
    <section class="min-vh-100 d-flex align-items-center section-image bg-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div
                            class="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h4 class="mb-3 h3 text-dark font-weight-bold" style="font-weight: 900;">Syndeo
                                </h4>
                                <h1 class="mb-0 h3">Verify your email! <i class="fas fa-envelope"></i></h1>
                            </div>

                            <div class="d-flex justify-content-center align-items-center mt-4">
                                <span class="font-weight-normal text-center">
                                    Looks like you haven't verified your email address! Please check your email account
                                    and click on the verify button as we will need it to send important notifications!
                                </span>
                            </div>

                            <div class="d-flex flex-column align-items-center">
                                <a id="emailVerifiedBtn" class="btn btn-dark-secondary btn-block mt-4" onclick="emailVerified()">
                                    I Have Verified My Email
                                </a>
                                <button onclick="resendVerificationEmail()" class="btn btn-dark-secondary btn-block mt-2">
                                    <div id="resendEmailButtonLoader"
                                        class="spinner-border spinner-border-sm text-white my-1 d-none" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                    <span id="resendEmailButtonText">
                                        Resend Verification Email
                                    </span>
                                </button>
                            </div>
                            

                            <div class="text-center mt-3">
                                <small id="resendFailed" class="text-danger font-weight-bold d-none">
                                    Oops, there was a problem resending the email.
                                </small>
                                <small id="resendSuccess" class="text-success font-weight-bold d-none">
                                    That worked! Please check your inbox.
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Scripts -->
    <?php include "components/js-assets.php" ?>
    <script src="js/verify-account.js"></script>


  </body>

</html>