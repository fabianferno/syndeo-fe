<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include "components/css-assets.php" ?>
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
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
        <div id="db-wrapper">
            <?php include "components/navbar-vertical.php" ?>

            <!-- Page content -->
            <div id="page-content">
            <?php include "components/header.php" ?>
            <div class="container-fluid px-6 py-4">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12">
                        <!-- Page header -->
                        <div>
                            <div class="border-bottom pb-4 mb-4 d-flex align-items-center
                                justify-content-between">
                                <div class="mb-2 mb-lg-0">
                                <h3 class="mb-0 fw-bold">Settings</h3>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-8">
                    <div class="col-xl-3 col-lg-4 col-md-12 col-12">
                        <div class="mb-4 mb-lg-0">
                        <h4 class="mb-1">General Settings</h4>
                        <p class="mb-0 fs-5 text-muted">Change Password</p>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 col-md-12 col-12">
                        <!-- card -->
                        <div class="card">
                        <!-- card body -->
                        <div class="card-body mx-3">
                            <div class="mb-4">
                                <h4 class="mb-1">Change your password</h4>
                            </div>
                            <form id="changePasswordForm">
                                <!-- row -->
                                <div class="mb-3 row">
                                    <label for="oldPassword" class="form-label">Current Password</label>
                                    <input type="password" class="form-control" placeholder="************" id="oldPassword" required="">
                                    <small class="text-danger d-none" style="font-size: 10px;" id="incorrect-password">Incorrect Password</small>
                                </div>
                                <div class="mb-3 row">
                                    <label for="NewPassword" class="form-label">New Password</label>
                                    <input type="password" class="form-control" placeholder="************" id="NewPassword" required="">
                                </div>
                                <div class="mb-3 row">
                                    <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
                                    <input type="password" class="form-control" placeholder="************" id="confirmNewPassword" required="">
                                    <small class="text-danger d-none" style="font-size: 10px;" id="password-mismatch-message">Password does not match</small>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <small class="text-success d-none" id="message-success">Saved!</small>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary" id="changePasswordButton">
                                        <span id="changePasswordBtnText">Save</span> 
                                        <div class="spinner-border-sm text-white d-none" id="changePasswordLoader">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-8 d-none" id="profile-visibility">
                    <div class="col-xl-3 col-lg-4 col-md-12 col-12">
                        <div class="mb-4 mb-lg-0">
                        <h4 class="mb-1">Profile Settings</h4>
                        <p class="mb-0 fs-5 text-muted">Profile visibility</p>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 col-md-12 col-12">
                        <div class="card">
                            <div class="card-body mx-3">
                                <div class="row">
                                    <div class="col-1 form-check form-switch px-2">
                                        <input type="checkbox" class="form-check-input mt-md-0" id="mentorship-switch" style="font-size: 20px; margin-left: 0.2rem;">
                                    </div>
                                    <div class="col-10 ms-5">
                                        <h5> Let me take part in the Mentorship Program</h5>
                                    </div>
                                    <p> By Turning on this switch, your profile will be visible to students who are in search for mentors.</p>
                                </div>
                                <div class="row">
                                    <small class="text-success d-none" id="message-saved">Saved!</small>
                                    <small class="text-danger d-none" id="message-not-saved">Changes not Saved. Try again later.</small>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-primary" id="saveToggleSwitchChanges" onclick="saveToggleButtonChanges()">
                                        <span id="ToggleSwitchBtnText">Save</span> 
                                        <div class="spinner-border-sm text-white d-none" id="ToggleSwitchLoader">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-8">
                    <div class="col-xl-3 col-lg-4 col-md-12 col-12">
                        <div class="mb-4 mb-lg-0">
                            <h4 class="mb-1">Danger Zone</h4>
                            <p class="mb-0 fs-5 text-muted">Delete Account</p>
                        </div>
                    </div>

                    <div class="col-xl-9 col-lg-8 col-md-12 col-12">
                        <!-- card -->
                        <div class="card">
                        <!-- card body -->
                        <div class="card-body mx-3 mb-2">
                            <div class="mb-4">
                                <h4 class="mb-1">Delete your account</h4>
                            </div>
                            <p>This will Delete your account in Syndeo. </p>
                            <p id="mentor-message" class="d-none"> If you are a Mentor and you are willing to take a break from mentorship programme, simply turn off the mentorship program switch above.</p>
                            <button class="btn btn-danger" id="deleteAccountBtn" onclick="deleteAccount()"> Delete Account</button>
                            <p class="text-danger d-none" id="message-delete-fail">Failed to delete!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>

    <!-- Scripts -->
    <?php include "components/js-assets.php" ?>
    <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
    <script src="js/settings.js"></script>


  </body>

</html>