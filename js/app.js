'use strict';

//Global variable - time
var times = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var hourTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var listOfAllStores = [];
console.log(listOfAllStores);
function Stores(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.avgCookiesPerHourArray = [];
  this.sumCookies = 0;
  listOfAllStores.push(this);

  Stores.avgCookiesPerHour(this);
}

Stores.prototype.randomCustsPerHour = function (min,max) {
  return Math.floor(Math.random() *
    (max - min + 1)) + min;
};

Stores.avgCookiesPerHour = function (StoresObject) {
  for (var i = 0; i < times.length; i++) {
    var calculatedCookies = Math.ceil(StoresObject.randomCustsPerHour(StoresObject.min,StoresObject.max) * StoresObject.avgCookies);
    StoresObject.avgCookiesPerHourArray.push(calculatedCookies);
    StoresObject.sumCookies += calculatedCookies;
    hourTotals[i] += StoresObject.sumCookies;
  }
};

Stores.prototype.renderRow = function () {
  var tableBody = document.getElementById('tableBody');
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

function createFooter () {
  console.log('hour totals',hourTotals);
  var tableFooter = document.getElementById('tableFooter');
  var tableRow = document.createElement('tr');

  var firstCellFooter = document.createElement('td');
  firstCellFooter.textContent = 'Total';
  tableRow.appendChild(firstCellFooter);

  for (var i = 0; i < hourTotals.length; i++) {
    var tableFoot = document.createElement('td');
    tableFoot.textContent = hourTotals[i];
    tableRow.appendChild(tableFoot);
  }

  var lastCellFooter = document.createElement('td');
  
  var sum = 0;
  for (var k = 0; k < hourTotals.length; k++) {
    sum += hourTotals[k];
  }
  lastCellFooter.textContent = sum;
  tableRow.appendChild(lastCellFooter);


  tableFooter.appendChild(tableRow);

}



var Pike = new Stores ('1st & Pike', 23 , 65, 6.3);
var SeaTac = new Stores ('SeaTac Airport', 3, 24, 1.2);
var SeattleCenter= new Stores ('Seattle Center', 11, 38, 3.7);
var CapitolHill = new Stores ('Capitol Hill', 20, 38, 2.3);
var Alki = new Stores ('Alki', 2, 16, 4.6);

Pike.renderRow();
SeaTac.renderRow();
SeattleCenter.renderRow();
CapitolHill.renderRow();
Alki.renderRow();

createHeader();
createFooter();
console.log(hourTotals);


