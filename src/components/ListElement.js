import React from 'react'
import {
    CTableRow,
    CTableHeaderCell,
    CTableDataCell
  } from '@coreui/react'

const List = (data) => {

    return (
        <>
            <CTableRow>
            <CTableHeaderCell scope="row">{data.data.app}</CTableHeaderCell>
            <CTableDataCell>{data.data.pause}</CTableDataCell>
            <CTableDataCell>{data.data.score}</CTableDataCell>
            <CTableDataCell>{data.data.duration}</CTableDataCell>
            <CTableDataCell>{data.data.date}</CTableDataCell>
            </CTableRow>
        </>
    )
}

export default List
