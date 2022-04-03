import React, { useState } from 'react'
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
    const [visible, setVisible] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const getSessions = async() => {
        if(!loaded){
            fetch(`https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/sessions/${data.data.id}`)
            .then(response => response.json())
            .then(data => {
                setVisible(!visible)
                setRows(data.session.data)
                setLoaded(true)
                return
            })
        }
        if(loaded){
            setVisible(!visible)
        }
    }

    return (
        <div className="headerRow">
            <CAlert color="dark">
                <CButton className="session-btn" size="sm" color="secondary" onClick={() => getSessions()}>Sessions</CButton>
                <strong>Headset: </strong>{data.name}
            </CAlert>
            <CCollapse visible={visible}>
            <CTable>
            <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">App</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Pauses</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Score</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Durée (s)</CTableHeaderCell>
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
