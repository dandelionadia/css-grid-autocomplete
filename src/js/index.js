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
    removeElement();
    showBox();
    var hints = getHints(this.value, cities);
    addElement(hints);
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
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.classList.add("window-show");
}

function hideBox() {
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.classList.remove("window-show");
}

function addElement(i) {
  var windowElement = document.getElementsByClassName('window')[0];
  i.map((hint) => {
    var newDiv = document.createElement("div");
    newDiv.addEventListener('click', function (evt) {
      console.log('click');
      clickOnTheValueFilsInput(hint);
    })
    newDiv.innerText= hint;
    windowElement.appendChild(newDiv);
  })
  
}

function removeElement() {
  var windowElement = document.getElementsByClassName('window')[0];
  windowElement.innerHTML = '';
}

function clickOnTheValueFilsInput(i) {
  document.getElementById('search').value=i;
}
