import React, { useState, useEffect } from 'react'
import './App.css';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardHeader,
  CContainer
} from '@coreui/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import {
  CChart
} from "@coreui/react-chartjs"
import axios from 'axios'
import HeadsetList from './components/HeadsetList'



function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData()
}, [])

  const fetchData = async () => {
    axios.get('https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/users').then(res => {
      setUsers(res.data.Items)
    })
  }

  return (
    <CContainer className="App">
      <CCard>
        <CCardBody>
          <CCardTitle>Paperplane Float</CCardTitle>
        </CCardBody>
      </CCard>
      {users && users.map(user => <HeadsetList key={user.id} data={user} />)}
    </CContainer>
  )
}

export default App
