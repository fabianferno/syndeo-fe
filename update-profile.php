<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<?php include "components/css-assets.php" ?>
<title>Update Profile</title>
</head> 

<body>
<main id="pageContent">
        <?php include "components/header.php" ?>
        <div class="container">
            <div class="row">
              <div>
                <!--Nav bar -->
                <nav class="navbar navbar-expand-sm" style="background-color: rgb(1, 1, 83); color: white;">
                <nav class="navbar navbar-expand-sm" style="background-color: rgb(1, 1, 83); color: white;">
                <!--Navigation Bar with just the Logo that redirects to LICET Website-->
                <a class="navbar-brand" href="https://licet.ac.in/" target="_blank" rel="noopener noreferrer">
                <div class=" mb-6">
                  <h4 class="mb-1">

                
                    <img alt="Brand" src="assets/images/create-profile/licet-logo.png" width="34">
                </a>
                <b style="font-size:20px;" class="text-light">Syndeo</b>
            </nav>
            <br>
                  <div class="card-body">
                  
                  
                    </div>
                    <!-- Upload/Change or remove Profile Picture -->
                    <div class="row align-items-center mb-8">
                      <div class="col-md-3 mb-3 mb-md-0">
                        <h5 class="mb-0"></h5>
                        </h6>Your Picture</h6>
                        <div class="col-md-4">
                          <div class="mx-auto" style="width: 240px;">
                      <input type="file" class="form-control" id="customFile" />
                          </div>
                      </div>
                      </div>
                      <div class="col-md-9">
                        <div class="d-flex align-items-center">
                       
                          <div class="offset-md-4 col-md-8 mt-4">
                          
                          <button class="btn btn-primary profile-button" type="button" style="background: rgb(255, 136, 0); border-color: rgb(255, 136, 0);">Change</button>
                          
                          <button type="button" class="btn btn-light">Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                   
                      <div class="card-body">
                        <div class=" mb-6">
                      <!--Toggle button -->
                    <div class="form-check form-switch ">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                       <label class="form-check-label" for="flexSwitchCheckDefault \">
                        <h5><p class="text-light"> Student/Mentor</p></h5></label> 
                        </div></div>
                        <div class="container">      
                    </div>
                  </nav>
                </div>

               <!--Headings -->
              <div class="col-md-6 fw-bold">
                <p class="text-center"><h4>Personal Details </h4> </p>
              </div>
              <div class="col-md-6 fw-bold">
                <p class="text-center "><h4>Academic Details</h4></p>
              </div>
              <!--Text Fields -->
              <div class="col-md-6">
                Name
                <input type="text" class="form-control" placeholder="Your answer">
              </div >
              <div class="col-md-6">
                Batch
                <input type="text" class="form-control" placeholder="Your answer">
              </div>
              <div class="col-md-6">
                D.O.B
                <br>
                <input type="date" data-date-format="mm/dd/yyyy">
              </div>
              <div class="col-md-6">
                Department
                <input type="text" class="form-control" placeholder="Your answer">
              </div>
                  <div class="col-md-6">
                    Email id
                    <input type="email" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Higher Education
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Country
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Licences
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Mobile Number
                    <input type="tel" class="form-control" placeholder="Your Number">
                  </div>
                  <div class="col-md-6">
                    Linkedin Profile
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Designation
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Tags
                    </br>
                    <input type="text"  data-role="tagsinput" placeholder="Tags" />
                    <input type="text"  data-role="tagsinput" placeholder="Tags" />
                  </div>
                  <div class="col-md-6">
                    Pin Code
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <div class="col-md-6">
                    Summary about yourself
                    <input type="text" class="form-control" placeholder="Your answer">
                  </div>
                  <!--Check Box -->
                  <div class="col-md-6 form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree to be part of the mentorship program
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree to receive information in the future
                    </label>
                  </div>
                  
                  <div class="col-md-6 text-right">
                    <div class="form-group">
                  <button type="button" class="btn btn-danger">Save Changes</button>
                </div>
            </div>
          </div>
            <!-- Footer Starts -->
    <?php include "components/footer.php" ?>
    <!-- Footer Ends -->

      <!-- JS Assets -->
      <?php include "components/js-assets.php" ?>

</main>
</body>
</html>