import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NavBar, Entry, List, Footer} from '../components'
import {DiariesInsert, DiariesList, DiariesUpdate, DiariesChart} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
                <Switch>
                    <Route path="/" exact component={DiariesList} />
                    <Route path="/diaries/create" exact component={DiariesInsert} />
                    <Route path="/diaries/list" exact component={DiariesList} />
                    <Route path="/diaries/update/:id" exact component={DiariesUpdate}/>
                    <Route path="/diaries/chart" exact component={DiariesChart}/>
                </Switch>
        </Router>
    )
}
export default App