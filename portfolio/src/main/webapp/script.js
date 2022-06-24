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

  function translateAbout() {
    const par = document.getElementById("about-me-par").innerText;
    const lc = document.getElementById("language").value;

    const resultContainer = document.getElementById("translate-container");
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('par', par);
    params.append('lc', lc);

    fetch('/translateabout', {
        method: 'POST',
        body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
        resultContainer.innerText = translatedMessage;
    });
  }

  function bookrec() {
      const thankyou = document.getElementById('thanks');
      thankyou.innerText = "Thank you!"
  }


// for the photography slides 
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

//fetches a list of pokemons I like from PokemonServlet, and randomly selects one
async function fetchPokemon() {
    const serverResponse = await fetch('/pokemon');
    const responseText = await serverResponse.json();
    const pokemon = document.getElementById('pokemon-container');
    pokemon.innerHTML = 'Loading...';
    console.log(responseText)
    let poke = responseText[Math.floor(Math.random()*responseText.length)];
    pokemon.innerHTML = poke;
}

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
  }