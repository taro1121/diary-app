import React, { Component } from 'react'
import api from '../api'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import {Wrapper, Title, SubTitle} from '../styles'

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diaries: [],
            // columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDiaries().then(res => {
            this.setState({
                diaries: res.data.data,
                isLoading: false
            })
        })
    }

    render() {
        const { diaries, isLoading } = this.state

        let showChart = true
        if (!diaries.length) {
            showChart = false
        }

        return (
            <Wrapper>
                <Title>Diary Chart</Title>
                <SubTitle>Chart of your daily diary values</SubTitle>
                {showChart && (
                    <LineChart width={1200} height={600} data={diaries.sort((a,b) => b.date - a.date)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="item1Value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis dataKey="item1Value" />
                    <Tooltip />
                  </LineChart>
                )}
            </Wrapper>
        )
    }
}
export default Chart