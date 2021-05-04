import React, {useState, useEffect} from "react"

const DataContext = React.createContext()

function DataContextProvider(props) {
  // const notes = JSON.parse(localStorage.getItem('notes'))
  
  function saveNote(obj) {
    localStorage.setItem(obj.id, JSON.stringify(obj))
  }
  

  // function deleteList(value) {
  //   localStorage.removeItem(value)
  //   setList(prev => prev.filter(elm => elm !== value ))
  //   localStorage.setItem('listArray', JSON.stringify(list))
  // }

  // function saveEdit() {
  //   const newData = itemsData.map(elm => {
  //     if (elm.id === editItem) {
  //       return {
  //         ...elm,
  //         name: edit
  //       }
  //     } else { return elm}
  //   })
  //   setItemsData(newData)
  // }


  const value = {
    saveNote
  }

  return (
    <DataContext.Provider value={value}>
      {props.children}
    </DataContext.Provider>
  )
}

export {DataContext, DataContextProvider}