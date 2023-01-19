// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission() {
  event.preventDefault();
  let countToInput = parseInt(document.getElementById("countTo").value);
  let countByInput = parseInt(document.getElementById("countBy").value);
  let sum = 0;
  let counter = 0; 
  let numArray = []

  let numResults = countToInput / countByInput;

  while(counter < numResults )
  {
      sum = sum + countByInput;
      numArray.push(sum);
      counter++
  }
   
   console.log(numArray);
  
  document.getElementById("countToSpan").innerText = countTo; 
  document.getElementById("countBySpan").innerText = countBy;

  
  numArray.forEach(function (element) { 
    
  document.getElementById("outputCount").innerText = element;
  
  })



}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});