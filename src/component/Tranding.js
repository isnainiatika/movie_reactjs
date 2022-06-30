import {Card, Container, Row, Col, Image} from 'react-bootstrap';
import Tranding1 from '../assets/image/tranding/tranding 1.jpg'
import Tranding2 from '../assets/image/tranding/tranding 2.jpg'
import Tranding3 from '../assets/image/tranding/tranding 3.jpg'
import Tranding4 from '../assets/image/tranding/tranding 4.jpg'
import Tranding5 from '../assets/image/tranding/tranding 5.jpg'
import Tranding6 from '../assets/image/tranding/tranding 6.jpg'

const Tranding =() => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className='text-white'>Trending Movies</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper'id="trending">
                        <Card className="bg-dark text-white  movieImage">
                            <Image src={Tranding1} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>KKN Desa Penari</Card.Title>
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
                            <Image src={Tranding2} alt="Nathan" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Dear Nathan</Card.Title>
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
                            <Image src={Tranding3} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Layangan Putus</Card.Title>
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
                            <Image src={Tranding4} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Thankyou Salma</Card.Title>
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
                            <Image src={Tranding5} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Ku Kira Kau Rumah</Card.Title>
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
                            <Image src={Tranding6} alt="KKN" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Akhir Cerita Si Doel</Card.Title>
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

export default Tranding
