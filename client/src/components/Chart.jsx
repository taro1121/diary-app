import React, { Component } from 'react'
import api from '../api'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Title = styled.h1.attrs({
    className: 'h1',
})``

const SubTitle = styled.h5.attrs({
    className: 'h5',
})``

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

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
                // diaries: res.data.data.sort((a,b) => new Date(a.date) - new Date(b.date)),
                isLoading: false
            })
        })
    }

    render() {
        // const diariesSort = diaries.data.data.sort((a,b) => b.date - a.date)
        
        const { diaries, isLoading } = this.state
        console.log('test');
        console.log(diaries);
        // console.log(diaries.sort((a,b) => b.date - a.date));

        let showChart = true
        if (!diaries.length) {
            showChart = false
        }

        return (
            <Wrapper>
                <Title>Diary Chart</Title>
                <SubTitle>Chart of your diary values</SubTitle>
                {showChart && (
                    <LineChart width={1200} height={600} data={diaries.sort((a,b) => b.date - a.date)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="item1Value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                )}
            </Wrapper>
        )
    }
}

export default Chart