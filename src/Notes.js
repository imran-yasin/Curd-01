import React from "react";
import { useEffect, useState } from "react";
function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000");
    then((res) => res.json()).then((data) => setNotes(data));
  }, []);

  return (
    <div>
      {notes.map((notes) => {
        <p key={notes.id}> {notes.title}</p>;
      })}
    </div>
  );
}

export default Notes;
