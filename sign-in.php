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
  <div id="pageContent">
    <div class="container d-flex flex-column">
      <div class="row align-items-center justify-content-center g-0
          min-vh-100">
        <div class="col-12 col-md-8 col-lg-6 col-xxl-4 py-8 py-xl-0">
          <!-- Card -->
          <div class="card smooth-shadow-md">
            <!-- Card body -->
            <div class="card-body p-6">
              <div class="mb-4 d-flex flex-row align-items-center">
                <img src="assets/images/png/logo.png" style="width:40px; height:40px;" class="rounded-circle mx-2" alt="image">
                <h2 class="fw-bold my-auto">Syndeo</h2>
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
                  <input type="password" id="password" class="form-control" name="password" placeholder="**************" required="">
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

                  <div class="d-md-flex justify-content-center mt-4">
                      <a href="forget-password.php" class="text-inherit
                          fs-5">Forgot your password?</a>
                  </div>
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
  <script src="js/sign-in.js"></script>
</body>

</html>