<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>

    <?php include "components/css-assets.php" ?>
</head>

<body>
    <!-- Page Loader Starts Here -->
    <div id="pageLoader" class=" container text-center d-flex align-items-center justify-content-center w-100" style="height: 100vh;">
        <div class="spinner-border text-dark" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    <!-- Page Loader Ends Here -->



    <!-- Page Content Starts Here -->
    <main id="pageContent">
        <?php include "components/header.php" ?>



    </main>
    <!-- Page Content Ends Here -->


    <!-- Footer Starts -->
    <?php include "components/footer.php" ?>
    <!-- Footer Ends -->



    <!-- JS Assets -->
    <?php include "components/js-assets.php" ?>

</body>

</html>