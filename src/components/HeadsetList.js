import React, { useState, useEffect } from 'react'
import {
    CAlert,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CButton,
    CCollapse
  } from '@coreui/react'
import ListElement from './ListElement'


const HeadsetList = (data) => {

    const [rows, setRows] = useState([])
    const [name, setName] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const array = JSON.parse(data.data.sessions.toString())
        setName(data.data.name)
        setRows(array)
        let id = 0
        array.forEach(rows => {
            id = id+1
            rows.id = id
        });
    }, [data.data])
    
    const getName = () => {
        if (name !== undefined){
            return name
        }
        else {
            return data.data.id
        }
    }

    return (
        <div className="headerRow">
            <CAlert color="dark">
                <CButton className="session-btn" size="sm" color="secondary" onClick={() => setVisible(!visible)}>Sessions</CButton>
                <strong>Headset: </strong>{getName()}
            </CAlert>
            <CCollapse visible={visible}>
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
                {rows && rows.map(row => <ListElement key={Math.floor(Math.random() * 1000000)} data={row} />)}
            </CTableBody>
            </CTable>
            </CCollapse> 
        </div>
    )
}

export default HeadsetList
