import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NavBar, Entry, List, Footer, NaviBar, Links, Chart} from '../components'
import {DiariesInsert, DiariesList, DiariesUpdate, DiariesChart, Home, ListPage, ChartPage} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NaviBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/diaries/create" exact component={DiariesInsert} />
                    <Route path="/diaries/list" exact component={ListPage} />
                    <Route path="/diaries/update/:id" exact component={DiariesUpdate}/>
                    <Route path="/diaries/chart" exact component={ChartPage}/>
                </Switch>
        </Router>
    )
}
export default App