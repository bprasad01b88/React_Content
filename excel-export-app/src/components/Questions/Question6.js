import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Question6 = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            setCount(count + 1);
        }, 0);
        setCount(count + 1);
    }
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div>{`Count is : ${count}`}</div>
                    <Button classNam="btn btn-primary" onClick={handleClick}>Click</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Question6