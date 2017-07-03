var apiKey = require('./../.env').apiKey;

DoctorSearch = function() {
}

DoctorSearch.prototype.locateDoctors = function(medicalIssue, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C%20-122.6765%2C25&user_location=45.5231%2C%20-122.6765&skip=0&limit=15&user_key=' + apiKey).then(function(response) {
    displayDoctors(response.data);
    console.log(response);
  }).fail(function(error) {
    $('.show-doctors').text("We couldn't seem to find any doctors with that query");
  });
}
exports.doctorSearchModule = DoctorSearch;
