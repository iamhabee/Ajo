import React from 'react'
import PropTypes from 'prop-types';
import { TheFooter, TheHeader, TheSidebar } from '../../containers';
import { CContainer } from '@coreui/react';

const Main = props => {
  const { children } = props;

  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <main className="c-main">
            <CContainer fluid>
              {children}
            </CContainer>
          </main>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main
