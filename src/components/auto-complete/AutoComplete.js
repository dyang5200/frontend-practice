import React, { useState } from "react";
import './styles.css';

// In real life, this countriesList will probably be an API call for a given query and we don't have to manually handle this

const NUM_SUGGESTIONS = 3;

/*
 * Questions to ask
 *   - What types of results should we support? (Text, image?) 
 *   - What types of queries should we support? (Text, image?)
 *   - Should the queries be case-sensitive? (No)
 *   - Should we support fuzzy search? 
 *     (Showing the closest search results when the user has made a typo)
 *   * Should it show suggestions based on if the countries start with 
 *     the user's query, or if it contains the user's query?
 *     ie: "M" shows "Mexico" vs. "x" shows "Mexico"
 *   - Do we need to handle the backspace or the delete case?
 * 
 *   - How many suggestions should we show? 
 *   - How should we prioritize which suggestions to show when there are more than 3? (Alphabetically?)
 * 
 *     This code for showing results that contain query:
 *     const filteredSuggestions = countriesList.filter((country) => country.toLowerCase().includes(userInput.toLowerCase()))
 */

// TODO: Handle backspace and delete cases
// Stack that keeps track of all lists of suggestions?

export default function AutoComplete({ countriesList }) {
    const [suggestions, setSuggestions] = useState(countriesList);
    const [query, setQuery] = useState('');

    const handleUserInput = (e) => {
        const userInput = e.target.value;

        // Capitalize first letter and lowercase the rest
        const formattedUserInput = userInput.slice(0, 1).toUpperCase() + userInput.slice(1).toLowerCase();
        setQuery(userInput);

        // Return all suggestions that begin with userInput
        const newSuggestions = suggestions.filter((suggestion) => suggestion.slice(0, formattedUserInput.length) === formattedUserInput);
        setSuggestions(newSuggestions);
    }

    return (
        <div className="autocomplete">
            <input className="search-bar" placeholder="Search for a country" type="text" onChange={(e) => handleUserInput(e)} />

            {query && (
                <ul className="suggestions">
                    {suggestions.slice(0, NUM_SUGGESTIONS).map((suggestion, index) => {
                        return (
                            <li key={index} className={"suggestion"}> {suggestion} </li>
                        );
                    })}
                </ul>
            )}
        </div>
    )
}