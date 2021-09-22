function pageScript() {
  var url = new URL(window.location.href);
  var reqUid = url.searchParams.get("uid");
  if (!reqUid) {
    reqUid = window.uid;
    document.getElementById("editProfileButton").classList.remove("d-none");
  }

  $.ajax({
    type: "GET",
    url: APIRoute + "users?uid=" + reqUid,
    datatype: "html",

    success: function (response) {
      if (response.profilePic == null)
        document.getElementById("profileAvatar").src =
          "assets/images/png/avatar.jpg";
      else document.getElementById("profileAvatar").src = response.profilePic;
      document.getElementById("fullname").innerHTML = response.fullName;
      $(".designation").html(response.designation);

      document.getElementById("summary").innerHTML = response.summary;
      document.getElementById("email").innerHTML = response.email;
      document.getElementById("country").innerHTML = response.country;
      document.getElementById("linkedInUrl").innerHTML = response.linkedInURL;
      document.getElementById("portfolioLink").innerHTML = response.resumeLink;
      document.getElementById("branch").innerHTML = response.department;
      document.getElementById("year").innerHTML = response.batch;
      document.getElementById("areasOfInterest").innerHTML =
        response.areasOfInterest;
      document.getElementById("languages").innerHTML = response.languages;

      if (localStorage.type == "Student" && response.isMentor == 1) {
        document.getElementById("askMentorshipBtn").classList.remove("d-none");
        document
          .getElementById("askMentorshipBtn")
          .setAttribute("data-uid", response.uid);
      }

      if (response.isMentor == 1) {
        document.getElementById("mentorsInfo").classList.remove("d-none");
        var elem = document.createElement("p");
        elem.innerHTML = "None";

        if (response.higherEd == null)
          document.getElementById("higherEd").appendChild(elem.cloneNode(true));
        else {
          response.higherEd.split(",").forEach((ed) => {
            var ele = document.createElement("p");
            ele.innerHTML = ed;
            document.getElementById("higherEd").appendChild(ele);
          });
        }
        if (response.licensesAndCerts == null)
          document.getElementById("certs").appendChild(elem.cloneNode(true));
        else {
          response.licensesAndCerts.split(",").forEach((ed) => {
            var ele = document.createElement("p");
            ele.innerHTML = ed;
            document.getElementById("certs").appendChild(ele);
          });
        }
      }

      if (localStorage.type == "Mentor" && response.isMentor == 0) {
        var allocationId = url.searchParams.get("allocationId");
        document
          .getElementById("acceptMentorshipRequest")
          .classList.remove("d-none");
        document
          .getElementById("askMentorshipBtn")
          .getAttribute("data-allocationId", allocationId);
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
    error: function (error) {},
  });
}

function acceptMentorshipRequest() {
  var allocationId = document
    .getElementById("askMentorshipBtn")
    .getAttribute("data-allocationId");
  $.ajax({
    type: "PUT",
    url: APIRoute + "mentor/agree",
    datatype: "html",
    data: {
      allocationId: allocationId,
    },
    success: function (response) {},
  });
}

function setDefaultAvatar() {
  console.log("Error loading profile pic.");
  var profileAvatar = document.getElementById("profileAvatar");
  profileAvatar.src = "assets/images/png/avatar.jpg";
}

function askForMentorship() {
  var mentorUid = document
    .getElementById("askMentorshipBtn")
    .getAttribute("data-uid");
  $.ajax({
    type: "POST",
    url: APIRoute + "allocations",
    datatype: "html",
    data: {
      menteeUid: window.uid,
      mentorUid: mentorUid,
    },
    success: function (response) {
      console.log(response);
    },
  });
}
