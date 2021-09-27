function pageScript() {
  var url = new URL(window.location.href);
  var reqUid = url.searchParams.get("uid");
  if (!reqUid) {
    reqUid = window.uid;
    document.getElementById("editProfileButton").classList.remove("d-none");
  }

  $.ajax({
    type: "GET",
    url: APIRoute + "users?uid=" + window.uid + "&profileUid=" + reqUid,
    datatype: "html",

    success: function (response) {
      if (response.profilePic == null)
        document.getElementById("profileAvatar").src =
          "assets/images/png/avatar.jpg";
      else document.getElementById("profileAvatar").src = response.profilePic;
      document.getElementById("fullname").innerHTML = response.fullName;
      window.currentProfileName = response.fullName;

      $(".designation").html(response.designation);

      document.getElementById("summary").innerHTML = response.summary;
      document.getElementById("email").innerHTML = response.email;
      window.currentProfileMail = response.email;

      document.getElementById("country").innerHTML = response.country; 
      if (isValidUrl(response.linkedInURL)) {
        document.getElementById("linkedInUrl").innerHTML = response.linkedInURL.trim(); 
        document.getElementById("linkedInAnchorTag").href =
        response.linkedInURL;
      }
      else document.getElementById("linkedInUrl").innerHTML = "None"

      if (isValidUrl(response.resumeLink)) {
          document.getElementById("portfolioLink").innerHTML = response.resumeLink.trim(); 
          document.getElementById("portfolioLinkAnchorTag").href = response.resumeLink;
        }
      else document.getElementById("portfolioLink").innerHTML = "None"

      document.getElementById("branch").innerHTML = response.department;
      document.getElementById("year").innerHTML = response.batch;
      document.getElementById("areasOfInterest").innerHTML =
        response.areasOfInterest;
      document.getElementById("languages").innerHTML = response.languages;

      if (response.isMentor == 1) {
        document.getElementById("mentorsInfo").classList.remove("d-none");
        var elem = document.createElement("p");
        elem.innerHTML = "None";

        if (response.higherEd == null)
          document.getElementById("higherEd").appendChild(elem.cloneNode(true));
        else {
          response.higherEd.split(",").forEach((ed) => {
            var ele = document.createElement("p");
            ele.innerHTML = ed.trim() == "" ? "None" : ed;
            document.getElementById("higherEd").appendChild(ele);
          });
        }
        if (response.licensesAndCerts == null)
          document.getElementById("certs").appendChild(elem.cloneNode(true));
        else {
          response.licensesAndCerts.split(",").forEach((ed) => {
            var ele = document.createElement("p");
            ele.innerHTML = ed.trim() == "" ? "None" : ed;
            document.getElementById("certs").appendChild(ele);
          });
        }
      }
      if (localStorage.type == "Student" && response.isMentor == 1) {
        if (response.allocation.isAllocated == true) {
          document
            .getElementById("askMentorshipBtn")
            .classList.remove("d-none");
          document.getElementById("askMentorshipBtn").disabled = "disabled";

          if (response.allocation.status == "pendingRequest") {
            document.getElementById("askMentorshipBtn").innerHTML =
              "Pending Request";
          } else if (response.allocation.status == "mentorAgreed") {
            document.getElementById("askMentorshipBtn").innerHTML =
              "Yet to be validated by an Admin";
              document.getElementById("askMentorshipBtn").disabled = "disabled"
          }
        } else {
          document
            .getElementById("askMentorshipBtn")
            .classList.remove("d-none");
          document
            .getElementById("connectBtn")
            .setAttribute("data-uid", response.uid);
        }
      } else if (localStorage.type == "Mentor" && response.isMentor == 0) {
        if (response.allocation.isAllocated == true) {
          if (response.allocation.status == "pendingRequest") {
            document
              .getElementById("acceptMentorshipRequest")
              .classList.remove("d-none");
            document
              .getElementById("acceptMentorshipRequest")
              .setAttribute(
                "onclick",
                "acceptMentorshipRequest('"+response.allocation.allocationId+"')"
              );
          } else if (response.allocation.status == "mentorAgreed") {
            document
              .getElementById("acceptMentorshipRequest")
              .classList.remove("d-none");
            document.getElementById("acceptMentorshipRequest").innerHTML =
              "Yet to be validated by an Admin";
            document
              .getElementById("acceptMentorshipRequest")
              .setAttribute("disabled", "disabled");
          } 
        }
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
    error: function (error) {},
  });
  window.Modal = new bootstrap.Modal(
    document.getElementById("askForMentorshipModal")
  );
}

function acceptMentorshipRequest(allocationId) {
  $.ajax({
    type: "POST",
    url: APIRoute + "mentors/agree",
    datatype: "html",
    data: {
      allocationId: allocationId,
    },
    success: function (response) {
      console.log(response);
      document.getElementById("acceptMentorshipRequest").innerHTML =
        "Successfully Agreed to the Mentorship Request ✔️";
      window.location.reload();
    },
  });
}

function setDefaultAvatar() {
  console.log("Error loading profile pic.");
  var profileAvatar = document.getElementById("profileAvatar");
  profileAvatar.src = "assets/images/png/avatar.jpg";
}

function askForMentorship() {
  document.getElementById("message-error").classList.add("d-none");
  document.getElementById("menteeSummary").classList.remove("is-invalid");
  const menteeSummary = document.getElementById("menteeSummary").value;
  if (menteeSummary == "") {
    document.getElementById("message-error").classList.remove("d-none");
    document.getElementById("menteeSummary").classList.add("is-invalid");
  } else {
    document.getElementById("mentorshipLoader").classList.remove("d-none");
    document.getElementById("connectBtn").setAttribute("disabled", "disabled");
    var mentorUid = document
      .getElementById("connectBtn")
      .getAttribute("data-uid");
    $.ajax({
      type: "POST",
      url: APIRoute + "allocations",
      datatype: "html",
      data: {
        uid: window.uid,
        menteeUid: window.uid,
        mentorUid: mentorUid,
        mentorMail: window.currentProfileMail,
        menteeName: localStorage.displayName,
        mentorName: window.currentProfileName,
        menteeSummary: menteeSummary,
      },
      success: function (response) {
        console.log(response);
        if (response == "success") {
          closeModal();
          document.getElementById("askMentorshipBtn").disabled = "disabled";
          document.getElementById("askMentorshipBtn").innerHTML =
            "Request Sent!";
        } else {
          document.getElementById("mentorshipLoader").classList.add("d-none");
          e.target.removeAttribute("disabled");
        }
      },
    });
  }
}

function showModal() {
  window.Modal.show();
}

function closeModal() {
  window.Modal.hide();
}

function isValidUrl(_string){
  const matchPattern = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
  return matchPattern.test(_string);
}