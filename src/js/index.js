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
  } else {
    hideBox();
  }
});

function getHints(value, allHints) {
  var res = [];

  res = cities.filter(city => city[0].toLowerCase() === value.toLowerCase());
  
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
