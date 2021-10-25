<!DOCTYPE html>
<html lang="en">

<head>
  <?php include "components/css-assets.php" ?>
  <title>Sign In | Syndeo </title>
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
    <div class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center g-0
          min-vh-100">
        <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          <!-- Card -->
          <div class="card smooth-shadow-md">
            <!-- Card body -->
            <div class="card-body p-6">
              <div class="mb-5 d-flex flex-row justify-content-start align-items-center">
                <img src="assets/images/png/logo.png" style="width:40px; height:40px;" class="rounded-circle me-2" alt="image">
                <img src="assets/images/png/syndeo-text-blue.png" style="height:40px; margin-left:8px" alt="image">
              </div>
              <!-- Form -->
              <form id="signInForm">
                <!-- Username -->
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" id="email" class="form-control" name="email" placeholder="Email address here" required="">
                </div>
                <!-- Password -->
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" id="password" class="form-control" name="password" placeholder="Password" required="">
                  <span class="fa fa-fw fa-eye field_icon toggle-password"></span>
                  <small class="my-2 d-flex justify-content-end">
                    <a href="forgot-password.php">Forgot your password?</a>
                  </small>
                  <small class="my-2 d-flex justify-content-end" id="message-error"></small>
                </div>
                <div>
                  <!-- Button -->
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary" id="signInButton">
                      <span id="signInButtonText">Sign in</span>
                      <div class="spinner-border spinner-border-sm text-light d-none" id="signInButtonLoader" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </button>
                  </div>
                  <div class="d-flex justify-content-center my-3">Don't have an account? &nbsp; <a href="sign-up.php">Sign up</a></div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Scripts -->
  <?php include "components/js-assets.php" ?>
  <script src="js/login.js"></script>
</body>

</html>