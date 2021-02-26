var fRate;
var sRate;

function updateRangeEntered(val) {
  if ( typeof(val) != 'undefined' && val != null ) {
    fRate = parseFloat(val);
    sRate = val + "%";
  } else {
    fRate = 0;
    sRate = "0%";
  }
  document.getElementById("rangeEntered").innerHTML = sRate;
}

function compute() {
  var fPrincipal;
  var fReturn;
  var iYears;
  var sCalcYear;
  var sMessage;
  var sPrincipal;
  var sReturn;
  var sYears;
  var cReturn = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2 });

  sPrincipal = document.getElementById("principal").value;
  if ( typeof(sPrincipal) != 'undefined' &&
       sPrincipal != null &&
       sPrincipal != "" ) {
    fPrincipal = parseFloat(sPrincipal);
  } else {
    fPrincipal = 0;
    sPrincipal = "0";
  }

  sYears = document.getElementById("years").value;
  if ( typeof(sYears) != 'undefined' &&
       sYears != null &&
       sYears != "" ) {
    iYears = parseInt(sYears);
  } else {
    iYears = 0;
    sYears = "0";
  }

  if ( fPrincipal == 0) {
    fReturn = 0;
    sReturn = "0";
  } else {
    fReturn = fPrincipal * fRate * iYears / 100;
  }
//    sReturn = fReturn.toString();
    sReturn = cReturn.format(fReturn);
    sPrincipal = cReturn.format(fPrincipal);
  var now = new Date();
  var currentYear = now.getFullYear();
  currentYear = currentYear + iYears;
  sCalcYear = currentYear.toString;
  sMessage = "If you deposit " + sPrincipal + "<br>" +
             "at an interest rate of " + sRate + "<br>" +
             "you will receive an amount of " + sReturn + "<br>";
             "in the year " + sCalcYear;
  document.getElementById("resultLine").innerHTML = sMessage;
}
