var cities = ['Prague', 'Brno', 'Ostrava', 'Liberec', 'Olomouc', 'Pradubice', 'Jihlava', 'Oprava', 'Most', 'Karlovy Vary'];

var search = document.getElementById('search');

function checkNotEmpty(i) {
  var isFull = false;

  if(i != '') {
    isFull = true;
  } else {
    isFull = false;
  }
  return isFull;
}

search.addEventListener('input', function (evt) { 
  if(checkNotEmpty(this.value)) {
    showBox();
    var hints = getHints(this.value, cities);
    console.log(hints);
  } else {
    hideBox();
  }
});
/**
 * takes the hints
 * @param {*} value  value input's
 * @param {*} allHints all hints in the array
 */
function getHints(value, allHints) {
  var res = [];

  res = allHints.filter(city => city.toLowerCase().indexOf(value.toLowerCase()) === 0);
  
  return res;
}

function showBox() {
  var newDiv = document.getElementsByClassName('window')[0];
  newDiv.classList.add("window-show");
}

function hideBox() {
  var newDiv = document.getElementsByClassName('window')[0];
  newDiv.classList.remove("window-show");
}
