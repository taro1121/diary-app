import React, { Component } from 'react'
import api from '../api'
import {Chart, List} from '../components'
import 'react-table/react-table.css'
import {Wrapper, Update, Delete} from '../styles'

class UpdateDiary extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/diaries/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteDiary extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the diary entry ${this.props.id} permanently?`,
            )
        ) {
            api.deleteDiaryById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            diaries: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllDiaries().then(res => {
            this.setState({
                diaries: res.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { diaries, isLoading } = this.state

        const columns = [
            {
                Header: 'Date',
                accessor: 'date',
                filterable: true,
                width: '110',
            },
            {
                Header: 'item1Desc',
                accessor: 'item1Desc',
                filterable: true,
                width: '1000',
            },
            {
                Header: 'item1Value',
                accessor: 'item1Value',
                filterable: true,
                width: '100',
            },
            {
                Header: '',
                accessor: '',
                width: '100',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteDiary id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                width: '100',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateDiary id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!diaries.length) {
            showTable = false
        }

        let showChart = true
        if (!diaries.length) {
            showChart = false
        }

        return (
            <Wrapper>
                <Chart />
                <List />
            </Wrapper>
        )
    }
}
export default Home