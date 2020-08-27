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

class DiariesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            date: '',
            item1Desc: '',
            item1Value: '',
        }
    }

    handleChangeInputDate = async event => {
        const date = event.target.value
        this.setState({ date })
    }

    handleChangeInputItem1Desc = async event => {
        const item1Desc = event.target.validity.valid
            ? event.target.value
            : this.state.item1Desc

        this.setState({ item1Desc })
    }

    handleChangeInputItem1Value = async event => {
        const item1Value = event.target.value
        this.setState({ item1Value })
    }

    handleUpdateDiary = async () => {
        const { id, date, item1Desc, item1Value } = this.state
        const payload = { date, item1Desc, item1Value }

        await api.updateDiaryById(id, payload).then(res => {
            window.alert(`Diary updated successfully`)
            this.setState({
                date: '',
                item1Desc: '',
                item1Value: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const diary = await api.getDiaryById(id)

        this.setState({
            date: diary.data.data.date,
            item1Desc: diary.data.data.item1Desc,
            item1Value: diary.data.data.item1Value,
        })
    }

    render() {
        const { date, item1Desc, item1Value } = this.state
        return (
            <Wrapper>
                <Title>Update Movie</Title>

                <Label>Date: </Label>
                <InputText
                    type="text"
                    value={date}
                    onChange={this.handleChangeInputDate}
                />

                <Label>Value: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={item1Value}
                    onChange={this.handleChangeInputItem1Value}
                />

                <Label>Desc: </Label>
                <InputText
                    type="text"
                    value={item1Desc}
                    onChange={this.handleChangeInputItem1Desc}
                />

                <Button onClick={this.handleUpdateDiary}>Update Diary</Button>
                <CancelButton href={'/diaries/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default DiariesUpdate