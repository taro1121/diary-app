import React, { Component } from 'react'
import Links from './Links'
import {Nav, Container} from '../styles'

class NaviBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NaviBar