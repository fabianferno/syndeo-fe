<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "components/css-assets.php" ?>
    <title>Admin | Mentorship Allocations</title>
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
                                        <h3 class="mb-0 text-white">Hey, <span class="fw-bold " id="name-holder"></span>. View all Allocations here.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="adminActions" class="row mt-6 ">
                        <H1 class="fw-bold text-white mb-3">Admin Actions | View Allocations</H1>
                        <div class="d-flex flex-column" id="allocations"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <?php include "components/js-assets.php" ?>
    <script src="js/auth-status.js"></script>
    <script src="js/view-allocations.js"></script>


</body>

</html>