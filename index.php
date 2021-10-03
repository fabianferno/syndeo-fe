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
          <div class="text-center card bg-white shadow p-5">
            <div class="p-4">
              <div class="d-flex justify-content-center align-items-center">
                <img src="./assets/images/png/she-logo-orange2.png" style="height:100px;margin-right:15px;" alt="">
                <img src="./assets/images/png/logo.png" style="height:100px;margin-right:15px;" alt="" srcset="">
                <img src="./assets/images/png/syndeo-main-blue.png" style="height:97px;" alt="" srcset="">
              </div>
              <img src="./assets/images/png/syndeo-text-blue.png" style="height:80px; margin-top:15px" alt="" srcset="">
              <p class="mt-2">Licet Alumni Mentorship Platform</p>
            </div>
            <div class="d-flex justify-content-around px-5 pt-5 mt-2">
              <a href="login.php" class="btn btn-lg btn-primary ">Login</a>
              <a href="sign-up.php" class="btn btn-lg btn-dark-secondary ">Sign Up</a>
            </div>
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