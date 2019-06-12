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
  var tableBody = document.getElementById('sales-table');
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
  tableBody.appendChild(tableRow);

//This section is building the inner rows of the table

  //This is creating the cells in the first column of the table body 
  var firstColumnSecondRow = document.createElement('tr');
  firstColumnSecondRow.textContent = location.list[i];
  tableRow.appendChild(firstColumn);


  cell.textContent = this.name;
  tableRow.appendChild(cell);
  cell = document.createElement('td');

  cell.textContent = this.min;
  tableRow.appendChild(cell);
  cell = document.createElement('td');

  cell.textContent = this.max;
  tableRow.appendChild(cell);
  cell = document.createElement('td');

  cell.textContent = this.avgCookies;
  tableRow.appendChild(cell);
  cell = document.createElement('td');

  tableBody.appendChild(tableRow);
}
renderTable();

var pike = new Location ('1st & Pike', 23 , 65, 6.3);
console.log(pike);
new Location ('SeaTac Airport', 3, 24, 1.2);
new Location ('Seattle Center', 11, 38, 3.7);
new Location ('Capitol Hill', 20, 38, 2.3);
new Location ('Alki', 2, 16, 4.6);

console.log (Location.list);

// for (var i = 0; i < Location.list.length; i++) {
//   Location.list[i].render();
// }

// console.log(Location.list);

//--------
//Var location 1st & Pike
var firstAndPike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  sumCookies: 0,

  randomCustsPerHour: function (min,max) {
    return Math.floor(Math.random() * 
      ((max - min)) + 1);
  },

  avgCookiesPerHour: function () {
    return Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
  },

  render: function () {

    var divElement = document.getElementById('store-name');
    var h2Element = document.createElement('h2');
    divElement.appendChild(h2Element);
    h2Element.textContent = `${this.name}`;
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    for (let i = 0; i < times.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${times[i]}: ${this.avgCookiesPerHour()} cookies`;
      ulElement.appendChild(liElement);
      this.sumCookies=this.sumCookies + this.avgCookiesPerHour();
    }

    var liElementSum = document.createElement('li');
    liElementSum.textContent = `Total: ${this.sumCookies} cookies`;
    ulElement.appendChild(liElementSum);

  }
};


//Var location SeaTac Airport
var seaTacAirport = {
  name: 'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  sumCookies: 0,

  randomCustsPerHour: function (min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  
  avgCookiesPerHour: function () {
    return Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
  },

  render: function () {

    var divElement = document.getElementById('store-name');
    var h2Element = document.createElement('h2');
    divElement.appendChild(h2Element);
    h2Element.textContent = `${this.name}`;
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    for (let i = 0; i < times.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${times[i]}: ${this.avgCookiesPerHour()} cookies`;
      ulElement.appendChild(liElement);
      this.sumCookies=this.sumCookies + this.avgCookiesPerHour();
    }

    var liElementSum = document.createElement('li');
    liElementSum.textContent = `Total: ${this.sumCookies} cookies`;
    ulElement.appendChild(liElementSum);

  }
};


//Var location Seattle Center
var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  sumCookies: 0,

  randomCustsPerHour: function (min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  
  avgCookiesPerHour: function () {
    return Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
  },

  render: function () {

    var divElement = document.getElementById('store-name');
    var h2Element = document.createElement('h2');
    divElement.appendChild(h2Element);
    h2Element.textContent = `${this.name}`;
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    for (let i = 0; i < times.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${times[i]}: ${this.avgCookiesPerHour()} cookies`;
      ulElement.appendChild(liElement);
      this.sumCookies=this.sumCookies + this.avgCookiesPerHour();
    }

    var liElementSum = document.createElement('li');
    liElementSum.textContent = `Total: ${this.sumCookies} cookies`;
    ulElement.appendChild(liElementSum);

  }
};


//Var location Capitol Hill
var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  sumCookies: 0,

  randomCustsPerHour: function (min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  
  avgCookiesPerHour: function () {
    return Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
  },

  render: function () {

    var divElement = document.getElementById('store-name');
    var h2Element = document.createElement('h2');
    divElement.appendChild(h2Element);
    h2Element.textContent = `${this.name}`;
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    for (let i = 0; i < times.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${times[i]}: ${this.avgCookiesPerHour()} cookies`;
      ulElement.appendChild(liElement);
      this.sumCookies=this.sumCookies + this.avgCookiesPerHour();
    }

    var liElementSum = document.createElement('li');
    liElementSum.textContent = `Total: ${this.sumCookies} cookies`;
    ulElement.appendChild(liElementSum);

  }
};


//Var location Alki
var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  sumCookies: 0,

  randomCustsPerHour: function (min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  
  avgCookiesPerHour: function () {
    return Math.ceil(this.randomCustsPerHour(this.min,this.max) * this.avgCookies);
  },

  render: function () {

    var divElement = document.getElementById('store-name');
    var h2Element = document.createElement('h2');
    divElement.appendChild(h2Element);
    h2Element.textContent = `${this.name}`;
    var ulElement = document.createElement('ul');
    divElement.appendChild(ulElement);

    for (let i = 0; i < times.length; i++) {
      var liElement = document.createElement('li');
      liElement.textContent = `${times[i]}: ${this.avgCookiesPerHour()} cookies`;
      ulElement.appendChild(liElement);
      this.sumCookies=this.sumCookies + this.avgCookiesPerHour();
    }

    var liElementSum = document.createElement('li');
    liElementSum.textContent = `Total: ${this.sumCookies} cookies`;
    ulElement.appendChild(liElementSum);

  }
};


//Initialize function calls
// firstAndPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();

