
import React, { useRef, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const NagaroTest = () => {
   const [timer, setTimer] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isPaused, setIsPaused] = useState(false);
   const countRef = useRef(null);

   const handleStart = () => {
      setIsActive(true);
      setIsPaused(false);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 100);
   };

   const handlePauseResume =() => {
    if(isActive){
      clearInterval(countRef.current);
      setIsPaused(true);
      setIsActive(false);
    }else {
      setIsActive(true);
      setIsPaused(false);
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 100);
    }
   };

   const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
   }
   
   const formatTime = (time) => {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return (
      (hour < 10 ? '0' + hour : hour) + ":" +
      (minutes < 10 ? "0" + minutes : minutes) + ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    )
   };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>{formatTime(timer)}</div>
            <div className="d-flex gap-2">
              {!isActive && !isPaused ? 
                (<Button className="btn btn-primary w-25" onClick={handleStart}>START</Button>) : 
                (<>
                  <Button className="btn btn-secondary w-25" onClick={handlePauseResume}>{isActive ? "PAUSED" : "RESUME"}</Button>
                  <Button className='btn btn-danger' onClick={handleReset}>RESET</Button>
                </>)
              }
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NagaroTest