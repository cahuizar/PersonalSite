import React, { Fragment } from 'react';
import 'normalize.css';
import { Global } from '@emotion/core';
import globalStyles from './App.styles';

import Container from './components/Grid/Container';
import Row from './components/Grid/Row';
import Col from './components/Grid/Col';
import LeftPanel from './components/LeftPanel/LeftPanel';
import RightPanel from './components/RightPanel/RightPanel';

function App() {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      <Container>
        <Row>
          <Col sm='4'>
            <LeftPanel />
          </Col>
          <Col sm='6'>
            <RightPanel />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
