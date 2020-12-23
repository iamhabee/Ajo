import React, { Component } from 'react';
import Form from './Form';
import {
    CWidgetDropdown,
    CWidgetBrand,
    CRow,
    CCol,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle,
    CProgress,
      CButton,
      CModal,
      CModalHeader,
      CModalBody,
      CModalFooter,
  } from '@coreui/react'
  import CIcon from '@coreui/icons-react'
 class Groups extends Component {
  constructor(props){
    super(props)
    this.state={
      modal : false,
      modals: false,
    }
    this.handleModal = this.handleModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleModals = this.handleModals.bind(this);
    // this.handleCloseModals = this.handleCloseModals.bind(this);
  } 
  handleModal() {
    this.setState({modal:true})
  }
  handleCloseModal() {
    this.setState({modal:false})
  }
  // handleModals(){
  //   this.setState({modals:true})
  // }
  // handleCloseModals(){
  //   this.setState({modals:false})
  // }
    render() {
      const{modal}=this.state
      // const{modals}=this.state
        return (
          <div style={{width:"100%", height:"800px", backgroundColor:"rgb(255, 255, 255"}}>
                <CRow>
              <CCol sm="6" lg="3">
              <CWidgetBrand
                color="warning"
                rightHeader="89,000"
                rightFooter="Amount"
                leftHeader="25"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="warning"
                  header="Me&friends"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                            <CDropdownItem href="/table"> Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="primary"
                rightHeader="900,000"
                rightFooter="Amount"
                leftHeader="15"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="primary"
                  header="Carpentar Group"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem> 
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="gradient-success"
                rightHeader="100,000"
                rightFooter="Amount"
                leftHeader="10"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="gradient-success"
                  header="GMC"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem >Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="gradient-info"
                rightHeader="50,000"
                rightFooter="Amount"
                leftHeader="10"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="gradient-info"
                  header="GroupName"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CRow >
            <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>15 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="warning"
                value={40}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>12 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="primary"
                value={80}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>10 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="success"
                value={100}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>5 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="gradient-info"
                value={50}
                style={{width:'250px'}}
              />
              </CCol>
   
            </CRow>
            
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="danger"
                rightHeader="700,000"
                rightFooter="Amount"
                leftHeader="7"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="danger"
                  header="Amy's Group"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="dark"
                rightHeader="90,000"
                rightFooter="Amount"
                leftHeader="3"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="dark"
                  header="MyGroup"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="dribbble"
                rightHeader="60,000"
                rightFooter="Amount"
                leftHeader="15"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="dribbble"
                  header="TechEnd"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CCol sm="6" lg="3">
              <CWidgetBrand
                color="yahoo"
                rightHeader="250,000"
                rightFooter="Amount"
                leftHeader="5"
                leftFooter="Members"
                >
                  <CWidgetDropdown
                  color="yahoo"
                  header="MthsTeachers"
                  footerSlot={<div style={{width:'278px', height:'52px',}}></div>}
                  >
                    <CDropdown>
                      <CDropdownToggle color="transparent" >
                        <CIcon name="cil-settings"/>
                      </CDropdownToggle>
                      <CDropdownMenu className="pt-0" placement="bottom-end">
                        <CDropdownItem onClick={this.handleModal}>AddMember</CDropdownItem>
                        <CDropdownItem href="/table">Details</CDropdownItem>
                        <CDropdownItem href="/table1">Manage</CDropdownItem>
                        <CDropdownItem disabled>Renew</CDropdownItem>
                        <CDropdownItem disabled>Delete</CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CWidgetDropdown>
              </CWidgetBrand>
            </CCol>
            <CRow >
            <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>5 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="danger"
                value={80}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>0 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="dark"
                value={0}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>9 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="dribbble"
                value={70}
                style={{width:'250px'}}
              />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 text-center">
              <div className="text-muted">Members</div>
              <strong>5 Active</strong>
              <CProgress
                className="progress-xs mt-2 ml-4 mb-4"
                precision={1}
                color="yahoo"
                value={100}
                style={{width:'250px'}}
              />
              </CCol>
              </CRow>
              </CRow>
              <CModal
                show={modal}
                onClose={this.handleCloseModal}
              >
                <CModalHeader closeButton>Fill To Add A New Member</CModalHeader>
                <CModalBody>
                  <Form />
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary">Submit</CButton>
                  <CButton
                    color="secondary"
                    onClick={this.handleCloseModal}
                  >Cancel</CButton>
                </CModalFooter>
              </CModal>

              {/* <CModal
                show={modals}
                onClose={this.handleCloseModals}
              >
                <CModalHeader closeButton>Fill To Add A New Member</CModalHeader>
                <CModalBody>
                
                </CModalBody>
                <CModalFooter>
                  <CButton color="primary">Submit</CButton>
                  <CButton
                    color="secondary"
                    onClick={this.handleCloseModals}
                  >Cancel</CButton>
                </CModalFooter>
              </CModal>
 */}

              </div>
              
        
        );
    }
}

export default Groups
