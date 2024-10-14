import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Question3 = () => {
    const [amount, setAmount] = useState("");
    const [convertedAmount, setConvertedAmount] = useState("")
    const exchange = 80;

    const handleChange = (e) => {
        setAmount(e.target.value);
    }

    const handleConversion = (e) => {
        e.preventDefault()
        let currency = amount * exchange;
        setConvertedAmount(currency);
    }

    return (
        <>
            <div>
                <h2>Question 3</h2>
                <p>
                    Currency Converter App
                </p>
                <Container>
                    <Row>
                        <Col md={6}>
                            <form>
                                <div className='form-group'>
                                    <label for='inputCurrency'>From Currency:</label>
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        id='inputCurrency' 
                                        placeholder='Enter Currency' 
                                        name="amount"
                                        value={amount}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className='mt-2'>
                                    <Button className='btn btn-secondary' type='submit' onClick={handleConversion}>Convert</Button>
                                </div>
                            </form>
                        </Col>
                        <Col md={6}>
                            <div>
                                <h1>Converted Amount Is : {convertedAmount}</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Question3