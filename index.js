var switchbtn = document.getElementById("switch");
var monthlyrow = document.getElementById("monthlyrow");
var annual = document.getElementById("annualyrow");
function abc() {
  annual.classList.toggle("random");
  monthlyrow.classList.toggle("random");
}
switchbtn.addEventListener("click", abc);
