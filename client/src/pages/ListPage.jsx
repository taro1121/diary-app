import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import {List} from '../components'

import styled from 'styled-components'
import 'react-table/react-table.css'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

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