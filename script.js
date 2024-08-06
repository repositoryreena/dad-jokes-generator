document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const paragraph = document.getElementById('dadjoke');

    btn.addEventListener('click', async () => {
        paragraph.innerText = 'Updating...';

        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data && data.setup && data.punchline) {
                paragraph.innerText = `${data.setup} ${data.punchline}`;
            } else {
                paragraph.innerText = 'Sorry, I couldn\'t fetch a joke at the moment.';
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
            paragraph.innerText = 'An error happened, try again later.';
        }
    });
});
