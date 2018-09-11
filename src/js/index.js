var cities = ['Prague', 'Brno', 'Ostrava', 'Liberec', 'Olomouc', 'Pradubice', 'Jihlava', 'Oprava', 'Most', 'Karlovy Vary'];

var search = document.getElementById('search');
/**
 * check empty input or no
 * @param {*} string input written
 */
function checkNotEmpty(string) {
  var isFull = false;

  if(string != '') {
    isFull = true;
  } else {
    isFull = false;
  }
  return isFull;
}
/**
 * listen each value change of input
 * if no empty show box hints and get hints and add hints
 */
search.addEventListener('input', function (evt) { 
  if(checkNotEmpty(this.value)) {
    clearBox();
    showBox();
    var hints = getHints(this.value, cities);
    addElement(hints);
  } else {
    hideBox();
  }
});

/**
 * takes the hints
 * @param {*} value input's value 
 * @param {*} allHints all hints in the array
 */
function getHints(value, allHints) {
  var res = [];
  var normalizedValue = value.toLowerCase();

  res = allHints.filter((city) => {
    var normalizeCity = city.toLowerCase();
    // find position of value in the city
    var valuePos = normalizeCity.indexOf(normalizedValue);
    // value mast start from the beginning of the city
    return valuePos === 0;
  });
  
  return res;
}

function showBox() {
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.classList.add("window-show");
}

function hideBox() {
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.classList.remove("window-show");
}

function addElement(i) {
  var windowElement = document.getElementsByClassName('window')[0];
  // for each city creat new div
  i.map((hint) => {
    var newDiv = document.createElement("div");
    // listen click on the city hint
    newDiv.addEventListener('click', function () {
      giveSearchValue(hint);
    })
    newDiv.innerText= hint;
    // adds new div to the windiw
    windowElement.appendChild(newDiv);
  })
  
}

function clearBox() {
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.innerHTML = '';
}

function giveSearchValue(value) {
  document.getElementById('search').value=value;
}
