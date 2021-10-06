function pageScript() {
  document.getElementById("name-holder").innerHTML = localStorage.displayName;

  if (localStorage.type == "Mentor") {
    document.getElementById("mentorActions").classList.remove("d-none");
  }
  else if (localStorage.type == "Student") {
    document.getElementById("search-mentors-card").classList.remove("d-none");
  }
  $.ajax({
    type: "GET",
    url: APIRoute + "allocations?uid=" + window.uid,
    datatype: "html",
    success: function (allocations) {
      if (allocations.length > 0) {
        allocations.forEach((allocation) => {
          // console.log(allocation);

          $.ajax({
            type: "GET",
            url:
              APIRoute +
              "users?uid=" +
              window.uid +
              "&profileUid=" +
              allocation.menteeUid,
            datatype: "html",

            success: function (mentee) {
              console.log(mentee);
              var htmlContent =
                '<div class="col-md-6 col-12"><div class="card card-body my-2"><h4 class="mb-2 w-50 fw-bold">' +
                mentee.fullName +
                "</h4><p>" +
                mentee.department +
                " | " +
                mentee.batch +
                "</p><p>" +
                mentee.summary +
                '</p><div class="card-footer bg-white border-white text-end"><a href="profile.php?uid=' +
                mentee.uid +
                '" class="btn btn-primary">View Profile</a></div></div></div>';

              document.getElementById("mentorActions").innerHTML += htmlContent;
            },
            error: function (error) {
              console.log(error);
            },
          });
        });
      } else {
        document
          .getElementById("no-allocations-message")
          .classList.remove("d-none");
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
  });
}