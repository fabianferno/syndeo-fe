<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include "components/css-assets.php" ?>
    <title>Syndeo App</title>
  </head>

  <body>
    <!-- Error page -->
    <div class="container min-vh-100 d-flex justify-content-center
      align-items-center">
      <div class="row">
        <div class="col-12">
          <!-- Page Loader Starts Here -->
          <div id="pageLoader" class="container text-center d-flex align-items-center justify-content-center w-100" style="height: 100vh;">
              <div class="spinner-border text-dark" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden">Loading...</span>
              </div>
          </div>
          <!-- Page Loader Ends Here -->
          <!-- content -->
          <div id="pageContent" class="d-none">
            <div class="text-center">
              <h1 class="display-4 fw-bold">Syndeo</h1>
              <p class="mb-4"></p>
              <a href="sign-in.php" class="btn btn-primary">Sign In</a>
              <a href="create-profile.php" class="btn btn-dark-secondary">Sign Up</a>
            </div>
          </div>
          <!-- content -->
        </div>
      </div>
    </div>
    <!-- Scripts -->
    <?php include "components/js-assets.php" ?>
    <script src="js/index.js"></script>
  </body>

</html>