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
    <div id="db-wrapper">

      <?php include "components/navbar-vertical.php" ?>

      <!-- Page content -->
      <div id="page-content">

        <?php include "components/header.php" ?>

        <!-- Container fluid -->
        <div class="bg-info pt-10 pb-21"></div>
        <div class="container-fluid mt-n20 px-6">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-12">
              <!-- Page header -->
              <h3 class="text-light mb-6">Search Mentors</h3>
              <form id="search">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="input-group mb-3">
                    <input type="text" id="searchQuery" class="form-control form-control-lg" placeholder="Search for mentors - Use name, designation, certifications, company etc" aria-label="Search for menttors.." aria-describedby="basic-addon1">
                    <a class="input-group-text" style="background-color: #FF9300;" id="searchButton"><span class="fas fa-search text-dark"></span></a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- row  -->
          <div class="row mt-6">
            <div class="col-md-12 col-12">
              <!-- card  -->
              <div class="card shadow-lg">
                <!-- card header  -->
                <div class="card-header bg-white border-bottom-0 py-4 d-none" id="results-header">
                  <h4 class="mb-0 result">Showing <span id="total"></span> result(s)</h4>
                </div>

                <div class="card-body text-center">
                  <div class="row d-flex justify-content-center">

                    <div class="d-flex justify-content-center d-none" id="loader">
                      <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>

                    <div class="d-flex justify-content-center" id="svg">
                      <img src="assets/images/create-profile/enter-role.svg" class="rounded mx-auto d-block">
                    </div>

                    <div id="no-result" class="d-none">
                      <p>No results found.</p>
                    </div>

                    <div class="spinner-border text-dark d-none" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>

                    <div id="message-error" class="text-danger d-flex justify-content-center d-none">
                      <p>There was an error while Searching profiles. Please try again later.</p>
                    </div>

                    <div class="card border-grey mx-3 d-none" id="table">
                      <div class="table-responsive">
                        <table class="table text-nowrap">
                          <tbody id="resultsHolder">


                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- card footer  -->
                <!-- <div class="card-footer bg-white border-white text-center result">
                    <ul class="pagination justify-content-center">
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item active"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </div> -->
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- Scripts -->
  <?php include "components/js-assets.php" ?>
  <script src="js/auth-status.js"></script>
  <script src="js/search.js"></script>


</body>

</html>