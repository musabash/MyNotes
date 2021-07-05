import React, { useEffect, useState, useContext} from 'react'
import { Container } from '@material-ui/core';
import NoteCard from '../components/note-card';
import Masonry from 'react-masonry-css'

export default function Notes() {
  const [notes, setNotes] = useState("")

  const deleteNote = (id) => {
    localStorage.removeItem(id)
    setNotes(notes.filter(e => e.id !== id))
  }

  const getNotes = () => {
    let array = []
    for(let note in localStorage) {
      if (localStorage.hasOwnProperty(note)) {
        note.slice(0,4) === "note" && array.push (JSON.parse(localStorage.getItem(note)))
        setNotes(array)
      }
    }
  }
  useEffect(() => {
    getNotes()
  }, [])

  const breakpoints = {
    default: 4,
    1100: 3,
    850: 2,
    680: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {notes.length !== 0 ? notes.map(note => 
        <div key={notes.id}>
          <NoteCard note={note} deleteNote={deleteNote}/>
        </div>
        ) :
        <div>No notes found.</div>}
        
      </Masonry>
    </Container>
  )
}