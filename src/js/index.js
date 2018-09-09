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
  console.log(checkNotEmpty(this.value));
});

function getHints(value, allHints) {
  var res = [];

  res = cities.filter(city => city[0].toLowerCase() === value.toLowerCase());

  return res;
}

console.log(getHints('p', cities));