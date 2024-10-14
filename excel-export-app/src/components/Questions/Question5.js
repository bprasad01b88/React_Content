import React, { useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Question5 = () => {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    // function for handling for start time when click on start button
    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };
    
    // function for handling for pause and resume button
    const handlePauseResume = () => {
        if (isActive) {
            clearInterval(countRef.current);
            setIsPaused(true);
            setIsActive(false);
        } else {
            setIsActive(true);
            setIsPaused(false);
            countRef.current = setInterval(() => {
                setTimer((timer) => timer + 1);
            }, 1000);
        }
    };

    // function for handling for reset button
    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setTimer(0);
    };

    // function for formatting time to hh:mm:ss format
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return (
            (hours < 10 ? "0" + hours : hours) +
            ":" +
            (minutes < 10 ? "0" + minutes : minutes) +
            ":" +
            (seconds < 10 ? "0" + seconds : seconds)
        );
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h5>Stop-Watch App</h5>
                        <div>{formatTime(timer)}</div>
                        <div className='d-flex gap-2'>
                            {!isActive && !isPaused ?
                                (<Button className='btn-primary w-25' onClick={handleStart}>START</Button>) :
                                (<><Button className='btn-secondary w-25' onClick={handlePauseResume}>{isActive ? "Pause" : "Resume"}</Button>
                                    <Button className='btn btn-danger w-25' onClick={handleReset}>Reset</Button></>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Question5