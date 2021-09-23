<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "components/css-assets.php" ?>
    <title>Admin - Mentorship Allocations</title>
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
                <div class="container-fluid mt-n22 px-6">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-12">
                            <!-- Page header -->
                            <div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="mb-2 mb-lg-0">
                                        <h3 class="mb-0 fw-bold text-white">Hey, <span id="name-holder"></span>. Let's see what Syndeo has to offer.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="mentorActions" class="row mt-6 ">
                        <H1 class="fw-bold text-white">Admin Actions 🛠️</H1>

                        <div class="col-md-6 col-12">
                            <!-- mentee card  -->
                            <div class="card card-body my-2">
                                <h4 class="mb-2 w-50">
                                    Fabian Ferno</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum magni aperiam animi laborum, aliquam fugiat quos corrupti nobis ratione, dolores perferendis, culpa id illo nam. Id doloribus unde nobis!</p>
                                <!-- card footer  -->
                                <div class="card-footer bg-white border-white text-end">
                                    <a href="edit-profile.php" class="btn btn-primary">View Profile</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <!-- mentee card  -->
                            <div class="card card-body my-2">
                                <h4 class="mb-2 w-50">
                                    Fabian Ferno</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum magni aperiam animi laborum, aliquam fugiat quos corrupti nobis ratione, dolores perferendis, culpa id illo nam. Id doloribus unde nobis!</p>
                                <!-- card footer  -->
                                <div class="card-footer bg-white border-white text-end">
                                    <a href="edit-profile.php" class="btn btn-primary">View Profile</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <!-- mentee card  -->
                            <div class="card card-body my-2">
                                <h4 class="mb-2 w-50">
                                    Fabian Ferno</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio illum magni aperiam animi laborum, aliquam fugiat quos corrupti nobis ratione, dolores perferendis, culpa id illo nam. Id doloribus unde nobis!</p>
                                <!-- card footer  -->
                                <div class="card-footer bg-white border-white text-end">
                                    <a href="edit-profile.php" class="btn btn-primary">View Profile</a>
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
    <script src="js/auth-status.js"></script>
    <script src="js/allocations.js"></script>


</body>

</html>