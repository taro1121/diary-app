import React, { Component } from 'react'
import api from '../api'
import {WrapperEntry, Title, SubTitle, Label, InputText, Button, CancelButton} from '../styles'

class Entry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            item1Desc: '',
            item1Value: ''
        }
    }

    handleChangeInputDate = async event => {
        const date = event.target.value
        this.setState({date})
    }

    handleChangeInputItem1Description = async event => {
        const item1Desc = event.target.value
        this.setState({item1Desc})
    }

    handleChangeInputItem1Value = async event => {
        const item1Value = event.target.value
        // if (-5 < item1Value < 5) {
        if ((item1Value < -5) || (item1Value > 5)) {    
            window.alert(`Value has to be between -5.0 and +5.0`)
            this.setState({item1Value: ''})
        } else {
            this.setState({item1Value})
        }
    }

    handleIncludeDiary = async () => {
        // if ((item1Value == '') || (item1Desc == '') || (date == '')) {
        //     window.alert(`All three fields have to be filled.`)
        //     this.setState(
        //         {
        //         date:'',
        //         item1Desc: '',
        //         item1Value: '',
        //         })
        // } else {
            const {date, item1Desc, item1Value} = this.state
            const payload = {date, item1Desc, item1Value}
        // }

        await api.insertDiary(payload).then(res => {
            window.alert(`Entry inserted successfully`)
            this.setState(
                {
                date:'',
                item1Desc: '',
                item1Value: '',
                }
            )
        })
    }

    render() {
        const {date, item1Desc, item1Value } = this.state

        return (
            <WrapperEntry>
            <Title>Create Diary Entry</Title>
            <SubTitle>Enter Date, Description, and Value (from -5.0 to +5.0) to represent the day.
            </SubTitle>
            
            <Label>Date: </Label>
            <InputText
                type="date"
                value={ date }
                onChange={this.handleChangeInputDate}
            />

            <Label>Item1 description: </Label>
            <InputText
                type="text"
                value={item1Desc}
                onChange={this.handleChangeInputItem1Description}
            />

            <Label>Item1 value: </Label>
            <InputText
                type="number"
                step="1"
                lang="en-US"
                min="-5.0"
                max="+5.0"
                // pattern="[0-9]+([,\.][0-9]+)?"
                value={item1Value}
                onChange={this.handleChangeInputItem1Value}
            />

            <Button onClick={this.handleIncludeDiary}>Add Entry</Button>
            <CancelButton href={'/'}>Cancel</CancelButton>
        </WrapperEntry>
        )
    }
}
export default Entry