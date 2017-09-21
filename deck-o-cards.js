// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function card(value,name,suit){
      this.value=value;
      this.name=name;
      this.suit=suit;

  }


   function deck() {
      var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      var names = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
      var cards = [];
console.log(suits,names,cards);
          for (var s=0; s< suits.length; s++ ){

            for (var n=0; n < names.length; n++){

              cards.push(new card(n+1, names[n], suits[s]));
            }
          }
        return cards;

    }
    console.log('hiiii');
    var myDeck = new deck();
    console.log(myDeck);
//hIII this all I manage to figure out!:/

    var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"





// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
