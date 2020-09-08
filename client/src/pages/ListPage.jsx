import React, { Component } from 'react'
import {List} from '../components'
import 'react-table/react-table.css'
import {Wrapper} from '../styles'

class ListPage extends Component {
    render() {
      return (
        <Wrapper>
          <List />
        </Wrapper>
      )
    }
}
export default ListPage