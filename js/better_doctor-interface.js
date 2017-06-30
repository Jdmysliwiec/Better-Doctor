var DoctorSearch = require('./../js/better_doctor.js').doctorSearchModule;

var displayDoctors = function(doctorArray) {
  $('.show-doctors').empty();
  for (var i = 0; i < doctorArray.length; i++) {
    $('.show-doctors').append(
      '<div class="doctor">' +
      '<h2>' + doctorArray[i].profile.first_name + ' ' + doctorArray[i].profile.last_name + '</h2>' +
      '<img src=' + doctorArray[i].profile.image_url + '>' +
      '<ul class="properties">' +
        '<li> Specialty: ' + doctorArray[i].specialties[0].actor + '</li>' +
        '<li>' + doctorArray[i].specialties[0].description + '</li>' +
        '<li>' + doctorArray[i].practices[0].name + '</li>' +
        '<li>' + '<a href="' + doctorArray[i].practices[0].website + '">Practice website</a>' +
      '</ul>' +
      '</div>'
    );
  }
};

$ (function() {
  var newDoctorSearch = new DoctorSearch();
  $('#medical-condition').submit(function(event) {
    event.preventDefault();
    var issue = $('#medical-issue').val();
    newDoctorSearch.locateDoctors(issue, displayDoctors);
  });
});
