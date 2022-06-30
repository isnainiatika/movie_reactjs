import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import Superhero1 from '../assets/image/superhero/superhero 1.jpg'
import Superhero2 from '../assets/image/superhero/superhero 2.jpg'
import Superhero3 from '../assets/image/superhero/superhero 3.jpg'
import Superhero4 from '../assets/image/superhero/superhero 4.jpg'
import Superhero5 from '../assets/image/superhero/superhero 5.jpg'
import Superhero6 from '../assets/image/superhero/superhero 6.jpg'

const Superhero =() => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>Superhero Movies</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id="superhero">
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero1} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Black Widow</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero2} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>X-Man</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero3} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Ant-MAN</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero4} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Guardians of the Galaxy</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero5} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Watch-MAN</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className='movieWrapper'>
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Superhero6} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>IRON-MAN</Card.Title>
                                    <Card.Text className='text-left'>
                                        This is a wider card with supporting text below as a natural lead-in
                                        to additional content. 
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero
