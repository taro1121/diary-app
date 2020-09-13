import React, { Component } from 'react'
import api from '../api'
import {Title, SubTitle, WrapperEntry, Label, InputText, Button, CancelButton} from '../styles'

class Update extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.diary.match.params.id,
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
        if ((item1Value > 5) || (item1Value < -5)) {    
            window.alert(`Value has to be between -5 and +5`)
            this.setState({ item1Value: '' })
        } else {
            this.setState({ item1Value })
        }
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
            <WrapperEntry>
                <Title>Update Diary</Title>
                <SubTitle>Update Date, Description, and Value (from -5.0 to +5.0) to represent the day.
                </SubTitle>

                <Label>Date: </Label>
                <InputText
                    type="date"
                    value={this.state.date}
                    onChange={this.handleChangeInputDate}
                />

                <Label>Item1 description: </Label>
                <InputText
                    type="text"
                    value={this.state.item1Desc}
                    onChange={this.handleChangeInputItem1Desc}
                />

                <Label>Item1 value: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="-5"
                    max="+5"
                    // pattern="[0-9]+([,\.][0-9]+)?"
                    value={this.state.item1Value}
                    onChange={this.handleChangeInputItem1Value}
                />

                <Button onClick={this.handleUpdateDiary}>Update Diary</Button>
                <CancelButton href={'/diaries/list'}>Cancel</CancelButton>
            </WrapperEntry>
        )
    }
}
export default Update