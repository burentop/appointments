$(document).ready(function() {
  $(".apptInput form").submit(function(event) {
    var nameInput = $("#name").val();
    var dateInput = $("#date").val();
    var startInput = $("#start-time").val();
    var endInput = $("#end-time").val();

    $("#confName").text(nameInput);
    $("#confDate").text(dateInput);
    $("#confStart").text(startInput);
    $("#confEnd").text(endInput);

    $(".confirmation").toggle();
    $(".apptInput").toggle();
    $(".instructions").toggle();

    event.preventDefault();
  });
});