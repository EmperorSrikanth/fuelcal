function runScript() {
var range = parseInt(document.getElementById("kms").value, 10);
var mileage =  parseInt(document.getElementById("mileage").value, 10);
var fuelprice = parseInt(document.getElementById("fuelprice").value, 10);
var result = (range / mileage)*fuelprice;
result = parseFloat(Math.round(result * 100) / 100).toFixed(2);
var nresult = thousands_separators(result);

        if (nresult != '') {
            document.getElementById('run').innerHTML = 'Your Total Fare is ₹' + nresult  + ' only.';
            document.getElementById("show").style.display = "block";
        }
}
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    // .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

