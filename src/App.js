import React, { useState } from 'react';
import './App.css';

import Accordion from './components/accordion/accordion';
import ContactForm from './components/contact-form/ContactForm';
import StarRating from './components/star-rating/StarRating';

export default function App() {
    return (
        <div>
            {/* <Accordion /> */}
            <StarRating maxStars={5} currentRating={2} />
        </div>
    );
}
