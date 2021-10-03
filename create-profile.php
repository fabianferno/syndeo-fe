<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Create Profile</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="title" content="Syndeo">

    <?php include "components/css-assets.php" ?>
    <link rel="stylesheet" href="assets/css/create-profile.css">
</head>

<body>
    <!-- Page Loader Starts Here -->
    <div id="pageLoader" class="d-none container text-center d-flex align-items-center justify-content-center w-100" style="height: 100vh;">
        <div class="spinner-border text-dark" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- Page Loader Ends Here -->



    <!-- Page Content Starts Here -->
    <main id="pageContent">
        <?php include "components/header.php" ?>
        <!--To prevent overflow-->
        <div class="overflow-hidden">

            <!--Navigation Bar with just the Logo that redirects to LICET Website-->
            <nav class="navbar navbar-expand-sm" style="background-color: rgb(1, 1, 83); color: white;">
                <a class="navbar-brand" href="https://licet.ac.in/" target="_blank" rel="noopener noreferrer">
                    <img alt="Brand" src="assets/images/create-profile/licet-logo.png" width="34">
                </a>
                <b style="font-size:20px;">Syndeo</b>
            </nav>
            <br>

            <div class="container rounded bg-white mt-1 mb-1">
                <div class="row">
                    <div class="col-md-3 border-right">

                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <h6>
                                <p class="text-center">Your Profile
                            </h6>
                            </p>
                            <!--Profile Picture-->

                            <div class="profile-pic-wrapper">
                                <div class="pic-holder">
                                    <!-- Uploaded pic shown here -->
                                    <img id="profilePic" class="pic" src="assets/images/create-profile/cam.png">

                                    <label for="newProfilePhoto" class="upload-file-block">
                                        <div class="text-center">
                                            <div class="mb-2">
                                                <i class="fa fa-camera fa-2x"></i>
                                            </div>
                                            <div class="text-uppercase">
                                                Update <br /> Profile Photo
                                            </div>
                                        </div>
                                    </label>
                                    <input class="uploadProfileInput" type="file" name="profile_pic" id="newProfilePhoto" accept="image/*" style="display: none;" />
                                </div>
                            </div>

                            <!--End of Profile Picture-->
                            <span class="font-weight-bold">Name</span>
                            <span class="text-black-50">placeholder@mail.com</span>
                            <br>
                            <br>

                            <span class="font-weight-bold">Your role</span>
                            <br>

                            <form style="padding-right:5px">
                                <input type="radio" name="RadioGroupName" id="GroupName1" />

                                Student
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="RadioGroupName" id="GroupName2" />

                                Mentor
                            </form>
                            <!--Delete Account Button-->
                            <div class="mt-5 text-center">
                                <button class="btn btn-primary profile-button" type="button" style="background-color: brown; border-color: brown; border-radius: 15px;">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>

                    <!--Section 2-->
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="text-right">Personal Details</h5>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="First name" value=""></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="Surname"></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Email</label>
                                    <input type="email" class="form-control" placeholder="Email" value="">
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Date of Birth</label>
                                    <input type="date" class="form-control" value="">
                                </div>
                                <div class="col-md-12">
                                    <label class="labels">Designation</label>
                                    <input type="text" class="form-control" placeholder="Designation" value="">
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6">
                                    <label class="labels">Country</label>
                                    <input type="text" class="form-control" placeholder="Country" value="">
                                </div>
                                <div class="col-md-6">
                                    <label class="labels">Postal Code</label>
                                    <input type="text" class="form-control" value="" placeholder="Postal Code">
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Mobile</label>
                                    <input type="text" class="form-control" placeholder="Mobile Number" value="">
                                </div>
                            </div>
                            <br>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp;
                                    &nbsp;
                                    I agree to take part in the Mentorship Program
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                <label class="form-check-label" for="flexCheckDefault">
                                    &nbsp;
                                    &nbsp;
                                    I'd to receive updates about events in the future
                                </label>
                            </div>
                        </div>
                    </div>

                    <!--Section 3-->
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>
                                    <div id="HideSelectRole"><img src="assets/images/create-profile/enter-role.svg" class="rounded mx-auto d-block">
                                        <p class="text-center"><br>Please select your Role
                                    </div>
                                </span>
                                <br>

                                <!--Student Details-->
                                <div id="GroupName1Div" style="display:none;">
                                    <h5>Student Details</h5>
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <label class="labels">Batch</label>
                                            <input type="text" class="form-control" placeholder="Batch" value="">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">Department</label>
                                            <input type="text" class="form-control" value="" placeholder="Department">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">Areas of Interest</label><br>
                                            <input type="text" id="#inputTag" value="" data-role="tagsinput" placeholder="Add Tags">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">A summary about yourself</label>
                                            <input type="text" class="form-control" placeholder="Write away!" value="">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">LinkedIn URL</label>
                                            <input type="url" class="form-control" placeholder="LinkedIn URL" value="">
                                        </div>
                                    </div>
                                    <!--Save Profile Button-->
                                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" style="background: rgb(255, 136, 0); border-color: rgb(255, 136, 0);">Save Profile</button>
                                    </div>
                                </div>

                                <div id="GroupName2Div" style="display:none;">
                                    <h5>Mentor Details</h5>
                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <label class="labels">Batch</label>
                                            <input type="text" class="form-control" placeholder="Batch" value="">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">Department</label>
                                            <input type="text" class="form-control" value="" placeholder="Department">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">Licenses & Certifications (if any)</label>
                                            <input type="text" class="form-control" value="" placeholder="Licenses & Certifications">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">Tags</label><br>
                                            <input type="text" id="#inputTag" value="" data-role="tagsinput" placeholder="(Your areas of expertise - ex. AWS, Cloud, IoT, ML etc. Please enter comma separated values.)">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">A summary about yourself</label>
                                            <input type="text" class="form-control" placeholder="Write away!" value="">
                                        </div>
                                        <div class="col-md-12">
                                            <label class="labels">LinkedIn URL</label>
                                            <input type="url" class="form-control" placeholder="LinkedIn URL" value="">
                                        </div>
                                    </div>
                                    <!--Save Profile Button-->
                                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" style="background: rgb(255, 136, 0); border-color: rgb(255, 136, 0);">Save Profile</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </main>
    <!-- Page Content Ends Here -->


    <!-- Footer Starts -->
    <?php include "components/footer.php" ?>
    <!-- Footer Ends -->



    <!-- JS Assets -->
    <?php include "components/js-assets.php" ?>
    <script src="js/create-profile.js"></script>

</body>

</html>