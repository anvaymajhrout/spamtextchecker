document.getElementById('check').addEventListener('click', checkSpam);

function checkSpam() {
    const text = document.getElementById('textInput').value;
    const apiKey = 'plsentertheapikeyhere'; 
    const url = `https://api.spamcheck.com/check?text=${encodeURIComponent(text)}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultCard = document.getElementById('resultCard');
            if (data.spam) {
                resultCard.textContent = `Result: The text is ${data.spamScore}% spam.`;
            } else {
                resultCard.textContent = 'Result: The text is not spam.';
            }
        })
        .catch(error => {
            console.error('Error fetching the spam check data:', error);
            const resultCard = document.getElementById('resultCard');
            resultCard.textContent = 'Error fetching the data';
        });
}
