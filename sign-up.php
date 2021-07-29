<!DOCTYPE html>
<html lang="en">

  <head>
    <?php include "components/css-assets.php" ?>
    <title>Sign Up | Syndeo</title>
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
        <div class="container min-vh-100 d-flex justify-content-center align-items-center">
            <div class="row">
                <div class="col-12">
                    <div class="card vw-80 my-15">
                        <div class="card-body m-2">
                            <div class="mb-4 d-flex flex-row align-items-center">
                                <img src="assets/images/png/logo.png" style="width:40px; height:40px;" class="rounded-circle me-2" alt="image">
                                <h2 class="fw-bold my-auto">Syndeo</h2>
                            </div>
                            <h4 class="fw-bold text-start mb-3">Create Profile</h4>
                            <form id="signUpForm">
                                <div class="row mb-3">
                                    <div class="col-12 col-md-4 mt-4">
                                        <!-- avatar -->
                                        <div class="d-flex flex-column align-items-center justify-content-center">
                                            <div class="pic-holder">
                                                <!-- Uploaded pic shown here -->
                                                <img id="profilePic" class="pic" src="assets/images/png/avatar.jpg">

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
                                        <!-- end of avatar -->
                                    </div>
                                    <div class="col-12 col-md-8">
                                        <div class="mb-3">
                                            <label for="fullName" class="form-label">Full Name</label>
                                            <input type="text" id="fullName" class="form-control" name="fullName" placeholder="Eg. Amelia Rose" required="">
                                        </div>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" id="email" class="form-control" name="email" placeholder="example@mail.com" required="">
                                            <small class="text-danger d-none" style="font-size: 10px;" id="invalidEmail"> Invalid Domain. Try using an email id ends with 'licet.ac.in' </small>
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex justify-content-around">
                                                <label for="gender" class="form-label">Gender</label>
                                                <label class="form-check-label" for="genderMale">
                                                    <input type="radio" class="form-check-input" id="genderMale" name="genderRadio">
                                                    Male
                                                </label>
                                                <label class="form-check-label" for="genderFemale"> 
                                                    <input type="radio" class="form-check-input" id="genderFemale" name="genderRadio" checked>
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-4 mb-3">
                                        <label for="batch" class="form-label">Batch</label>
                                        <select name="batch" class="form-select" id="batch"></select>
                                    </div>
                                    <div class="col-12 col-md-8 mb-3">
                                        <label for="department" class="form-label">Department</label>
                                        <select name="department" class="form-select" id="department">
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <option value="Information Technology">Information Technology</option>
                                            <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="dob" class="form-label">Date of Birth</label>
                                        <input type="date" id="dob" class="form-control" name="dob" placeholder="YYYY-MM-DD" required="">
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="phone" class="form-label">Mobile</label>
                                        <input type="tel" id="phone" class="form-control" name="phone" placeholder="Phone number" required="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <div class="row">
                                            <label for="role" class="form-label">Choose the role which suits you best.</label>
                                        </div>
                                        <div class="d-flex justify-content-around">
                                            <label class="form-check-label" for="roleMentor">
                                                <input type="radio" class="form-check-input" id="roleMentor" value="mentor" name="roleRadio">
                                                Mentor
                                            </label>
                                            <label class="form-check-label" for="roleStudent"> 
                                                <input type="radio" class="form-check-input" id="roleStudent" value="student" name="roleRadio" checked>
                                                Student
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="designation" class="form-label">Designation</label>
                                        <input type="text" id="designation" class="form-control" name="designation" placeholder="Eg. Senior Analyst" required="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="country" class="form-label">Country</label>
                                        <input type="text" id="country" class="form-control" name="country" placeholder="Country" required="">
                                    </div>
                                    <div class="col-12 col-md-6 mb-3 tagsinput">
                                        <label for="language" class="form-label">Languages Known</label>
                                        <small class="mb-2" style="font-size: 10px;">(Enter comma-separated values)</small>
                                        <input type="text" id="language" class="form-control" name="language" data-role="tagsinput" required="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3 tagsinput"> 
                                        <label for="areasOfInterest" class="form-label mb-0">Write down your areas of interest</label>
                                        <small class="mb-2" style="font-size: 10px;">(Enter comma-separated values)</small>
                                        <input type="text" id="areasOfInterest" class="form-control" data-role="tagsinput" name="areasOfInterest" required="">
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="prefContact" class="form-label">Your Contact Preference (Optional)</label>
                                        <input type="text" id="prefContact" class="form-control" name="prefContact" placeholder="Eg. Mail, WhatsApp...">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="linkedIn" class="form-label">LinkedIn URL</label>
                                        <input type="text" id="linkedIn" class="form-control" name="linkedIn" placeholder="LinkedIn URL">
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="resumeLink" class="form-label">Portfolio or Resume Link</label>
                                        <input type="text" id="resumeLink" class="form-control" name="resumeLink" placeholder="Portfolio or Resume Link">
                                    </div>
                                </div>
                                <div class="row mb-3 mx-0">
                                    <label for="summary" class="form-label">Tell us a summary about yourself.</label>
                                    <textarea type="text" id="summary" class="form-control" name="summary" rows="5" placeholder="Do not exceed 60 words" required=""> </textarea>
                                </div>

                                <div id="mentorFields" class="d-none">
                                    <hr>
                                    <div class="row">
                                        <div class="col-12 col-md-6 mb-3">
                                            <label for="higherStudies" class="form-label d-flex justify-content-between">Higher Studies (if any) 
                                                <a class="btn btn-primary btn-sm" onclick="addFields('higherStudiesGroup')"><span class="fas fa-plus text-white"></span> Add</a>
                                            </label>
                                            <div class="input-group mb-2 d-none" id="higherStudiesGroup">
                                                <input type="text" class="form-control" name="" placeholder="Higher Studies">
                                                <span class="d-flex justify-content-center align-items-center bg-primary minusButton" style="width: 2em;"> <span class="fas fa-minus text-white"></span> </span>
                                            </div>
                                            <span id="higherStudiesGroupFields"></span>
                                        </div>
                                        <div class="col-12 col-md-6 mb-3">
                                            <label for="licenseAndCerts" class="form-label d-flex justify-content-between">Licenses and Certifications
                                                <a class="btn btn-primary btn-sm" onclick="addFields('licenseAndCertsGroup')"><span class="fas fa-plus text-white"></span> Add</a>
                                            </label>
                                            <div class="input-group mb-2 d-none" id="licenseAndCertsGroup">
                                                <input type="text" class="form-control" name="licenseAndCerts" placeholder="Licenses and Certifications">
                                                <span class="d-flex justify-content-center align-items-center bg-primary minusButton" style="width: 2em;"> <span class="fas fa-minus text-white"></span> </span>
                                            </div>
                                            <span id="licenseAndCertsGroupFields"></span>
                                        </div>
                                    </div>
                                    <div class="row mb-3 mx-0" id="tagsRow">
                                        <label for="tags" class="form-label mb-0">Tags</label>
                                        <small class="mb-2" style="font-size: 10px;">(Enter comma-separated values)</small>
                                        <input type="text" id="tags" class="form-control" data-role="tagsinput" name="tags" placeholder="" > 
                                    </div>
                                    <div class="row mb-3">
                                        <label class="form-check-label" for="agreeForMentorship">
                                            <input type="checkbox" class="form-check-input mx-3" id="agreeForMentorship" >
                                            I agree to take part in the Mentorship Program
                                        </label>
                                    </div>
                                </div>

                                <hr>
                                <h4 class="fw-bold text-start mb-3">Set Password for your Account</h4>
                                <div class="row">
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <input type="password" id="password" class="form-control" name="password" placeholder="**************" required="">
                                    </div>
                                    <div class="col-12 col-md-6 mb-3">
                                        <label for="reTypePassword" class="form-label">Re-Type Password</label>
                                        <input type="password" id="reTypePassword" class="form-control" name="reTypePassword" placeholder="**************" required="">
                                        <small class="text-danger d-none" style="font-size: 10px;" id="incorrectPassword"> Incorrect Password </small>
                                    </div>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <small class="text-danger" id="message-err"></small>
                                    <small class="text-danger d-none" id="message-error">There was a problem creating your profile. Please try again later.</small>
                                    <small class="text-danger d-none" id="message-empty">One or more required fields is empty.</small>
                                    <small class="text-danger d-none" id="message-exists">An Account with this email already exists. Try <a href="login.php">Signing in</a></small>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <button type="button" id="signUpButton" class="btn btn-dark-secondary">
                                        <span id="signUpButtonText">Sign Up!</span> 
                                        <span id="signUpButtonTextSuccess" class="d-none">Done!</span> 
                                        <div class="spinner-border spinner-border-sm text-white d-none" id="signUpButtonLoader">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
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
    <script src="js/sign-up.js"></script>


  </body>

</html>