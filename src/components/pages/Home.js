import React from 'react';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Col from '../Grid/Col';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../Layout/RightPanel';

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col xsFull smHalf>
          <LeftPanel />
        </Col>
        <Col xsFull smHalf>
          <RightPanel />
        </Col>
      </Row>
    </Container>
  );
};
