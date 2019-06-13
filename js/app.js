'use strict';

//Global variable - time
var times = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var hourTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var listOfAllStores = [];

//Windows into the DOM
var tableBody = document.getElementById('tableBody');
var tableFooter = document.getElementById('tableFooter');


console.log(listOfAllStores);

//This is the constructor function to create store instances
function Stores(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.avgCookiesPerHourArray = [];
  this.sumCookies = 0;
  listOfAllStores.push(this);

}

Stores.prototype.randomCustsPerHour = function (min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Stores.prototype.avgCookiesPerHour = function () {
  for (var i = 0; i < times.length; i++) {
    var calculatedCookies = Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
    this.avgCookiesPerHourArray.push(calculatedCookies);
    this.sumCookies += calculatedCookies;
    hourTotals[i] += this.sumCookies;
  }
};

Stores.prototype.renderRow = function () {
  this.avgCookiesPerHour();
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);
  for (var i = 0; i < times.length; i++) {
    var td = document.createElement('td');
    td.textContent = this.avgCookiesPerHourArray[i];
    tableRow.appendChild(td);
  }

  tableBody.appendChild(tableRow);
  var tdTotal = document.createElement('td');
  tdTotal.textContent = this.sumCookies;
  tableRow.appendChild(tdTotal);

};

function renderAll () {
  for (var i = 0; i < listOfAllStores.length; i++) {
    listOfAllStores[i].renderRow();
  }
}

function createHeader () {
  var tableHeader = document.getElementById('tableHeader');
  var tableRow = document.createElement('tr');

  //This is creating the first empty cell of the header
  var firstColumn = document.createElement('th');
  firstColumn.textContent = '';
  tableRow.appendChild(firstColumn);

  //This is creating the "times" cells in the header row between the blank cell and the "Daily Stores Totals" cell
  for (var i = 0; i < times.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = times[i];
    tableRow.appendChild(tableHead);
  }

  //This is creating the last cell in the header with "Total" in it
  var lastColumn = document.createElement('th');
  lastColumn.textContent = 'Daily Stores Totals';
  tableRow.appendChild(lastColumn);

  tableHeader.appendChild(tableRow);
}

//This is creating the footer row of the table
function createFooter () {
  console.log('hour totals',hourTotals);
  var tableRow = document.createElement('tr');

  //This is creating the first cell of the footer "Total"
  var firstCellFooter = document.createElement('td');
  firstCellFooter.textContent = 'Total';
  tableRow.appendChild(firstCellFooter);

  //This is creating the sum total of cookies for each hour
  for (var i = 0; i < hourTotals.length; i++) {
    var tableFoot = document.createElement('td');
    tableFoot.textContent = hourTotals[i];
    tableRow.appendChild(tableFoot);
  }

  //This is creating the final totals cell
  var lastCellFooter = document.createElement('td');
  var sum = 0;

  for (var k = 0; k < hourTotals.length; k++) {
    sum += hourTotals[k];
  }
  lastCellFooter.textContent = sum;
  tableRow.appendChild(lastCellFooter);


  tableFooter.appendChild(tableRow);

}



new Stores ('1st & Pike', 23 , 65, 6.3);
new Stores ('SeaTac Airport', 3, 24, 1.2);
new Stores ('Seattle Center', 11, 38, 3.7);
new Stores ('Capitol Hill', 20, 38, 2.3);
new Stores ('Alki', 2, 16, 4.6);

// Pike.renderRow();
// SeaTac.renderRow();
// SeattleCenter.renderRow();
// CapitolHill.renderRow();
// Alki.renderRow();
renderAll();

createHeader();
createFooter();
console.log(hourTotals);

//This creates the form for new store data

var newStoreDataForm = document.getElementById('new-store-form');
function addNewStore(event) {
  event.preventDefault();
  var newName = event.target.name.value;
  var newMin = parseInt(event.target.min.value);
  var newMax = parseInt(event.target.max.value);
  var newAvgCookies = parseInt(event.target.avgcookies.value);

  //Instantiate new store object
  new Stores (newName,newMin,newMax,newAvgCookies);

  //Clear the table body before re-rendering stores
  tableBody.innerHTML = '';

  //Clear hourTotals for footer calculation
  hourTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  //Clear the table footer before re-rendering table footer
  tableFooter.innerHTML = '';


  //Re-render with new store data
  renderAll();
  createFooter();
}




newStoreDataForm.addEventListener('submit', addNewStore);
