// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
    const quotes =
        ['A rock pile ceases to be a rock pile the moment a single man contemplates it, bearing within him the image of a cathedral.', 
        'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.', 
        'All we have to decide is what to do with the time that is given us.', 
        'Go where you must go, and hope!',
        "I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
        "What makes the desert beautiful is that somewhere it hides a well.",
        "You never walk alone.",
        ];
  
    // Pick a random greeting.
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;
}

  // Translates the About blurb into one of the languages selected from the drop-down menu. 
  //Shows translated blurb and hides original blurb automatically.
function translateAbout() {
    const original = document.getElementById("about-me-par");
    const paragraph = original.innerText;
    const language = document.getElementById("language").value;

    const resultContainer = document.getElementById("translate-container");
    resultContainer.style.display = "block";
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('par', paragraph);
    params.append('lc', language);

    fetch('/translateabout', {
        method: 'POST',
        body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
        resultContainer.innerText = translatedMessage;
    });

    original.style.display = "none";
}

  //Shows the original (English) About blurb and hides the translated blurb
function showOriginalAbout() {
    const original = document.getElementById("about-me-par");
    original.style.display = "block";
    const translated = document.getElementById("translate-container");
    translated.style.display = "none";
}

// takes the inputted recommendation from the submitted book rec form and shows it on the webpage
function bookRecommendation() {
    const book_rec = document.getElementById("input_book_rec").value;
    const resultContainer = document.getElementById("show_recommended");
    resultContainer.style.display = "block";
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text-input', book_rec);

    fetch('/book-recommender', {
        method: 'POST',
        body: params
    }).then(response => response.text())
    .then((recommendation) => {
        resultContainer.innerText = "You recommended: " + recommendation;
    });
}

// displays "thank you" message to webpage once book rec form's submit btn is clicked
function bookRecommendationThxMsg() {
    const thankyou = document.getElementById('thanks');
    thankyou.innerText = "Thank you!"
}


/* function that sets up the photography slideshow*/
var counter = 1; //counter of radio/image
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;  // select #counter-th radio/image to display in the slideshow
    counter++; 
    if(counter > 4){ // if at the end of slideshow (i.e. #4th image), go back to #1st image so it keeps the slideshow in a loop.
        counter = 1;
    }
}, 5000); // duration for how long each image will be shown in the slideshow

//fetches a list of pokemons I like from PokemonServlet, and randomly selects one
async function fetchPokemon() {
    const pokemon = document.getElementById('pokemon-container');
    pokemon.innerHTML = 'I choose you... ';
    const serverResponse = await fetch('/pokemon');
    const responseText = await serverResponse.json();
    console.log(responseText)
    let poke = responseText[Math.floor(Math.random()*responseText.length)];
    pokemon.innerHTML = poke + "!";
}

/*
from weekly tutorials; kept as a comment for possible future reference
async function getServerStats() {
    const responseFromServer = await fetch('/server-stats');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();
  
    const statsListElement = document.getElementById('server-stats-container');
    statsListElement.innerHTML = '';
  
    statsListElement.appendChild(
        createListElement('Start time: ' + stats.startTime));
    statsListElement.appendChild(
        createListElement('Current time: ' + stats.currentTime));
    statsListElement.appendChild(
        createListElement('Max memory: ' + stats.maxMemory));
    statsListElement.appendChild(
        createListElement('Used memory: ' + stats.usedMemory));
}*/