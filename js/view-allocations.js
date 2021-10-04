function pageScript() {
  document.getElementById("name-holder").innerHTML = localStorage.displayName;
  document.getElementById("no-allocations-message").classList.add("d-none");

  $.ajax({
    type: "GET",
    url: APIRoute + "allocations/all?uid=" + window.uid + "&isAgreed=1&isValidated=0&all=false",
    datatype: "html",
    success: function (response) {
      console.log(response);
      if (response.status == "admin") {
        const allocations = response.data;
        if(allocations.length == 0){
          document.getElementById("no-allocations-message").classList.remove("d-none");
        } else {
          for (var i = 0; i < allocations.length; i++) {
            document.getElementById('allocations').appendChild(getCard(allocations[i]));
          }
        }
      } else {
        console.log("Nakku");
        // window.location.href = "home.php"
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
  });
}

function getAllocationRecords(filterQuery) {
  document.getElementById("no-allocations-message").classList.add("d-none");
  document.getElementById('allocations').innerHTML = "";
  $.ajax({
    type: "GET",
    url: APIRoute + "allocations/all?uid=" + window.uid + filterQuery,
    datatype: "html",
    success: function (response) {
      console.log(response);
      if (response.status == "admin") {
        
        const allocations = response.data;
        if(allocations.length == 0){
          document.getElementById("no-allocations-message").classList.remove("d-none");
        } else{
          document.getElementById("no-allocations-message").classList.add("d-none");

          for (var i = 0; i < allocations.length; i++) {
            document.getElementById('allocations').appendChild(getCard(allocations[i]));
          }
        }
        
        
      } else {
        console.log("Nakku");
        // window.location.href = "home.php"
      }
      document.getElementById("pageLoader").classList.add("d-none");
      document.getElementById("pageContent").classList.remove("d-none");
    },
  });
}


$('input[type=radio][name=filterRadio]').change(function () {
  if (this.value == 'all') {
    getAllocationRecords("&all=true");
  }
  else if (this.value == 'validated') {
    getAllocationRecords("&all=false&isAgreed=1&isValidated=1");
  }
  else if (this.value == 'agreed') {
    getAllocationRecords("&all=false&isAgreed=1&isValidated=0");
  }
  else if (this.value == 'pending') {
    getAllocationRecords("&all=false&isAgreed=0&isValidated=0");

  } else {
    // Do something
  }
});

function getCard(allocation) {
  var parent = document.createElement('div');
  parent.classList.add("col-12")

  var card = document.createElement('div')
  card.classList.add("card", "card-body", "my-2")

  var row = document.createElement('div')
  row.classList.add('row')

  var title = document.createElement('h4');
  title.classList.add("col-12", "col-md-6", "mb-2", "w-50")
  title.innerHTML = allocation.mentorName + " ▶️ " + allocation.menteeName

  var footer = document.createElement('div')
  footer.classList.add("col-12", "col-md-6", "text-end")

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

  footer.appendChild(viewMentorBtn)
  footer.appendChild(viewStudentBtn)
  row.appendChild(title)
  row.appendChild(footer)
  card.appendChild(row)
  parent.appendChild(card)
  return parent;
}
