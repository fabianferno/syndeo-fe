$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.user = user;
          if (user.emailVerified) {
            window.uid = user.uid;
            document.getElementById('pageLoader').classList.add('d-none');
            document.getElementById('pageContent').classList.remove('d-none');

            document.getElementById('username').innerHTML = user.displayName;
            document.getElementById('avatar').innerHTML = user.profileURL;

            var path = window.location.pathname;
            var page = path.split("/").pop();
            console.log(page);

            if (localStorage.type == "mentor") {
              
            } else {
              document.getElementById('search-mentors-link').classList.remove('d-none')
            }
        
            $('[href="' + page + '"]').addClass("active");

            document.getElementById('search').addEventListener('submit', (e) => {
                e.preventDefault();
                search();
            })


          } else {
              var thisPage = window.location.href.split('/').pop();
              window.location.href = "verify-account.php?redirect="+thisPage;
          }

        } else {
            // signed out
          window.location.href = "index.php";
        }
      });
    
})

function search() {
  var query = document.getElementById('searchQuery').value;

  $.ajax({
    type: "GET",
    url: APIRoute + "users",
    datatype: "html",
    data: {
      uid: window.uid,
      query: query
  },
  success: function(response) {
    if (response == "error") {
      document.getElementById('message-error').classList.remove('d-none');
    } else if (response == "no-results") {

    } else {
      for (var i = 0; i < response.length; i++) {
        document.getElementById('resultsHolder').appendChild(getChildElement(fullName, Designation, Country))
      }
    }
    
  },
    error: (error) =>{
      console.log(error);
      document.getElementById('message-error').classList.remove('d-none');
    },
  })
}


function getChildElement(fullName, Designation, Country) {
  var tr = document.createElement('tr');

  var profile = document.createElement('td');
  var country = document.createElement('td');

  country.classList.add('align-middle');
  profile.classList.add('align-middle','d-flex','align-items-center','ms-3','lh-1');

  var name = document.createElement('h5')
  name.classList.add('fw-bold','mb-1')
  name.innerHTML = fullName;
  var designation = document.createElement('p')
  designation.classList.add('mb-0');
  designation.innerHTML = Designation;
  var countryText = document.createElement('p')
  countryText.classList.add('my-auto');
  countryText.innerHTML = "<span class='fas fa-map-marker-alt'></span> " + Country;

  profile.appendChild(name)
  profile.appendChild(designation)
  country.appendChild(countryText)
  tr.appendChild(profile);
  tr.appendChild(country);

  return tr;
}