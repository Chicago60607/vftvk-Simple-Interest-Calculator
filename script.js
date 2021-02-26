var fGblPrincipal = 0;
var fGblRate = 10.25;
var iGblYears = 1;
var sGblPrincipal ="0";
var sGblRate = "10.25";
var sGblYears = "1";

//This variables will be used later in the event listeners
var rateRange = document.getElementById("rate");
var yearsDropDown = document.getElementById("years");
var principalInput = document.getElementById("principal")

//Event listener for the interest rate range slider
rateRange.addEventListener("change", function() {
	var rateEntered = rateRange.value;
	//the standard validation
  if ( typeof(rateEntered) != 'undefined' && rateEntered != null ) {
    fGblRate = parseFloat(rateEntered);
    sGblRate = rateEntered + "%";
  } else {
    fGblRate = 0;
    sGblRate = "0%";
  }
	//update the label with the rate on the right side of the slider
  document.getElementById("rangeEntered").innerHTML = sGblRate;
  //clear the calculated result message
  document.getElementById("resultLine").innerHTML = "";
});

//Event listener for the years drop down
yearsDropDown.addEventListener("change", function() {
	var yearSelected = yearsDropDown.value;
	//the standard validation
  if ( typeof(yearSelected) != 'undefined' && yearSelected != null ) {
    iGblYears = parseInt(yearSelected);
		sGblYears = yearSelected;
  } else {
    iGblYears = 0;
    sGblYears = "0";
  }
  //clear the calculated result message
  document.getElementById("resultLine").innerHTML = "";
});

//Event listener for the principal input element
principalInput.addEventListener("change", function() {
	var principalEntered = principalInput.value;
  //the standard validation
  if ( typeof(principalEntered) != 'undefined' && principalEntered != null ) {
    fGblPrincipal = parseFloat(principalEntered);
    sGblPrincipal = principalEntered;
  } else {
    fGblPrincipal = 0;
    sGblPrincipal = "0";
  }
  //clear the calculated result message
  document.getElementById("resultLine").innerHTML = "";
  if ( fGblPrincipal <= 0) {
    alert("Enter a positive number");
    document.getElementById("resultLine").innerHTML = "";	
    principalInput.value = "0";
		principalInput.focus();
	}
});

function compute() {
  var fReturn;
  var sCalcYear;
  var sMessage;
  var sPrincipal;
  var sReturn;

//Pre-format for currency values: the principal and the return
  var cReturn = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2 });

  if ( fGblPrincipal <= 0) {
    fReturn = 0;
    sReturn = "0";
    alert("Enter a positive number");
    document.getElementById("resultLine").innerHTML = "";
    principalInput.focus();
  } else {
//main calculation	
    fReturn = fGblPrincipal * fGblRate * iGblYears / 100;
//formatting the return as a currency output field
  sReturn = cReturn.format(fReturn);
//formatting the principal as a currency output field
  sPrincipal = cReturn.format(fGblPrincipal);
//today's date  
  var now = new Date();
//today's year
  var currentYear = now.getFullYear();
//adding number of years to current year
  currentYear = currentYear + iGblYears;
//converting to string
  sCalcYear = currentYear.toString();
  sMessage = "If you deposit <p3><b>" + sPrincipal + "</b></p3><br>" +
             "at an interest rate of <p3><b>" + sGblRate + "</b></p3><br>" +
             "you will receive an amount of <p3><b>" + sReturn + "</b></p3><br>" +
             "in the year <p3><b>" + sCalcYear + "</b></p3>";
  document.getElementById("resultLine").innerHTML = sMessage;
  }
}
