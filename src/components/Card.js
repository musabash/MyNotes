import React from 'react'

export default function Card({note}) {
  return (
    <div>
      {note.title}
      {note.note}
    </div>
  )
}
