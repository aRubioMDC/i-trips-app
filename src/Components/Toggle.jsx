import React from 'react'
import { Accordion } from 'react-bootstrap';

const Toggle = () => {

    return (
      <>
        <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0" className='mb-3'>
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    body
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='mb-3'>
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    body
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </>
    );
};

export default Toggle;
