function pageScript() {
  
  $('.bootstrap-tagsinput').addClass('form-control');

  $.ajax({
    type: "GET",
    url: APIRoute + "users?uid=" + window.uid,
    datatype: "html",

    success: function (response) {
      localStorage.type = response.isMentor == 1 ? "mentor" : "student";
      document.getElementById('formTitle').innerHTML = (response.isMentor == 1 ? "Mentor" : "Student") + "'s Basic information";

      if (response.profilePic != null)
        document.getElementById('profilePic').src = response.profilePic;
      else
        document.getElementById('profilePic').src = "assets/images/png/avatar.jpg";

      // Populate data
      document.getElementById('fullName').value = response.fullName;
      document.getElementById('email').value = response.email;
      if (response.gender == 'M')
        document.getElementById('genderMale').checked = true;
      else
        document.getElementById('genderFemale').checked = true;

      document.getElementById('batch').value = response.batch;
      document.getElementById('dob').value = response.dateOfBirth;
      document.getElementById('phone').value = response.mobile;
      document.getElementById('designation').value = response.designation;
      document.getElementById('prefContact').value = response.contactPref;
      document.getElementById('country').value = response.country;
      document.getElementById('language').value = response.languages;
      document.getElementById('linkedIn').value = response.linkedInURL;
      document.getElementById('resumeLink').value = response.resumeLink;
      document.getElementById('summary').value = response.summary;
      document.getElementById('areasOfInterest').value = response.areasOfInterest;

      //Mentor Fields
      if (response.isMentor == 1) {
        document.getElementById('mentorFields').classList.remove('d-none')
        response.higherEd.split(',').forEach((higherStudies, i) => {
          addFields('higherStudiesGroup');
          $('#higherStudiesGroup'+i).find('.higherStudies').val(higherStudies)
        });
        response.licensesAndCerts.split(',').forEach((licenseAndCerts, i) => {
          addFields('licenseAndCertsGroup');
          $('#licenseAndCertsGroup'+i).find('.licenseAndCerts').val(licenseAndCerts)
        });
      }
      
      document.getElementById('pageLoader').classList.add('d-none');
      document.getElementById('pageContent').classList.remove('d-none');
    },
    error: function (error) { },

  })
}
$(document).ready(() => {
  // Generate dropdown values for batch
  var yearStarted = 2010;
  var currentYear = (new Date()).getFullYear();
  var years = currentYear - yearStarted;
  for (var i = 0; i < years; i++) {
    if (i == years - 1 && ((new Date()).getMonth() < 6))
      break;
    var string = (yearStarted + i) + '-' + (yearStarted + i + 4);

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
    Array.from(document.getElementsByClassName('higherStudies')).forEach((field, i) => {
      if (field.value != '' && i != 0)
        higherStudies.push(field.value);
    })
    higherStudies.length == 0 ? null : higherStudies.join(',');


    let licenseAndCerts = [];
    Array.from(document.getElementsByClassName('licenseAndCerts')).forEach((field, i) => {
      if (field.value != '' && i != 0)
        licenseAndCerts.push(field.value);
    })
    licenseAndCerts.length == 0 ? null : licenseAndCerts.join(',');


    var tags = document.getElementById('tags').value;
    let _tags = tags.split(',')
    _tags.forEach(tag => tag.trim())
    tags = _tags.length != 0 ? _tags.join(",") : null;

    var isActive = document.getElementById('agreeForMentorship').checked ? 1 : 0;


    // ------------------------ MENTOR's FIELDS -----------------------------

    if (validateForm()) {
      var formdata = new FormData();
      if (!!$('.uploadProfileInput').get(0).files[0])
        formdata.append("profilePic", $('.uploadProfileInput').get(0).files[0], "ProfileImage." + $('.uploadProfileInput').get(0).files[0].name.split('.').pop());

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

        success: function (response) {
          if (response == "success") {
            showSubmitButton();
            document.getElementById('message-success').classList.remove('d-none');
            window.location.href = "profile.php";

          } else {
            document.getElementById('message-error').classList.remove('d-none');
            showSubmitButton();
          }

        },
        error: (error) => {
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
  var parentElement = document.getElementById(id + 'Fields')
  var newId = id + '-' + (parseInt(parentElement.childNodes.length) + 1)

  inputField.id = newId;
  inputField.classList.remove('d-none');

  parentElement.appendChild(inputField);
  inputField.lastChild.previousSibling.setAttribute('onclick', 'removeFields("' + newId + '")')
}

function removeFields(id) {
  $('#' + id).remove();
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
    if (element.value == "") {
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