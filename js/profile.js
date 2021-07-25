$(document).ready(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          window.user = user;
          if (user.emailVerified) {
            window.uid = user.uid;
            document.getElementById('username').innerHTML = user.displayName;
            document.getElementById('avatar').innerHTML = user.profileURL;

            var path = window.location.pathname;
            var page = path.split("/").pop().split('?')[0];

            if (localStorage.type != "mentor") {
              document.getElementById('search-mentors-link').classList.remove('d-none')
            }
        
            $('[href="' + page + '"]').addClass("active");

            var url = new URL(window.location.href);
            var reqUid = url.searchParams.get("uid");
            if (!reqUid) {
                reqUid = window.uid;
                document.getElementById('editProfileButton').classList.remove('d-none')
            }

            $.ajax({
                type: "GET",
                url: APIRoute + "users?uid=" + reqUid,
                datatype: "html",
                
                success: function (response) {
                    
                    document.getElementById('profileAvatar').src = response.profileURL;
                    document.getElementById('fullname').innerHTML = response.fullName;
                    $('.designation').html(response.designation);

                    document.getElementById('summary').innerHTML = response.summary;
                    document.getElementById('email').innerHTML = response.email;
                    document.getElementById('country').innerHTML = response.country;
                    document.getElementById('linkedInUrl').innerHTML = response.linkedInURL;
                    document.getElementById('portfolioLink').innerHTML = response.resumeLink;
                    document.getElementById('branch').innerHTML = response.department;
                    document.getElementById('year').innerHTML = response.batch;
                    document.getElementById('areasOfInterest').innerHTML = response.areasOfInterest;
                    document.getElementById('languages').innerHTML = response.languages;


                    if (localStorage.type == 'student' && response.type == 'mentor') {
                        document.getElementById('askMentorshipBtn').classList.remove('d-none')
                        document.getElementById('askMentorshipBtn').setAttribute('data-uid', response.uid)
                    }
                        
                    
                    if (response.type == 'mentor') {
                        document.getElementById('mentorsInfo').classList.remove('d-none');
                        if (response.higherEd == null)  
                            document.getElementById('higherEd').appendChild(document.createElement('p').innerHTML = 'None');
                        else {
                            response.higherEd.split(',').forEach((ed) =>{
                            var ele = document.createElement('p');
                            ele.innerHTML = ed;
                            document.getElementById('higherEd').appendChild(ele);
                            })
                        }
                        if (response.licensesAndCerts == null)
                            document.getElementById('certs').appendChild(document.createElement('p').innerHTML = 'None');
                        else {
                            response.licensesAndCerts.split(',').forEach((ed) =>{
                                var ele = document.createElement('p');
                                ele.innerHTML = ed;
                                document.getElementById('certs').appendChild(ele);
                            })
                        }
                    }

                    if (localStorage.type == 'mentor' && response.type == 'student'){
                        var allocationId = url.searchParams.get("allocationId");
                        document.getElementById('acceptMentorshipRequest').classList.remove('d-none')
                        document.getElementById('askMentorshipBtn').getAttribute('data-allocationId', allocationId);
                    }

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
    
})

function acceptMentorshipRequest() {
    var allocationId = document.getElementById('askMentorshipBtn').getAttribute('data-allocationId');
    $.ajax({
        type: "PUT",
        url: APIRoute + "mentor/agree",
        datatype: "html",
        data: {
            allocationId: allocationId,
        },
        success: function (response) {}
    })
}

function askForMentorship() {
    var mentorUid = document.getElementById('askMentorshipBtn').getAttribute('data-uid');
    $.ajax({
        type: "POST",
        url: APIRoute + "allocations",
        datatype: "html",
        data: {
            menteeUid: window.uid,
            mentorUid: mentorUid,
        },
        success: function (response) {}
    })
}