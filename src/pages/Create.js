import React, { useState } from 'react'
import {Typography, Button, makeStyles} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import NoteAddIcon from '@material-ui/icons/NoteAddOutlined';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [radioSelected, setRadioSelected] = useState("")
  const [otherRadio, setOtherRadio] = useState("")
  const classes = useStyles()
  const history = useHistory()
  const [touched, setTouched] = useState({note:false, title:false})

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (title && note) {
      let obj = {
        id: Date.now(),
        title,
        note,
        category: radioSelected
      }
      localStorage.setItem(obj.id, JSON.stringify(obj))
      history.push('/')
    } 
  }
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        align="center"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit} >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          label="Title"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          className={classes.field}
          value={title}
          onBlur={() => setTouched(prev => ({...prev, title:true}))}
          error={title === '' && touched.title}
        />
        <TextField
          onChange={(e) => setNote(e.target.value)}
          id="note"
          label="Note"
          variant="outlined"
          color="secondary"
          required
          fullWidth
          multiline
          rows={5}
          className={classes.field}
          value={note}
          onBlur={() => setTouched(prev => ({...prev, note:true}))}
          error={note === '' && touched.note}
        />
        <FormControl className={classes.field}>
          <FormLabel color="secondary">Note Category</FormLabel>
          <RadioGroup onChange={(e) => setRadioSelected(e.target.value)}>
            <FormControlLabel value="Money" control={<Radio/>} label="Money"/>
            <FormControlLabel value="Work" control={<Radio/>} label="Work" />
            <FormControlLabel value="Home" control={<Radio/>} label="Home"/>
            <FormControlLabel value="Reminder" control={<Radio/>} label="Reminder" />            
          </RadioGroup>
        </FormControl>
        
        
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<NoteAddIcon/>}
        >
          Add note
        </Button>
      </form>
      
    </Container>
  )
}