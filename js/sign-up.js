

$(document).ready(() => {

  var photoURL = "https://i.ibb.co/R3hT89r/avatar.png";
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
    
    document.getElementById('pageLoader').classList.add('d-none');
    document.getElementById('pageContent').classList.remove('d-none');
    
    $('.bootstrap-tagsinput').addClass('form-control');

    // Show and hide mentor text fields
    $('input[name="roleRadio"]').on('change', (e) => {
      if (e.target.value == "mentor") 
        $('#mentorFields').removeClass('d-none');
      else
        $('#mentorFields').addClass('d-none');

    })

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
            photoURL = this.result;
          };
        }
      });


    // Submit
    document.getElementById('signUpButton').addEventListener('click', () => {

        document.getElementById('signUpButton').setAttribute('disabled', 'disabled');
        document.getElementById('signUpButtonText').classList.add('d-none');
        document.getElementById('signUpButtonLoader').classList.remove('d-none');
        resetForm();

        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value.trim();
        var password = document.getElementById('password').value.trim();
        var confirmPassword = document.getElementById('reTypePassword').value.trim();
        var type = $('input[name="roleRadio"]').val();

        var validDomain = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(licet.ac.in)$/;  

        if (validateForm()) {
          if (password === confirmPassword) {
            if (type == "student" && !(email.toLowerCase().match(validDomain))) {
              document.getElementById('email').classList.add('is-invalid');
              document.getElementById('invalidEmail').classList.remove('d-none');
              showSubmitButton();
              return false;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in 
              window.user = userCredential.user;
              window.uid = userCredential.user.uid;

              var gender = $('input[name="genderRadio"]').val();
              var batch = document.getElementById('batch').value;
              var department = document.getElementById('department').value;
              var dob = document.getElementById('dob').value;
              var phone = document.getElementById('phone').value;
              var designation = document.getElementById('designation').value;
              var country = document.getElementById('country').value;
              var language = document.getElementById('language').value;
              var areasOfInterest = document.getElementById('areasOfInterest').value;
              var summary = document.getElementById('summary').value;

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

              uploadImage(photoURL)
              .then((res) => {
                photoURL = res.data.url;
                console.log(res.data.delete_url)
                user.updateProfile({
                  displayName: fullName,
                  photoURL: res.data.url
                })
                .then(() => {
                  $.ajax({
                    type: "POST",
                    url: APIRoute + "users",
                    datatype: "html",
                    data: {
                      uid: window.uid,
                      fullName: fullName,
                      email: email,
                      gender: gender,
                      dateOfBirth: dob,
                      mobile: phone,
                      batch: batch,
                      department: department,
                      isMentor: (type == "mentor") ? 1 : 0,
                      designation: designation,
                      linkedInURL: linkedIn,
                      contactPref: prefContact,
                      languages: language,
                      resumeLink: resumeLink,
                      areasOfInterest: areasOfInterest,
                      higherEd: higherStudies,
                      licensesAndCerts: licenseAndCerts,
                      tags: tags,
                      profileURL: res.data.url,
                      summary: summary,
                      country: country,
                      isActive: isActive,
                  },
                  success: function(response) {
                    if (response == "success") {

                      localStorage.type = type;
                      localStorage.isActive = isActive;
                      document.getElementById('signUpButtonLoader').classList.add('d-none');
                      document.getElementById('signUpButtonTextSuccess').classList.remove('d-none');

                      window.user
                      .sendEmailVerification()
                      .then(function () {
                        window.location.href = "verify-account.php";
                      })
                      .catch(function (error) {
                        // An error happened.
                      });

                    } else if (response == "exists") {
                      document.getElementById('message-exists').classList.remove('d-none');
                      showSubmitButton();
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
                })
              }).catch((error) => {
                console.log(error)
                console.log('img upload failed')
                showSubmitButton();
              })
              
            })
            .catch((error) => {
              console.log(error)
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == "auth/email-already-in-use")
                  document.getElementById('message-exists').classList.remove('d-none');
              else
                  document.getElementById('message-err').innerHTML = errorMessage;
              showSubmitButton();
            })
            
          } else {
            document.getElementById('reTypePassword').classList.add('is-invalid');
            document.getElementById('incorrectPassword').classList.remove('d-none');
            showSubmitButton();
          }
        } else {
          showSubmitButton();
          document.getElementById('message-empty').classList.remove('d-none');
        }

    });
})

function uploadImage(photoURL) {
  return new Promise((resolve, reject) => {
      // Upload image in imgBB
      $.ajax({
        type: "POST",
        url: "https://api.imgbb.com/1/upload",
        datatype: "html",
        data: {
          key: "b94ccad1f31df8111248bdf621675911",
          image: photoURL,
        },
        success: (res) => {
          console.log(res)
          resolve(res)
        },
        error: (error) => {
          console.log(error)
          reject(error)
        }
      })
  })                
}

function addFields(id) {
  var inputField = document.getElementById(id).cloneNode(true);
  var parentElement = document.getElementById(id+'Fields')
  var newId = id + '-' + (parseInt(parentElement.childNodes.length) +1)

  inputField.id = newId;
  inputField.classList.remove('d-none');
  inputField.firstChild.nextSibling.classList.add(id.replace('Group', ''));

  parentElement.appendChild(inputField);
  inputField.lastChild.previousSibling.setAttribute('onclick', 'removeFields("'+newId+'")')
}

function removeFields(id) {
  $('#'+id).remove();
}


function resetForm() {
  $('input[required=""]').removeClass('is-invalid');
  document.getElementById('invalidEmail').classList.add('d-none');
  document.getElementById('message-error').classList.add('d-none');
  document.getElementById('message-exists').classList.add('d-none');
  document.getElementById('message-empty').classList.add('d-none');
  document.getElementById('incorrectPassword').classList.add('d-none');
  document.getElementById('message-err').innerHTML = '';
}

function validateForm() {
  var flag = true;
  document.querySelectorAll('input[required=""]').forEach((element) => {
    if( element.value == "") {
        element.classList.add('is-invalid')
        flag = false;
    }
  })
  return flag;
}

function showSubmitButton() {
  document.getElementById('signUpButtonLoader').classList.add('d-none');
  document.getElementById('signUpButton').removeAttribute('disabled');
  document.getElementById('signUpButtonText').classList.remove('d-none');
}