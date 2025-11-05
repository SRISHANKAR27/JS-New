var today = new Date();
var formattedToday = today.toISOString().split("T")[0];


document.getElementById("birthdate").max = formattedToday;
document.getElementById("futuredate").min = formattedToday;

function calculateAge() {
  var birthInput = document.getElementById("birthdate").value;
  var futureInput = document.getElementById("futuredate").value;
  var resultBox = document.getElementById("ageResult");

  if (birthInput === "" || futureInput === "") {
    resultBox.textContent = "Please enter both dates.";
    return;
  }

  var birthDate = new Date(birthInput);
  var futureDate = new Date(futureInput);

  if (futureDate < birthDate) {
    resultBox.textContent = "Future date must be after birth date.";
    return;
  }

  var years = futureDate.getFullYear() - birthDate.getFullYear();
  var months = futureDate.getMonth() - birthDate.getMonth();
  var days = futureDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    var prevMonth = new Date(futureDate.getFullYear(), futureDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultBox.textContent = "You will be " + years + " years, " + months + " months, and " + days + " days old on " + futureDate.toDateString() + ".";
}

function convertTemperature() {
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var tempValue = parseFloat(document.getElementById("tempInput").value);
  var resultBox = document.getElementById("tempResult");

  if (isNaN(tempValue)) {
    resultBox.textContent = "Please enter a valid temperature.";
    return;
  }

  var celsius;

  if (fromUnit === "C") {
    celsius = tempValue;
  } else if (fromUnit === "F") {
    celsius = (tempValue - 32) * 5 / 9;
  } else if (fromUnit === "K") {
    celsius = tempValue - 273.15;
  }

  var converted;

  if (toUnit === "C") {
    converted = celsius;
  } else if (toUnit === "F") {
    converted = (celsius * 9 / 5) + 32;
  } else if (toUnit === "K") {
    converted = celsius + 273.15;
  }

  resultBox.textContent = tempValue + "°" + fromUnit + " = " + converted.toFixed(2) + "°" + toUnit;
}
var ageButton = document.getElementById("calcAgeBtn");
ageButton.onclick = calculateAge();

var tempButton = document.getElementById("convertTempBtn");
tempButton.onclick = convertTemperature();