'use strict';

//Global variable - time
var times = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


//Var location 1st & Pike
var firstAndPike = {
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
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
firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

