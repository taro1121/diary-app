import React, { Component } from 'react'
import {Entry} from '../components'
// import 'react-table/react-table.css'
import {Wrapper} from '../styles'

class EntryPage extends Component {
    render() {
      return (
        <Wrapper>
          <Entry />
        </Wrapper>
      )
    }
}
export default EntryPage