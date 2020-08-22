import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'
import 'react-table/react-table.css'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

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

class DiariesList extends Component {
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

        await api.getAllDiaries().then(diaries => {
            this.setState({
                diaries: diaries.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { diaries, isLoading } = this.state
        console.log('PRINTING DIARIES ARRAY')
        console.log(diaries)
        console.log('PRINTING DIARIES ARRAY Length')
        console.log('printing diaries.data.length:' + diaries.data.length)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Date',
                accessor: 'date',
                filterable: true,
            },
            {
                Header: 'item1Desc',
                accessor: 'item1Desc',
                filterable: true,
            },
            {
                Header: 'item1Value',
                accessor: 'item1Value',
                filterable: true,
                // Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
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
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateDiary id={props.original._id} />
                        </span>
                    )
                },
            },
        ]
        console.log('diaries.data.length')
        // console.log(diaries.data.length)

        let showTable = true
        if (!diaries.length) {
            showTable = false
        }

        return (
            <Wrapper>
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

export default DiariesList