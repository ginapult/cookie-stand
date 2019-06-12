'use strict';

//Global variable - time
var times = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Location(name, min, max, avgCookies) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.avgCookiesPerHourArray = [];
  this.sumCookies = 0;
  Location.list.push(this);

  Location.avgCookiesPerHour(this);
}
Location.list = [];

Location.prototype.randomCustsPerHour = function (min,max) {
  return Math.floor(Math.random() *
    (max - min + 1)) + min;
};

Location.avgCookiesPerHour = function (locationObject) {
  for (var i = 0; i < times.length; i++) {
    var calculatedCookies = Math.ceil(locationObject.randomCustsPerHour(locationObject.min,locationObject.max) * locationObject.avgCookies);
    locationObject.avgCookiesPerHourArray.push(calculatedCookies);
    locationObject.sumCookies += calculatedCookies;
  }
};

function renderTable() {

//This section is building the header row of the table

  // Location.prototype.render = function () {
  var tableHeader = document.getElementById('tableHeader');
  var tableBody = document.getElementById('tableBody');
  var tableFooter = document.getElementById('tableFooter');
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');

  //This is creating the first empty cell of the header
  var firstColumn = document.createElement('th');
  firstColumn.textContent = '';
  tableRow.appendChild(firstColumn);

  //This is creating the "times" cells in the header row between the blank cell and the "Total" cell
  for (var i = 0; i < times.length; i++) {
    var tableHead = document.createElement('th');
    tableHead.textContent = times[i];
    tableRow.appendChild(tableHead);
  }
  //This is creating the last cell in the header with "Total" in it
  var lastColumn = document.createElement('th');
  lastColumn.textContent = 'Total';
  tableRow.appendChild(lastColumn);
 
  tableHeader.appendChild(tableRow);

//This section is building the body of the table

  for (i = 0; i < Location.list.length; i++) {
    tableRow = document.createElement('tr');
    var storeName = document.createElement('td');
    storeName.textContent = Location.list[i].name;
    tableRow.appendChild(storeName);

    for (var t = 0; t < times.length; t++) {
      var timeCookies = document.createElement('td');
      timeCookies.textContent = Location.list[i].avgCookiesPerHourArray[t];
      tableRow.appendChild(timeCookies);
    }
    tableBody.appendChild(tableRow);
  }
}

new Location ('1st & Pike', 23 , 65, 6.3);
new Location ('SeaTac Airport', 3, 24, 1.2);
new Location ('Seattle Center', 11, 38, 3.7);
new Location ('Capitol Hill', 20, 38, 2.3);
new Location ('Alki', 2, 16, 4.6);

renderTable();
