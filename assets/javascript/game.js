// Needs work: 
// Update the computer's guess, as it's only guessing once now
// If you hit the wrong key, it still counts as a loss, but only an alert should pop up


// Array holds the words the computer will "choose" from

var words = ['energy', 'powerclap', 'flare', 'bow', 'ilikethatenergy'];

// Function picks word

var randomizeWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomizeWord);

