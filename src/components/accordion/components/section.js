import React, { useState } from 'react';
import './section.css';

export default function Section({ title, content }) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            <div>
                {title}{' '}
                <button
                    aria-hidden={isShown}
                    // className={"accordion-icon" + (isShown ? '' : '--rotated')}
                    onClick={() => setIsShown(!isShown)}
                />
            </div>
            <div>
                {isShown && content}
            </div>
        </div>
    );
}
