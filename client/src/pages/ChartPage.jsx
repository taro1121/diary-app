import React, { Component } from 'react'
import {Chart} from '../components'
import 'react-table/react-table.css'
import {Wrapper} from '../styles'

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