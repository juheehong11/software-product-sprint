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

  
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);

async function fetchPokemon() {
    const serverResponse = await fetch('/hello');
    const responseText = await serverResponse.text();
  
    const pokemon = document.getElementById('pokemon-container');
    pokemon.innerText = responseText;
}
  