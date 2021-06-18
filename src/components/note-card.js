import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, green, red, yellow } from '@material-ui/core/colors';

  const useStyles = makeStyles({
    avatar: {
      backgroundColor: (note) => {
        if (note.category === 'Work') {return yellow[700]}
        if (note.category === 'Money') {return green[400]}
        if (note.category === 'Home') {return red[300]}
        return blue[700]
      }
    }
  })

export default function NoteCard({note, deleteNote}) {
  const classes = useStyles(note)
  
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0]}
            </Avatar>
          }
          title={note.title}
          subheader={note.category}
          action={
            <IconButton
              onClick={() => deleteNote(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
        />
        <CardContent>
          <Typography color="textSecondary" component="p">{note.note}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}