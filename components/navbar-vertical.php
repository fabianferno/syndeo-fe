<!-- Sidebar -->
<nav class="navbar-vertical navbar">
    <div class="nav-scroller">
        <!-- logo -->
        <a class="navbar-brand m-2">
            <div class="mb-5 d-flex flex-row justify-content-start align-items-center">
                <!-- <img src="assets/images/png/logo.png" style="width:40px; height:40px;" class="rounded-circle me-2" alt="image"> -->
                <img src="assets/images/png/syndeo-full.png"  style="height:70px" alt="image">

            </div>
        </a>

        <!-- Navbar nav -->
        <ul class="navbar-nav flex-column" id="sideNavbar">
            <li class="nav-item">
                <a class="nav-link has-arrow" href="home.php">
                    <i class="fas fa-home mx-2"></i> Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="profile.php">
                    <i class="fas fa-user mx-2"></i> Profile
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="edit-profile.php">
                    <i class="fas fa-edit mx-2"></i> Edit Profile
                </a>
            </li>
            <li class="d-none nav-item" id="admin-actions-link">
                <a class="nav-link" data-bs-toggle="collapse" data-bs-target="#admin-actions" role="button" aria-expanded="false" aria-controls="admin-actions">
                    <i class="fas fa-cogs mx-2"></i> Admin Actions <i class="fas fa-angle-down mx-auto"></i>
                </a>
                <div id="admin-actions" class="collapse show">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link" href="view-allocations.php" aria-expanded="true">
                                <i class="fas fa-eye mx-2"></i> View Allocations
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="allocations.php" aria-expanded="true">
                                <i class="fas fa-check mx-2"></i> Validate Requests
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="d-none nav-item" id="search-mentors-link">
                <a class="nav-link" href="search.php">
                    <i class="fas fa-search mx-2"></i>Search Mentors
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="settings.php">
                    <i class="fas fa-wrench mx-2"></i> Account Settings
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="logout()">
                    <i class="fas fa-sign-out-alt mx-2"></i> Logout
                </a>
            </li>
        </ul>
    </div>
</nav>