 <!-- Sidebar -->
 <nav class="navbar-vertical navbar">
     <div class="nav-scroller">
         <!-- logo -->
         <a class="navbar-brand m-2">
             <div class="d-flex">
                 <img src="assets/images/png/logo.png" alt="" class="" />
                 <div class="row align-items-center h3 text-white mx-3">Syndeo</div>
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
            <li class="nav-item">
                <a class="nav-link d-none" id="search-mentors-link" href="search.php">
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