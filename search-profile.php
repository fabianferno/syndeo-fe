<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Search</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>
    <?php include "components/css-assets.php" ?>
    <link rel="stylesheet" href="assets/css/search-profile.css">

</head>

<body>
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
            <!--Search Bar-->


            <div class="row">
                <div class="col-lg-12 card-margin">
                    <div class="card search-form">
                        <div class="card-body p-0">
                            <form id="search-form">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row no-gutters">
                                            <div class="col-lg-8 col-md-6 col-sm-12 p-0">
                                                <input type="text" placeholder="Search for Mentors." class="form-control" id="search" name="search">
                                            </div>
                                            <div class=" col-md-4 ">
                                                <button type="submit" class="btn btn-base">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!--Search Results-->



            <!--<div id="no-result"> 
            <div class="col-12">    
                <div class="card card-margin">
                    <div class="card-body">
                        <div class="col-lg-12">
                            <div class="search-result">
                                <div class="result-body">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     -->

            <!--<div class="row">-->
            <div class="col-12">
                <div class="card card-margin">
                    <div class="card-body">
                        <div class="row search-body">
                            <div class="col-lg-12">
                                <div class="search-result">
                                    <div class="result-header">
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="result-actions">
                                                    <div class="result-sorting">
                                                        <span>Sort By:</span>
                                                        <select class="form-control border-0" id="exampleOption">
                                                            <option value="1">Relevance</option>
                                                            <option value="2">Names (A-Z)</option>
                                                            <option value="3">Names (Z-A)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-body">
                                        <div class="table-responsive">
                                            <table class="table widget-26">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Senior Software Engineer / Developer</a>
                                                                <p class="m-0"><a href="#" class="employer-name">Axiom Corp.</a> <span class="text-muted time">1 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Full-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">London, UK</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-base">
                                                                <i class="indicator bg-base"></i>
                                                                <span>Software Development</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Marketing &amp; Communication Supervisor</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Llc.</a> <span class="text-muted time">2 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">New York, US</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-warning">
                                                                <i class="indicator bg-warning"></i>
                                                                <span>Marketing</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Senior Data Analyst / Scientist</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Inc.</a> <span class="text-muted time">4 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">New York, US</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-success">
                                                                <i class="indicator bg-success"></i>
                                                                <span>Artificial Intelligence</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">UX Designer &amp; UI Developer</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Inc.</a> <span class="text-muted time">5 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">Toronto, CAN</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-danger">
                                                                <i class="indicator bg-danger"></i>
                                                                <span>Design</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Information Security Analyst / Expert</a>
                                                                <p class="m-0"><a href="#" class="employer-name">Axiom Corp.</a> <span class="text-muted time">6 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">Mumbai, IN</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-info">
                                                                <i class="indicator bg-info"></i>
                                                                <span>Infra Supervision</span>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Senior Software Engineer / Developer</a>
                                                                <p class="m-0"><a href="#" class="employer-name">Axiom Corp.</a> <span class="text-muted time">1 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Full-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">London, UK</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-base">
                                                                <i class="indicator bg-base"></i>
                                                                <span>Software Development</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Marketing &amp; Communication Supervisor</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Llc.</a> <span class="text-muted time">2 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">New York, US</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-warning">
                                                                <i class="indicator bg-warning"></i>
                                                                <span>Marketing</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Senior Data Analyst / Scientist</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Inc.</a> <span class="text-muted time">4 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">New York, US</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-success">
                                                                <i class="indicator bg-success"></i>
                                                                <span>Artificial Intelligence</span>
                                                            </div>
                                                        </td>
                                                        <td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">UX Designer &amp; UI Developer</a>
                                                                <p class="m-0"><a href="#" class="employer-name">AxiomUI Inc.</a> <span class="text-muted time">5 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">Toronto, CAN</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-danger">
                                                                <i class="indicator bg-danger"></i>
                                                                <span>Design</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="widget-26-job-emp-img">
                                                                <img src="assets/images/search-profile/placeholderr.png" alt="Company" />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-title">
                                                                <a href="#">Information Security Analyst / Expert</a>
                                                                <p class="m-0"><a href="#" class="employer-name">Axiom Corp.</a> <span class="text-muted time">6 days ago</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-info">
                                                                <p class="type m-0">Part-Time</p>
                                                                <p class="text-muted m-0">in <span class="location">Mumbai, IN</span></p>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div class="widget-26-job-category bg-soft-info">
                                                                <i class="indicator bg-info"></i>
                                                                <span>Infra Supervision</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class="d-flex justify-content-center">
                            <ul class="pagination pagination-base pagination-boxed pagination-square mb-0">
                                <li class="page-item">
                                    <a class="page-link no-border" href="#">
                                        <span aria-hidden="true">«</span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link no-border" href="#">1</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">2</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">3</a></li>
                                <li class="page-item"><a class="page-link no-border" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link no-border" href="#">
                                        <span aria-hidden="true">»</span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>

    <!-- Footer Starts -->
    <?php include "components/footer.php" ?>
    <!-- Footer Ends -->


    <!-- JS Assets -->

    <?php include "components/js-assets.php" ?>


    <script type="text/javascript">

    </script>
</body>

</html>