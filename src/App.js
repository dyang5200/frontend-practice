import React, { useState } from 'react';
import './App.css';

import Accordion from './components/accordion/accordion';
import ContactForm from './components/contact-form/ContactForm';
import StarRating from './components/star-rating/StarRating';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import NestedComments from './components/nested-comments/NestedComments';
import ToDoList from './components/to-do/ToDoList';
import AutoComplete from './components/auto-complete/AutoComplete';
import Timer from './components/timer/Timer';

import { countriesList } from "./components/auto-complete/countries";
import Tabs, { Tab } from './components/tabs/Tabs';

export default function App() {
    return (
        <div>
            {/* <Accordion /> */}
            {/* <StarRating maxStars={5} currentRating={2} /> */}
            {/* <TicTacToe /> */}
            {/* <NestedComments /> */}
            {/* <ToDoList /> */}
            {/* <AutoComplete countriesList={countriesList} /> */}
            {/* <Timer /> */}
            <Tabs>
                <Tab title="First tab">
                    <div>
                        <h2> First Content </h2>
                        <StarRating maxStars={5} currentRating={2} />
                    </div>
                </Tab>
                <Tab title="Second tab">
                    <div>
                        <h2> Second Content </h2>
                        <TicTacToe />
                    </div>
                </Tab>
                <Tab title="Third tab">
                    <div>
                        <h2> Third Content </h2>
                        <ToDoList />
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}
