import React, { useEffect, useState, useContext} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Card from '../components/Card';

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    for(let note in localStorage) {
      localStorage.hasOwnProperty(note) && setNotes(prev => [...prev, JSON.parse(localStorage.getItem(note))])
    }
  }, [])

  return (
    <Container>
      <Grid container>
      {notes && notes.map(note => 
        <Grid item xs={12} sm={6} md={3} >
          <Card note={note}/>
        </Grid>
      )}
      </Grid>
    </Container>
    
  )
}
