import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Collapse, List, Item} from '../styles'

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Chart Diary
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">Home</Link>
                        </Item>
                        <Item>
                            <Link to="/diaries/create" className="nav-link">Entry</Link>
                        </Item>
                        <Item>
                            <Link to="/diaries/list" className="nav-link">List</Link>
                        </Item>
                        <Item>
                            <Link to="/diaries/chart" className="nav-link">Chart</Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links