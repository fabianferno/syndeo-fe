function pageScript() {
  document.getElementById("pageLoader").classList.add("d-none");
  document.getElementById("pageContent").classList.remove("d-none");
  document.getElementById("search").addEventListener("submit", (e) => {
    e.preventDefault();
    search();
  });
  document.getElementById("searchButton").addEventListener("click", search);
}

function search() {
  var query = document.getElementById("searchQuery").value;

  if (query.trim() != "") {
    $.ajax({
      type: "GET",
      url: APIRoute + "mentors?keywords=" + query,
      datatype: "html",

      success: function (response) {
        document.getElementById("message-error").classList.add("d-none");
        document.getElementById("no-result").classList.add("d-none");
        document.getElementById("table").classList.add("d-none");
        document.getElementById("results-header").classList.add("d-none");
        document.getElementById("svg").classList.add("d-none");
        document.getElementById("resultsHolder").innerHTML = "";

        if (response.length == 0) {
          document.getElementById("no-result").classList.remove("d-none");
        } else if (response.length > 0) {
          for (var i = 0; i < response.length; i++) {
            document.getElementById("table").classList.remove("d-none");
            document
              .getElementById("results-header")
              .classList.remove("d-none");
            document.getElementById("total").innerHTML = response.length;

            var profile = getChildElement(
              response[i].fullName,
              response[i].designation,
              response[i].country
            );
            profile.setAttribute(
              "onclick",
              "openMentorProfile('" + response[i].uid + "')"
            );
            document.getElementById("resultsHolder").appendChild(profile);
          }
        } else {
          document.getElementById("message-error").classList.remove("d-none");
        }
      },
      error: (error) => {
        console.log(error);
        document.getElementById("message-error").classList.remove("d-none");
      },
    });
  }
}

function getChildElement(fullName, Designation, Country) {
  var tr = document.createElement("tr");
  tr.classList.add(
    "btn",
    "d-flex",
    "justify-content-between",
    "border-bottom",
    "rounded-bottom"
  );

  var profile = document.createElement("td");
  var country = document.createElement("td");

  country.classList.add("align-middle");
  profile.classList.add("d-flex", "flex-column", "ms-3", "lh-1");
  profile.style.textAlign = "left";

  var name = document.createElement("h5");
  name.classList.add("fw-bold", "mb-1");
  name.innerHTML = fullName;
  var designation = document.createElement("p");
  designation.classList.add("mb-0");
  designation.innerHTML = Designation;
  var countryText = document.createElement("p");
  countryText.classList.add("my-auto");
  countryText.innerHTML =
    "<span class='fas fa-map-marker-alt'></span> " + Country;

  profile.appendChild(name);
  profile.appendChild(designation);
  country.appendChild(countryText);
  tr.appendChild(profile);
  tr.appendChild(country);

  return tr;
}

function openMentorProfile(uid) {
  window.location.href = "profile.php?uid=" + uid;
}
