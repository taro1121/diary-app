import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NavBar, Entry, List, Footer} from '../components'
import {DiariesInsert, DiariesList} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route path="/diaries/create" exact component={DiariesInsert} />
                    <Route path="/diaries/list" exact component={DiariesList} />
                    {/* <Route path="/edit" exact component={ Edit } /> */}
                </Switch>
        </Router>
    )
}
export default App