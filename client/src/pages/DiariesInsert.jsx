import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

class DiariesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: '',
            item1: {
                description: '',
                value: ''},
            item2: {
                description: '',
                value: ''},
            item3: {
                description: '',
                value: ''},
            item4: {
                description: '',
                value: ''},
            item5: {
                description: '',
                value: ''},
            item6: {
                description: '',
                value: ''}
        }
    }






    render() {
        const {date, item1 {description, value}, item2 {description, value}, item3 {description, value}, item4 {description, value}, item5 {description, value}, item6 {description, value} } = this.state
        return (
            <Title></Title>
        )
    }


}