document.getElementById('duplicateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const tag = inputText;
    let duplicatedText = '';

    // Create 150 lines, each with the wrapped text
    for (let i = 0; i < 150; i++) {
        duplicatedText += tag + '\n'; // Add a new line after each tag
    }

    // Output the duplicated text to the output textarea
    document.getElementById('outputText').value = duplicatedText;

    // Copy the duplicated text to clipboard
    navigator.clipboard.writeText(duplicatedText).then(function() {
        alert('Text duplicated and copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});