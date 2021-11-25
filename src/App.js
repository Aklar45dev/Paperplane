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
          <CCardHeader component="h5">Data Dashboard</CCardHeader>
          <CCardBody>
            <CCardTitle>Paperplane Float</CCardTitle>
            <CCardText>Headset sessions</CCardText>
          </CCardBody>
        </CCard>
        {users && users.map(user => <HeadsetList key={user.id} data={user} />)}
        <CChart
          type="line" 
          data={{
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(220, 220, 220, 0.2)",
                borderColor: "rgba(220, 220, 220, 1)",
                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                pointBorderColor: "#fff",
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
              },
              {
                label: "My Second dataset",
                backgroundColor: "rgba(151, 187, 205, 0.2)",
                borderColor: "rgba(151, 187, 205, 1)",
                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                pointBorderColor: "#fff",
                data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
              },
            ],
          }}
        />
        <CChart
          type="bar"
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'GitHub Commits',
                backgroundColor: '#f87979',
                data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
              },
            ],
          }}
          labels="months"
        />
        <CChart
          type="doughnut"
          data={{
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            datasets: [
              {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: [40, 20, 80, 10],
              },
            ],
          }}
        />
      </CContainer>
  );
}

export default App;
