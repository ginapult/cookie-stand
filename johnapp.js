'use strict';

// Declare a global array of the hours
var hours = [
  '6am', '7am'
]

// Identify DOM elements
  // thead so I can put the hours in
  var thead = document.getElementsByTagName ('thead')[0];
  // tbody so I can put the locations in
  var tbody = document.getElementsByTagName ('tbody')[0];
  // tfoot so I can put the totals in
  var tfoot = document.getElementsByTagName ('tfoot')[0];
  // Check these three in the console and see what comes up

//Location constructor




// Create instances of the stores with their data



// Render stuff out
//addElement ('tr', 'th', '10am');
function addElement(parent,element,content) {
  var newElement = document.createElement(element);
  var textElement = document.createTextNode(content); //This is like doing the textContent thing
  newElement.appendChild(textElement);
  parent.appendChild(newElement);
  return newElement;
}
  //Render out header
  function renderHeader() {
    //Add the tr to the head
    var tr = addElement(thead, 'tr', '');
    for (var i = 0; i<hours.length; i++) {
      //add a th for each hour
      addElement(tr, 'th', hours[i]);
    }
    addElement (tr, 'th' , 'Totals');
    thead.appendChild(tr);
  }

  //Render out footer
  function renderFooter() {

  }

  // Do all the things...
  renderHeader();