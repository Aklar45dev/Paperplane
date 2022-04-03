import React, { useState, useEffect } from 'react'
import './App.css';
import {
  CCard,
  CCardBody,
  CCardTitle,
  CContainer
} from '@coreui/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import HeadsetList from './components/HeadsetList'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  

  const fetchData = async () => {

    //get users
    
    fetch('https://xaluarb41m.execute-api.ca-central-1.amazonaws.com/Prod/paperplaneusers')
    .then(response => response.json())
    .then(data => {
      setUsers(data.Items)
    })
  }

  return (
    <CContainer className="App">
      <CCard>
        <CCardBody>
          <CCardTitle>Paperplane Float</CCardTitle>
        </CCardBody>
      </CCard>
      {users && users.map(user => <HeadsetList key={user.id} data={user} name={user.name} />)}
    </CContainer>
  )
}

export default App
