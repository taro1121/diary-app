import React, { Component } from 'react'
// import api from '../api'
// import { validateAll } from 'indicative/validator'

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
            item1Description: '',
            item1Value: ''
            // item2: {
            //     description: '',
            //     value: ''},
            // item3: {
            //     description: '',
            //     value: ''},
            // item4: {
            //     description: '',
            //     value: ''},
            // item5: {
            //     description: '',
            //     value: ''},
            // item6: {
            //     description: '',
            //     value: ''}
        }
    }

    render() {
        const {date, item1Description, item1Value} = this.state
        // const {date, item1: { description, value }, item2: { description, value }, item3: { description, value }, item4: { description, value }, item5: { description, value }, item6: { description, value } } = this.state

        return (
            <Wrapper>
            <Title>Create Entry</Title>

            <Label>Date: </Label>
            <InputText
                type="text"
                value={date}
            />

            <Label>Item1 description: </Label>
            <InputText
                type="text"
                value={item1Description}
            />

            <Label>Item1 value: </Label>
            <InputText
                type="number"
                step="0.1"
                lang="en-US"
                min="0"
                max="10"
                pattern="[0-9]+([,\.][0-9]+)?"
                value={item1Value}
            />

            <Button>Add Entry</Button>
            <CancelButton href={'/diaries/list'}>Cancel</CancelButton>
        </Wrapper>
        )
    }
}

export default DiariesInsert