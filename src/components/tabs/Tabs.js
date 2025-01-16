import React, { useState } from "react";
import './styles.css';

/**
 *            
 * Outline
    <Tabs>
        <Tab title="First tab">
            <div>
                <h2> First Content </h2>
            </div>
        </Tab>
        <Tab title="Second tab">
            <div>
                <h2> Second Content </h2>
                <TicTacToe />
            </div>
        </Tab>
    </Tabs>
 */

// Children is a list of <Tab> components
// Each child has a title and it's own children (same props as <Tab>)
export default function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);
    console.log(children);

    return (
        <div>
            <div className="tab-bar">
                {children.map((child, index) => {
                    return (
                        <div className="tab" onClick={() => setActiveTab(index)}>
                            {child.props.title}
                        </div>
                    )
                })}
            </div>

            <div className="content">
                {children[activeTab]}
            </div>
        </div>
    );
}

export function Tab({ title, children }) {
    return (
        <div>{children}</div>
    )
}