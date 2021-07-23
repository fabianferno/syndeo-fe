

$(document).ready(() => {

  var photoURL = userAppUrl + "assets/images/png/avatar.jpg"

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
        var triggerInput = this;
        var currentImg = $(this).closest(".pic-holder").find(".pic").attr("src");
        var holder = $(this).closest(".pic-holder");
        var wrapper = $(this).closest(".profile-pic-wrapper");
        $(wrapper).find('[role="alert"]').remove();
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) {
          return;
        }
        if (/^image/.test(files[0].type)) {
          // only image file
          var reader = new FileReader(); // instance of the FileReader
          reader.readAsDataURL(files[0]); // read the local file
      
          reader.onloadend = function () {
            $(holder).addClass("uploadInProgress");
            $(holder).find(".pic").attr("src", this.result);
            $(holder).append(
              '<div class="upload-loader"><div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span></div></div>'
            );
      
            // call API or AJAX below to upload this image
            setTimeout(() => {
              $(holder).removeClass("uploadInProgress");
              $(holder).find(".upload-loader").remove();
              
              photoURL = "" // Update Photo URL after upolading the image
            }, 1500);
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
              return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in 
              window.user = userCredential.user;
              window.uid = userCredential.user.uid;

              var gender = $('input[name="genderRadio"]').val();
              // get all values

              user.updateProfile({
                displayName: fullName,
                photoURL: photoURL
              })
              .then(() => {
                  $.ajax({
                    type: "POST",
                    url: APIRoute + "routename",
                    datatype: "html",
                    data: {
                      uid: window.uid,
                      // .. 
                  },
                  success: function(response) {
                    if (response == "success") {

                      localStorage.type = type;
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
              
              
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
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
  document.getElementById('invalidEmail').classList.add('d-none');
  document.getElementById('message-error').classList.add('d-none');
  document.getElementById('message-exists').classList.add('d-none');
  document.getElementById('message-empty').classList.add('d-none');
  document.getElementById('incorrectPassword').classList.add('d-none');
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