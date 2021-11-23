import React from 'react'
import {
    CTableRow,
    CTableHeaderCell,
    CTableDataCell
  } from '@coreui/react'

const HeadsetList = (data) => {

    return (
        <>
            <CTableRow>
            <CTableHeaderCell scope="row">{data.data.id}</CTableHeaderCell>
            <CTableDataCell>{data.data.duration}</CTableDataCell>
            <CTableDataCell>{data.data.date}</CTableDataCell>
            </CTableRow>
        </>
    )
}

export default HeadsetList
