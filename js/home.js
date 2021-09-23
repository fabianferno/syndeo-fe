function pageScript() {
  document.getElementById("name-holder").innerHTML = localStorage.displayName;
  document.getElementById("pageLoader").classList.add("d-none");
  document.getElementById("pageContent").classList.remove("d-none");

  if (localStorage.type == "Mentor") {
    document.getElementById("mentorActions").classList.remove("d-none");
  }

  $.ajax({
    type: "GET",
    url: APIRoute + "allocations?uid=" + window.uid,
    datatype: "html",
    success: function (response) {
      var menteeCards = "";
      response.forEach((student) => {
        console.log(student);
        var htmlContent =
          '<div class="col-md-6 col-12"><div class="card card-body my-2"><h4 class="mb-2 w-50">' +
          student.name +
          "</h4><p>" +
          student.summary +
          '</p><div class="card-footer bg-white border-white text-end"><a href="edit-profile.php" class="btn btn-primary">View Profile</a></div></div></div>';

        menteeCards = menteeCards + htmlContent;
      });

      document.getElementById("mentorActions").innerHTML = menteeCards;
    },
  });
}
