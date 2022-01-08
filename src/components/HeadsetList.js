import React, { useState, useEffect } from 'react'
import {
    CAlert,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody
  } from '@coreui/react'
import ListElement from './ListElement'


const HeadsetList = (data) => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        const array = JSON.parse(data.data.sessions.toString())
        setRows(array)
        let id = 0
        array.forEach(rows => {
            id = id+1
            rows.id = id
        });
    }, [data.data.sessions]) 

    return (
        <>
            <CAlert color="dark">
                <strong>Headset Id: </strong>{data.data.id}
            </CAlert>
            <CTable>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Session #</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pauses</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Score</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Duration (sec)</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                </CTableRow>
            </CTableHead>
            <CTableBody>
                {rows && rows.map(row => <ListElement key={row.duration} data={row} />)}
            </CTableBody>
            </CTable> 
        </>
    )
}

export default HeadsetList
