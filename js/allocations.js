function pageScript() {
  document.getElementById("pageLoader").classList.add("d-none");
  document.getElementById("pageContent").classList.remove("d-none");

  $.ajax({
    type: "GET",
    url: APIRoute + "allocations/all?uid=" + window.uid,
    datatype: "html",
    success: function (response) {
      console.log(response);
    },
  });
}
