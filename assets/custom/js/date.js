window.onload = function (e) {
  var footer = document.getElementById("date");
  let currentDate = new Date();
  var currentYear = currentDate.getFullYear();

  footer.innerHTML = currentYear;
};
