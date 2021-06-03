import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blueGrey } from '@material-ui/core/colors'
import Layout from './components/layout'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: blueGrey
  },
  typography: {
    fontFamily: 'Livvic',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
      <AmplifySignOut />
    </ThemeProvider>
  );
}

export default withAuthenticator(App);
