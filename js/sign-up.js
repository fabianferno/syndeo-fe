

$(document).ready(() => {

   // Generate dropdown values for batch
    var yearStarted = 2010;
    var currentYear = (new Date()).getFullYear();
    var years = currentYear-yearStarted;
    for (var i = 0; i < years; i++) {
      if (i == years-1 && ((new Date()).getMonth() < 6))
          break;
      var string = (yearStarted+i) + '-' + (yearStarted+i + 1);

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
      
            // Dummy timeout; call API or AJAX below
            setTimeout(() => {
              $(holder).removeClass("uploadInProgress");
              $(holder).find(".upload-loader").remove();
              // If upload successful
              if (Math.random() < 0.9) {
                $(wrapper).append(
                  '<div class="snackbar show" role="alert"><i class="fa fa-check-circle text-success"></i> Profile image updated successfully</div>'
                );
      
                // Clear input after upload
                $(triggerInput).val("");
      
                setTimeout(() => {
                  $(wrapper).find('[role="alert"]').remove();
                }, 3000);
              } else {
                $(holder).find(".pic").attr("src", currentImg);
                $(wrapper).append(
                  '<div class="snackbar show" role="alert"><i class="fa fa-times-circle text-danger"></i> There is an error while uploading! Please try again later.</div>'
                );
      
                // Clear input after upload
                $(triggerInput).val("");
                setTimeout(() => {
                  $(wrapper).find('[role="alert"]').remove();
                }, 3000);
              }
            }, 1500);
          };
        } else {
          $(wrapper).append(
            '<div class="alert alert-danger d-inline-block p-2 small" role="alert">Please choose the valid image.</div>'
          );
          setTimeout(() => {
            $(wrapper).find('role="alert"').remove();
          }, 3000);
        }
      });


    // Submit
    document.getElementById('SignUpButton').addEventListener('click', () => {


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