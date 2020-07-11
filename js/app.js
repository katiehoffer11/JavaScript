// from data.js
var UFOData = data;

//
var table = d3.select("table")
var tbody = d3.select("tbody")

// Create table with all UFO data
UFOData.forEach((UFOReport) => {
    var row = tbody.append("tr");

    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



// Create event handlers 
var button = d3.select("#filter-btn");
button.on("click", runFilter);
  

// Complete the event handler function for the form
function runFilter() {

   // Select the input element and get the raw HTML node   
    var inputDateElement = d3.select("#date");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");

    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value").toLowerCase();
    var inputStateValue = inputStateElement.property("value").toLowerCase();
    var inputCountryValue = inputCountryElement.property("value").toLowerCase();
    var inputShapeValue = inputShapeElement.property("value").toLowerCase();
  
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);
  
    var filteredData = UFOData;
        
    if (inputDateValue.length > 0) {
        filteredData = UFOData.filter(UFO => UFO.datetime == inputDateValue);
    }
    console.log(filteredData);
    if (inputCityValue.length > 0) {
        filteredData = filteredData.filter(UFO => UFO.city == inputCityValue);
    }
    console.log(filteredData);
    if (inputStateValue.length > 0) {
        filteredData = filteredData.filter(UFO => UFO.state == inputStateValue);
    }
    console.log(filteredData);
    if (inputCountryValue.length > 0) {
        filteredData = filteredData.filter(UFO => UFO.country == inputCountryValue);
    }
    console.log(filteredData);
    if (inputShapeValue.length > 0) {
        filteredData = filteredData.filter(UFO => UFO.shape == inputShapeValue);
    }

    console.log(filteredData);
  
    // Generate a table
  
    // Get a reference to the table body
    var tbody = d3.select("#ufo-table").select("tbody");
    tbody.html("");
    
    // BONUS: Refactor to use Arrow Functions!
    filteredData.forEach((UFO) => {
      var row = tbody.append("tr");
      Object.entries(UFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });

  }


