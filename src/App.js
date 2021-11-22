import logo from './logo.svg';
import './App.css';
import {
  CAlert,
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  return (
    <div className="App">
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={logo} />
        <CCardBody>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
        </CCardBody>
      </CCard>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={logo} />
        <CCardBody>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
        </CCardBody>
      </CCard>
      <CAlert color="info">
        A simple info alert—check it out!
      </CAlert>
    </div>
  );
}

export default App;
