$(document).ready(() => {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.user = user;
          if (user.emailVerified) {
            window.uid = user.uid;

            document.getElementById('username').innerHTML = user.displayName;
            document.getElementById('avatar').innerHTML = user.profileURL;
            photoURL = user.photoURL;

            var path = window.location.pathname;
            var page = path.split("/").pop();
            console.log(page);
        
            $('[href="' + page + '"]').addClass("active");
            
            $('.bootstrap-tagsinput').addClass('form-control');
            document.getElementById('formTitle').innerHTML = localStorage.type + "'s Basic information";
            if (localStorage.type == "mentor") {
              document.getElementById('mentorFields').classList.remove('d-none')
            } else {
              document.getElementById('search-mentors-link').classList.remove('d-none')
            }

            $.ajax({
                type: "GET",
                url: APIRoute + "users?uid=" + window.uid,
                datatype: "html",
                
                success: function (response) {
                    localStorage.type = response.isMentor == 1 ? "mentor" : "student";
                    window.profilePic = response.profilePic;
                    if ( response.isMentor == 1) {
                        document.getElementById('mentorFields').classList.remove('d-none');
                    }
                    document.getElementById('profilePic').src = user.profileURL;

                    // Populate data
                    document.getElementById('fullName').value = response.fullName;
                    // .. and so
                },
                error: function (error) {},
                completed: function(res) {
                  document.getElementById('pageLoader').classList.add('d-none');
                  document.getElementById('pageContent').classList.remove('d-none');
                }

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


      // Generate dropdown values for batch
      var yearStarted = 2010;
      var currentYear = (new Date()).getFullYear();
      var years = currentYear-yearStarted;
      for (var i = 0; i < years; i++) {
          if (i == years-1 && ((new Date()).getMonth() < 6))
              break;
          var string = (yearStarted+i) + '-' + (yearStarted+i + 4);

          var ele = document.createElement('option');
          ele.value = string;
          ele.innerHTML = string;

          document.getElementById('batch').appendChild(ele)
      }
    
      $(".uploadProfileInput").on("change", function () {
        var holder = $(this).closest(".pic-holder");
        var wrapper = $(this).closest(".profile-pic-wrapper");
        $(wrapper).find('[role="alert"]').remove();
        files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) {
          return;
        }
        if (/^image/.test(files[0].type)) {
          // only image file
          window.file = files[0]
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
      
          reader.onloadend = function () {
            $(holder).find(".pic").attr("src", this.result);
          };
        }
      });


    // Submit
    document.getElementById('editProfileButton').addEventListener('click', () => {

        document.getElementById('editProfileButton').setAttribute('disabled', 'disabled');
        document.getElementById('editProfileButtonText').classList.add('d-none');
        document.getElementById('editProfileButtonLoader').classList.remove('d-none');
        resetForm();

        var prefContact = document.getElementById('prefContact').value;
        prefContact = (prefContact != '') ? prefContact : null;

        var linkedIn = document.getElementById('linkedIn').value;
        linkedIn = (linkedIn != '') ? linkedIn : null;

        var resumeLink = document.getElementById('resumeLink').value;
        resumeLink = (resumeLink != '') ? resumeLink : null;

// ------------------------ MENTOR's FIELDS -----------------------------

        let higherStudies = [];
        Array.from(document.getElementsByClassName('higherStudies')).forEach(field => {
          if (field.value != '')
            higherStudies.push(field.value);
        })
        higherStudies.length == 0 ? null : higherStudies.join(',');


        let licenseAndCerts = [];
        Array.from(document.getElementsByClassName('licenseAndCerts')).forEach(field => {
          if (field.value != '')  
            licenseAndCerts.push(field.value);
        })
        licenseAndCerts.length == 0 ? null : licenseAndCerts.join(',');


        var tags = document.getElementById('tags').value;
        let _tags = tags.split(',')
        _tags.forEach( tag => tag.trim() )
        tags = _tags.length != 0 ? _tags.join(",") : null;

        var isActive = document.getElementById('agreeForMentorship').checked ? 1 : 0;


// ------------------------ MENTOR's FIELDS -----------------------------

        if (validateForm()) {
            var formdata = new FormData();
            if (!!$('.uploadProfileInput').get(0).files[0])
                formdata.append("profilePic", $('.uploadProfileInput').get(0).files[0], "ProfileImage." + $('.uploadProfileInput').get(0).files[0].name.split('.').pop());
            else 
                formdata.append("profilePic", window.profilePic)
            formdata.append("fullName", document.getElementById('fullName').value);
            formdata.append("email", document.getElementById('email').value.trim());
            formdata.append("uid", window.uid);
            formdata.append("gender", $('input[name="genderRadio"]').val());
            formdata.append("dateOfBirth", document.getElementById('dob').value);
            formdata.append("mobile", document.getElementById('phone').value);
            formdata.append("batch", document.getElementById('batch').value);
            formdata.append("department", document.getElementById('department').value);
            formdata.append("designation", document.getElementById('designation').value);
            formdata.append("languages", document.getElementById('language').value);
            formdata.append("areasOfInterest", document.getElementById('areasOfInterest').value);
            formdata.append("country", document.getElementById('country').value);
            formdata.append("summary", document.getElementById('summary').value);
            formdata.append("isMentor", (localStorage.type == "mentor") ? 1 : 0);
            formdata.append("linkedInURL", linkedIn);
            formdata.append("contactPref", prefContact);
            formdata.append("resumeLink", resumeLink);
            formdata.append("higherEd", higherStudies);
            formdata.append("licensesAndCerts", licenseAndCerts);
            formdata.append("tags", tags);
            formdata.append("isActive", isActive);

            $.ajax({
              type: "PUT",
              url: APIRoute + "users",
              datatype: "html",
              data: formdata,

            success: function(response) {
              if (response == "success") {
                showSubmitButton();
                document.getElementById('message-success').classList.remove('d-none');
                window.location.href = "profile.php";


              } else {
                document.getElementById('message-error').classList.remove('d-none');
                showSubmitButton();
              }
              
            },
            error: (error) =>{
              console.log(error);
              document.getElementById('message-error').classList.remove('d-none');
              showSubmitButton();
            },
          })
              
        } else {
          showSubmitButton();
          document.getElementById('message-empty').classList.remove('d-none');
        }

    });
})



function addFields(id) {
    var inputField = document.getElementById(id).cloneNode(true);
    var parentElement = document.getElementById(id+'Fields')
    var newId = id + '-' + (parseInt(parentElement.childNodes.length) +1)
  
    inputField.id = newId;
    inputField.classList.remove('d-none');
  
    parentElement.appendChild(inputField);
    inputField.lastChild.previousSibling.setAttribute('onclick', 'removeFields("'+newId+'")')
  }
  
  function removeFields(id) {
    $('#'+id).remove();
  }
  
  
  function resetForm() {
    $('input[required=""]').removeClass('is-invalid');
    document.getElementById('message-error').classList.add('d-none');
    document.getElementById('message-success').classList.add('d-none');
    document.getElementById('message-empty').classList.add('d-none');
  }
  
  function validateForm() {
    var flag = true;
    document.querySelectorAll('input[required=""]').forEach((element) => {
      if ( element.value == "") {
          element.classList.add('is-invalid')
          flag = false;
      }
    })
    return flag;
  }
  
  function showSubmitButton() {
    document.getElementById('editProfileButtonLoader').classList.add('d-none');
    document.getElementById('editProfileButton').removeAttribute('disabled');
    document.getElementById('editProfileButtonText').classList.remove('d-none');
  }