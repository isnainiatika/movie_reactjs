import {Col, Container, Row, Button } from "react-bootstrap" 

const Intro =() =>{
    return (
        <div className='intro'>
        <Container className="text-white text-center d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <div className="title">BIOSKOP TERBAIK</div>
              <div className="title">SEPANJANG MASA</div>
              <div className="introButton mt-4 text-center">
                <Button href="#trending" variant="dark">Lihat semua list</Button>
              </div>
            </Col>
          </Row>
        </Container>
        </div>
    )
}

export default Intro