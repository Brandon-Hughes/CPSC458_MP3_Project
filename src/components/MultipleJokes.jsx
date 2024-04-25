import React, { useState } from 'react';
import '../styles.css';

export default function MultipleJokes() {
    const [allPuns, setAllPuns] = useState([]);
    const [showAllPuns, setShowAllPuns] = useState(false);

    const displayAllPuns = () => {
        const randomPage = Math.floor(Math.random() * 37) + 1; // Generate random page number between 1 and 10
        const url = `https://icanhazdadjoke.com/search?term=&page=${randomPage}`;

        fetch(url, {
            headers: { Accept: 'application/json' },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch puns');
                }
                return response.json();
            })
            .then(data => {
                setAllPuns(data.results.map(result => result.joke));
                setShowAllPuns(true);
            })
            .catch(error => {
                console.error('Error fetching puns:', error);
                setAllPuns(['Oops! Failed to fetch puns.']);
            });
    };

    const toggleShowAllPuns = () => {
        setShowAllPuns(!showAllPuns);
    };

    return (
        <div className="container">
            <div className="box">
                {showAllPuns ? (
                    <>
                        <button onClick={toggleShowAllPuns}>Hide More Jokes</button>
                        <ol>
                            {allPuns.map((pun, index) => (
                                <li key={index}>{pun}</li>
                            ))}
                        </ol>
                        <button onClick={displayAllPuns}>Randomize</button>
                    </>
                ) : <button onClick={displayAllPuns}>Show More Jokes</button>}
            </div>
        </div>
    );
}