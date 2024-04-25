import React, { useState } from 'react';
import '../styles.css';


export default function RandomJoke() {
    const [pun, setPun] = useState('');

    const generatePun = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch pun');
                }
                return response.json();
            })
            .then(data => {
                setPun(data.joke);
            })
            .catch(error => {
                console.error('Error fetching pun:', error);
                setPun('Oops! Failed to fetch pun.');
            });
    };

    return (
        <div className="container">
            <div className="box">
                <h1>Joke Box</h1>
                <button onClick={generatePun}>Generate Joke</button>
                {pun && <p>{pun}</p>}
            </div>
        </div>
    );
}

