import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import 'react-table/react-table.css'
import {Wrapper, Title, SubTitle, Update, Delete} from '../styles'

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
                // `Do tou want to delete the diary entry permanently?`,
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

class List extends Component {
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
                diaries: res.data.data.sort((a,b) => new Date(b.date) - new Date(a.date)),
                isLoading: false,
            })
        })
    }

    render() {
        const { diaries, isLoading } = this.state

        const columns = [
            // {
            //     Header: 'ID',
            //     accessor: '_id',
            //     filterable: true,
            // },
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
                // Cell: props => <span>{props.value.join(' / ')}</span>,
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
        ]

        let showTable = true
        if (!diaries.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <Title>Diary List</Title>
                <SubTitle>List of diary entries in chronological order.</SubTitle>
                {showTable && (
                    <ReactTable
                        data={diaries}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}
export default List