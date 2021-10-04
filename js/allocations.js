function pageScript() {
  document.getElementById("name-holder").innerHTML = localStorage.displayName;
  document.getElementById("no-allocations-message").classList.add("d-none");
  $.ajax({
    type: "GET",
    url: APIRoute + "allocations/all?uid=" + window.uid + "&all=false&isAgreed=1&isValidated=0",
    datatype: "html",
    success: function (response) {
      console.log(response); 
      if (response.status == "admin") {
        const allocations = response.data;
        if(allocations.length == 0) {
          document.getElementById("no-allocations-message").classList.remove("d-none")
        } else {
          for (var i = 0; i < allocations.length; i++) {
            document.getElementById('allocations').appendChild(getCard(allocations[i]));
          }
        }
      } else {
        //window.location.href = "home.php";
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
  });
}

function getCard(allocation) {
  var parent = document.createElement('div');
  parent.classList.add("col-12")

  var card = document.createElement('div')
  card.classList.add("card", "card-body", "my-2")

  var title = document.createElement('h4');
  title.classList.add("mb-2", "w-50")
  title.innerHTML = allocation.mentorName + " ▶️ " + allocation.menteeName

  var footer = document.createElement('div')
  footer.classList.add("card-footer", "bg-white", "border-white", "text-end")

  var validateBtn = document.createElement('button')
  validateBtn.classList.add("btn", "btn-primary", "m-1")
  validateBtn.innerHTML = "Validate"
  validateBtn.id = allocation.allocationId
  validateBtn.setAttribute("onclick", "validateAllocation('" + allocation.allocationId + "')")
  if (allocation.isValidated == 1) validateBtn.disabled = "disabled"

  var viewMentorBtn = document.createElement('a')
  viewMentorBtn.innerHTML = "View Mentor"
  viewMentorBtn.classList.add("btn", "btn-secondary", "m-1")
  viewMentorBtn.href = "profile.php?uid=" + allocation.mentorUid
  viewMentorBtn.target = "_blank"

  var viewStudentBtn = document.createElement('a')
  viewStudentBtn.innerHTML = "View Student"
  viewStudentBtn.classList.add("btn", "btn-secondary", "m-1")
  viewStudentBtn.href = "profile.php?uid=" + allocation.menteeUid
  viewStudentBtn.target = "_blank"

  footer.appendChild(validateBtn)
  footer.appendChild(viewMentorBtn)
  footer.appendChild(viewStudentBtn)
  card.appendChild(title)
  card.appendChild(footer)
  parent.appendChild(card)
  return parent;
}

function validateAllocation(allocationId) {
  const validateBtn = document.getElementById(allocationId);
  validateBtn.disabled = "disabled"
  $.ajax({
    type: "PUT",
    url: APIRoute + "admin/validate",
    datatype: "html",
    data: {
      uid: window.uid,
      validator: localStorage.displayName,
      allocationId: allocationId
    },
    success: function (response) {
      console.log(response);
      if (response == "success") {
        validateBtn.innerHTML = "Done ✔️"
        window.location.reload()
      }
    },
  });
}