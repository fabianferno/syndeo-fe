<!DOCTYPE html>
<html lang="en">

<head>
  <?php include "components/css-assets.php" ?>
  <title>Profile Overview | Syndeo</title>
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

      <div id="page-content">
        <?php include "components/header.php" ?>

        <div class="container-fluid px-6 py-4">
          <div class="row align-items-center">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <!-- Bg -->
              <div class="pt-20 rounded-top" style="background:
                  url(assets/images/background/profile-cover.jpg) no-repeat;
                  background-size: cover;">
              </div>
              <div class="bg-white rounded-bottom smooth-shadow-sm ">
                <div class="d-flex align-items-center justify-content-between
                    pt-4 pb-6 px-4">
                  <div class="d-flex align-items-center">
                    <!-- avatar -->
                    <div class="avatar-xxl avatar-indicators avatar-online me-2
                        position-relative d-flex justify-content-end
                        align-items-end mt-n10">
                      <img src="assets/images/png/avatar.png" class="avatar-xxl
                          rounded-circle border border-4 border-white-color-40" onerror="javascript: setDefaultAvatar()" id="profileAvatar" alt="">
                      <a href="#!" class="position-absolute top-0 right-0 me-2" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Verified">
                        <img src="assets/images/svg/checked-mark.svg" alt="" height="30" width="30">
                      </a>
                    </div>
                    <!-- text -->
                    <div class="lh-1">
                      <h2 class="mb-0" id="fullname">
                        <a href="#!" class="text-decoration-none" data-bs-toggle="tooltip" data-placement="top" title="" data-original-title="Beginner">
                        </a>
                      </h2>
                      <p class="mb-0 d-block designation"></p>
                    </div>
                  </div>
                </div>
                <!-- nav -->
                <div class="d-flex justify-content-center justify-content-md-end pb-4 mx-4">
                  <a href="edit-profile.php" class="btn btn-outline-primary d-none" id="editProfileButton">Edit Profile</a>
                  <button type="button" class="btn btn-lg btn-primary d-none" id="askMentorshipBtn" onclick="showModal()">Connect to Mentor</button>
                  <a class="btn btn-lg btn-primary d-none" id="acceptMentorshipRequest">Accept Mentorship Request</a>
                </div>
              </div>
            </div>
          </div>
          <!-- content -->
          <div class="py-6">
            <div class="row">
              <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-6">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-4">About</h4>
                    <span class="text-uppercase fw-medium text-dark
                        fs-5 ls-2">Summary</span>
                    <p class="mt-2 mb-6" id="summary">
                    </p>
                    <!-- row -->
                    <div class="row">
                      <div class="col-12 mb-5">
                        <!-- text -->
                        <h6 class="text-uppercase fs-5 ls-2">Designation
                        </h6>
                        <p class="mb-0 designation"></p>
                      </div>
                      <div class="col-6">
                        <h6 class="text-uppercase fs-5 ls-2">Email </h6>
                        <p id="email"></p>
                      </div>
                      <div class="col-6">
                        <h6 class="text-uppercase fs-5 ls-2">Country
                        </h6>
                        <p id="country"></p>
                      </div>
                    </div>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">LinkedIn URL</h6>
                      <a id="linkedInAnchorTag"> <p id="linkedInUrl"></p> </a>
                    </div>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">Portfolio Link</h6>
                      <a id="portfolioLinkAnchorTag"><p id="portfolioLink"></p> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-6">
                <!-- card -->
                <div class="card mb-6">
                  <div class="card-body">
                    <h4 class="card-title mb-4">Academic Information</h4>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">Branch</h6>
                      <p id="branch"></p>
                    </div>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">Year</h6>
                      <p id="year"></p>
                    </div>
                    <div id="mentorsInfo" class="d-none">
                      <div class="row">
                        <h6 class="text-uppercase fs-5 ls-2">Higher Education</h6>
                        <div id="higherEd"></div>
                      </div>
                      <div class="row">
                        <h6 class="text-uppercase fs-5 ls-2">Licenses and Certifications</h6>
                        <div id="certs"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title mb-4">More info</h4>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">Areas of Interest </h6>
                      <p id="areasOfInterest"></p>
                    </div>
                    <div class="row">
                      <h6 class="text-uppercase fs-5 ls-2">Languages Known </h6>
                      <p id="languages"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 

  <!-- connect to mentor modal -->
  <div class="modal fade" id="askForMentorshipModal" tabindex="-1" aria-labelledby="askForMentorshipModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title fw-bold" id="askForMentorshipModalLabel">Add a note</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModal()"></button>
        </div>
        <div class="modal-body">
          <p>This will help the mentor to get know more about you. </p>
          <textarea id="menteeSummary" rows="3" class="form-control" maxlength="100" autofocus></textarea> 
          <small class="text-danger d-none" id="message-error">This is Required!</small>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="closeModal()">Close</button>
          <button type="button" class="btn btn-primary" onclick="askForMentorship()" id="connectBtn">Connect <span class="spinner-loader spinner-loader-sm text-light d-none" id="mentorshipLoader"></span> </button>
        </div>
      </div>
    </div>
  </div>


  <!-- Scripts -->
  <?php include "components/js-assets.php" ?>
  <script src="js/auth-status.js"></script>
  <script src="js/profile.js"></script>
</body>

</html>