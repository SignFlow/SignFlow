function spellMessage() {
    const message = document.getElementById('message').value.trim();
    const handSignalsContainer = document.getElementById('hand-signals');
    handSignalsContainer.innerHTML = ''; // Clear previous hand signals

    if (message) {
        const words = message.split(' ');
        words.forEach((word, index) => {
            // Create a div for each word's hand signal
            const wordDiv = document.createElement('div');
            wordDiv.classList.add('word-container');
            
            // You can replace the following with actual images or animations for hand signals
            const handSignalImage = document.createElement('img');
            handSignalImage.src = `images/${word.toLowerCase()}.png`; // Assuming you have images named after the words
            handSignalImage.alt = `Hand signal for ${word}`;
            wordDiv.appendChild(handSignalImage);

            // Add the word div to the hand signals container
            handSignalsContainer.appendChild(wordDiv);
        });
    } else {
        alert('Please enter a message to spell.');
    }
}