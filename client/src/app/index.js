import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NavBar, Entry, List, Footer} from '../components'
import {DiariesInsert, DiariesList, DiariesUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route path="/diaries/create" exact component={DiariesInsert} />
                    <Route path="/diaries/list" exact component={DiariesList} />
                    <Route path="/diaries/update/:id" exact component={DiariesUpdate}/>
                </Switch>
        </Router>
    )
}
export default App