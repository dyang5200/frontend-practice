import React, { useState } from 'react';
import './App.css';

import Accordion from './components/accordion/accordion';
import ContactForm from './components/contact-form/ContactForm';
import StarRating from './components/star-rating/StarRating';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import NestedComments from './components/nested-comments/NestedComments';
import ToDoList from './components/to-do/ToDoList';
import AutoComplete from './components/auto-complete/AutoComplete';

import { countriesList } from "./components/auto-complete/countries";

export default function App() {
    return (
        <div>
            {/* <Accordion /> */}
            {/* <StarRating maxStars={5} currentRating={2} /> */}
            {/* <TicTacToe /> */}
            {/* <NestedComments /> */}
            {/* <ToDoList /> */}
            <AutoComplete countriesList={countriesList} />
        </div>
    );
}
