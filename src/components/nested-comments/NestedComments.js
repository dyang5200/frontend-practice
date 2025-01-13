import React, { useState } from "react";
import './styles.css';

const commentInterface = {
    user: "",
    content: "",

}

export default function NestedComments() {
    const [comments, setComments] = useState([]);

    return (
        <div>
            <Comment />
        </div>
    )
}

export function Comment({ childComment }) {
    const [content, setContent] = useState("Empty content");
    const [editMode, setEditMode] = useState(false);

    // Array of comment objects that are replies to the original comment
    const [replies, setReplies] = useState([]);

    return (
        <div>
            <div className="comment">
                <div className="comment-item"> <b> Username </b></div>
                {!editMode ? (
                    <div className="comment-item"> {content} </div>
                ) : (
                    <form className="comment-item">
                        <input type="text" placeholder={content} onChange={(e) => setContent(e.target.value)} />
                    </form>
                )}

                <div className="comment-item">
                    <button> Reply </button>
                    <button onClick={() => setEditMode(!editMode)}> {!editMode ? "Edit" : "Submit"}</button>
                    <button> Delete </button>
                </div>
            </div>
        </div>
    )
}