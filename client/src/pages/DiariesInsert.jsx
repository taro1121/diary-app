import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'


const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`


class DiariesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            items: [
                {
                    desc: '',
                    value: ''
                },
                {
                    desc: '',
                    value: ''
                },
                {
                    desc: '',
                    value: ''
                },
                {
                    desc: '',
                    value: ''
                }
            ]
        }
    }

    handleChangeInputDate = async event => {
        const date = event.target.value
        this.setState({ date })
    }

    handleChangeInputItem1Description = async event => {
        const item1Description = event.target.value
        this.setState({ $items:[0].desc })
    }

    handleChangeInputItem1Value = async event => {
        const item1Value = event.target.value
        this.setState({ items:[0].value })
    }

    handleIncludeDiary = async () => {
        const { date, item1Description, item1Value } = this.state
        const payload = { date, items:[0].desc, items:[0].value }

        await api.insertDiary(payload).then(res => {
            window.alert(`Entry inserted successfully`)
            this.setState({
                date: '',
                items:[0].{desc: ''},
                items:[0].{value: ''}
            })
        })
    }

    render() {
        const {date, items:[].desc, items:[].value} = this.state
        // const {date, item1 [ { description, value },] item2: { description, value }, item3: { description, value }, item4: { description, value }, item5: { description, value }, item6: { description, value } } = this.state

        return (
            <Wrapper>
            <Title>Create Entry</Title>

            <Label>Date: </Label>
            <InputText
                type="date"
                value={date}
                onChange={this.handleChangeInputDate}
            />

            <Label>Item1 description: </Label>
            <InputText
                type="text"
                value={items[].desc}
                onChange={this.handleChangeInputItem1Description}
            />

            <Label>Item1 value: </Label>
            <InputText
                type="number"
                step="1"
                lang="en-US"
                min="-5"
                max="+5"
                pattern="[0-9]+([,\.][0-9]+)?"
                value={items[].value}
                onChange={this.handleChangeInputItem1Value}
            />

            <Button onClick={this.handleIncludeDiary}>Add Entry</Button>
            <CancelButton href={'/'}>Cancel</CancelButton>
        </Wrapper>
        )
    }
}

export default DiariesInsert