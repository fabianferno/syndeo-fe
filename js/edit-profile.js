$(document).ready(() => {
    var photoURL;

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.user = user;
          if (user.emailVerified) {
            window.uid = user.uid;
            document.getElementById('pageLoader').classList.add('d-none');
            document.getElementById('pageContent').classList.remove('d-none');

            document.getElementById('username').innerHTML = user.displayName;
            document.getElementById('avatar').innerHTML = user.profileURL;
            photoURL = user.photoURL;
            
            $('.bootstrap-tagsinput').addClass('form-control');

            $.ajax({
                type: "GET",
                url: APIRoute + "users",
                datatype: "html",
                data: {
                  uid: window.uid,
                },
                success: function (response) {
                    localStorage.type = response.type;
                    if ( response.type == "mentor") {
                        document.getElementById('mentorFields').classList.remove('d-none');
                    }
                    document.getElementById('formTitle').innerHTML = response.type + "'s Basic information";
                    document.getElementById('profilePic').src = user.profileURL;

                    // Populate data
                    document.getElementById('fullName').value = response.fullName;
                    // .. and so
                },
                error: function (error) {}

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
    document.getElementById('editProfileButton').addEventListener('click', () => {

        document.getElementById('editProfileButton').setAttribute('disabled', 'disabled');
        document.getElementById('editProfileButtonText').classList.add('d-none');
        document.getElementById('editProfileButtonLoader').classList.remove('d-none');
        resetForm();

        var fullName = document.getElementById('fullName').value;
        var gender = $('input[name="genderRadio"]').val();
        // get all values


        if (validateForm()) {

              user.updateProfile({
                displayName: fullName,
                photoURL: photoURL
              })
              .then(() => {
                  $.ajax({
                    type: "UPDATE",
                    url: APIRoute + "users",
                    datatype: "html",
                    data: {
                      uid: window.uid,
                      // .. 
                  },
                  success: function(response) {
                    if (response == "success") {

                      localStorage.type = type;
                      showSubmitButton();
                      document.getElementById('message-success').classList.remove('d-none');


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