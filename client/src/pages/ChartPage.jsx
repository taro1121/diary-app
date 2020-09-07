import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import {Chart} from '../components'

import styled from 'styled-components'
import 'react-table/react-table.css'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class ChartPage extends Component {
    render() {
      return (
        <Wrapper>
          <Chart />
        </Wrapper>
      )
    }
}

export default ChartPage