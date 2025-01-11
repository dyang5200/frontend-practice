import React, { useState } from 'react';
import './accordion.css';

export default function Accordion() {
    return (
        <div>
            <Section title="HTML" content={<div>The HyperText Markup Language or HTML is the
                standard markup language for documents designed to
                be displayed in a web browser.</div>} />
            <Section title="CSS" content={<div>Cascading Style Sheets is a style sheet language
                used for describing the presentation of a document
                written in a markup language such as HTML or XML.</div>} />
            <Section title="JavaScript" content={<div>JavaScript, often abbreviated as JS, is a
                programming language that is one of the core
                technologies of the World Wide Web, alongside HTML
                and CSS.</div>} />
        </div>
    );
}


function Section({ title, content }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <div>
                {title}{" "}
                <button onClick={() => setIsShown(!isShown)}>
                    <span
                        aria-hidden={isShown}
                        className={"accordion-icon" + (isShown ? "" : "--rotated")}
                    />
                </button>
            </div>
            <div>{isShown && content}</div>
        </div>
    );
}