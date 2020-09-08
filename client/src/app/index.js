import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {NaviBar} from '../components'
import { Home, ListPage, ChartPage, EntryPage, DiariesUpdate, UpdatePage } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NaviBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/diaries/create" exact component={EntryPage} />
                    <Route path="/diaries/list" exact component={ListPage} />
                    <Route path="/diaries/update/:id" exact component={DiariesUpdate}/>
                    <Route path="/diaries/up/:id" exact component={UpdatePage}/>
                    <Route path="/diaries/chart" exact component={ChartPage}/>
                </Switch>
        </Router>
    )
}
export default App