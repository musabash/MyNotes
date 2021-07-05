import { Avatar, makeStyles, ThemeProvider } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, FormatColorResetOutlined, SubjectOutlined } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField'
import { useHistory, useLocation } from 'react-router';


const drawerWidth = 200

const useStyles = makeStyles((theme) => {return {
  root: {
    display: "flex",
    paddingTop: "1em",
  },
  active: {
    background: "#f4f4f4"
  },
  page: {
    background: "efefef",
    width: "100%",
    margin: "0 auto",
    display: "block"
  },
  drawer: {
    width: drawerWidth,
  },
  title: {
    padding: "0.5em",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  date: {
    flexGrow: 1,
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    boxShadow: '0 0 5px 0 gray',
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    marginLeft: theme.spacing(2)
  }
}})

const menuItems = [
    { 
      text: 'My Notes', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/' 
    },
    { 
      text: 'Create Note', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/create' 
    },
  ];

export default function Layout({children}) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const [isEditable, setIsEditable] = useState(false)
  const [name, setName] = useState("")
  const [touched, setTouched] =useState(FormatColorResetOutlined)

  function handleClick() {
    setIsEditable(prev => !prev)
  }
  function handleOnBlur() {
    setIsEditable(prev => !prev)
      localStorage.setItem("name", JSON.stringify(name))
      history.push('/')
  }

  useEffect(() => {
    let userName = JSON.parse(localStorage.getItem("name"))
    setName(userName)
  }, [])

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is {new Date().toLocaleString().slice(0, 10)}
          </Typography>
          {isEditable ? <TextField
          autoFocus={true}
          onChange={(e) => setName(e.target.value)}
          id="name"
          label="Your Name"
          variant="outlined"
          color="secondary"
          required
          size= "small"
          className={classes.field}
          value={name}
          onBlur={handleOnBlur}
          error={name === '' && touched.name}
        /> : <Typography
            onClick={handleClick}
          >{name ? name : "Your Name"}</Typography>}
          <Avatar src="/mr-bean.png" className={classes.avatar}/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{paper: classes.drawerPaper}}
      >
        <div>
          <Typography className={classes.title} variant="h4">
            My Notes
          </Typography>
        </div>
        <List>
          {menuItems.map(item => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path && classes.active}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
     <div className={classes.page}>
       <div className={classes.toolbar}></div>
       {children}
     </div>
      
    </div>
  )
}