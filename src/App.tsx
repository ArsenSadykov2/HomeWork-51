import React, { useState } from 'react';
import './App.css';
import Ball from "./Numbers.tsx";

const App: React.FC = () => {
    const firstNumbers = [5, 11, 16, 23, 32];
    const [numbers, setNumbers] = useState<number[]>(firstNumbers);

    const arrayOfNumbers = (arr: number[]): number[] => {
        const listOfNumbers = [...arr];
        for (let i = listOfNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [listOfNumbers[i], listOfNumbers[j]] = [listOfNumbers[j], listOfNumbers[i]];
        }
        return listOfNumbers;
    };

    const randomNumbers = () => {
        const numbersArray: number[] = [];
        for (let i = 5; i <= 36; i++) {
            numbersArray.push(i);
        }
        const shuffledNumbers = arrayOfNumbers(numbersArray);
        const newNumbers = shuffledNumbers.slice(0, 5).sort((a, b) => a - b);

        setNumbers(newNumbers);
    };

    return (
        <div className="container">
            <h1>Лотерея</h1>
            <div className="balls">
                {numbers.map((number) => (
                    <Ball key={number} number={number} />
                ))}
            </div>
            <button onClick={randomNumbers}>New Numbers</button>
        </div>
    );
};

export default App;
