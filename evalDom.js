// ---------Bloc de code nécéssaire au Menu 1------------------------------------------------

const cells = document.querySelectorAll('.cell');
const displayImage = document.querySelector('#imageTable');
const largeImage = document.querySelector('#afficheImage');

cells.forEach(cell => {
  cell.addEventListener('mouseover', event => {
    displayImage.style.display = 'block';
    largeImage.src = event.target.href;
  });
  cell.addEventListener('mouseout', event => {
    displayImage.style.display = 'none';
    largeImage.src = "";
  });
});

//-------------------------------------------------------------------------------------------

// ---------Bloc de code nécéssaire au Menu 2------------------------------------------------
const field1 = document.getElementById('field1');
const field2 = document.getElementById('field2');
const submitButton = document.getElementById('submit');
const clearButton = document.getElementById('clear');
const dataTable = document.getElementById('dataTable');

submitButton.addEventListener('click', function() {
  const field1Value = field1.value;
  const field2Value = field2.value;
  
  const newRow = dataTable.insertRow(-1);
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  
  cell1.innerHTML = field1Value;
  cell2.innerHTML = field2Value;
});

clearButton.addEventListener('click', function() {
    while (dataTable.rows.length > 1) {
      dataTable.deleteRow(-1);
    }
  });
//-------------------------------------------------------------------------------------------

// ---------Bloc de code nécéssaire au Menu 3------------------------------------------------

const styleSelect = document.getElementById('styleSelect');
const text = document.getElementById('text');

styleSelect.addEventListener('change', function() {
  const style = styleSelect.value;
  text.className = style;
});

//-------------------------------------------------------------------------------------------

// ---------Bloc de code nécéssaire au Menu 4------------------------------------------------

const list = document.getElementById('list');
const upButton = document.getElementById('up');
const downButton = document.getElementById('down');

upButton.addEventListener('click', function() {
  const firstItem = list.firstElementChild;
  list.removeChild(firstItem);
  list.appendChild(firstItem);
});

downButton.addEventListener('click', function() {
  const lastItem = list.lastElementChild;
  list.removeChild(lastItem);
  list.insertBefore(lastItem, list.firstElementChild);
});


//-------------------------------------------------------------------------------------------

// ---------Bloc de code nécéssaire au Menu 5------------------------------------------------


const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const displayDivRadio = document.getElementById('display-div');
const displayDropdownRadio = document.getElementById('display-dropdown');
const displayArea = document.getElementById('display-area');

displayDivRadio.addEventListener('change', function() {
  displayArea.innerHTML = '';
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      const item = document.createElement('p');
      item.textContent = checkbox.nextSibling.textContent;
      displayArea.appendChild(item);
    }
  }
});

displayDropdownRadio.addEventListener('change', function() {
  displayArea.innerHTML = '';
  const select = document.createElement('select');
  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      const option = document.createElement('option');
      option.textContent = checkbox.nextSibling.textContent;
      select.appendChild(option);
    }
  }
  displayArea.appendChild(select);
});

//-------------------------------------------------------------------------------------------

// ---------Bloc de code nécéssaire A l'ouverture et fermeture des onglets.------------------------------------------------

function toggleElements(evt,onglet) {

    let tablinks;

    if (document.getElementById(onglet).style.display == "flex") {
        document.getElementById(onglet).style.display = "none";
        evt.currentTarget.classList.toggle("active");        

    }else{
        tablinks = document.getElementsByClassName("tablinks");
        // document.getElementById(onglet).className.replace (" active", "");
    document.getElementById(onglet).style.display = "flex";
    evt.currentTarget.classList.toggle("active");    
    }

    if (!(document.getElementById("menuGlobal").classList.contains("active"))){
      console.log("Menu Glo fermé")
      document.getElementById("onglet1").classList.remove("active");
      document.getElementById("menu1").style.display= "none";
      document.getElementById("onglet2").classList.remove("active");
      document.getElementById("menu2").style.display= "none";;
      document.getElementById("onglet3").classList.remove("active");
      document.getElementById("menu3").style.display= "none";;
      document.getElementById("onglet4").classList.remove("active");
      document.getElementById("menu4").style.display= "none";;
      document.getElementById("onglet5").classList.remove("active");
      document.getElementById("menu5").style.display= "none";;
    }
  }