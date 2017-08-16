import React from 'react';

const Notes = (props) => {
    const { notes } = props;
    return (
        <div>
            <h3 className="singleName-headings">Notes</h3>
            {notes.map((note, idx) => (
                <div key={idx}>
                    <span> &#x25AC;</span>
                    <span> {note.text} </span>
                </div>
            ))}
        </div>
    )
}

export default Notes;
