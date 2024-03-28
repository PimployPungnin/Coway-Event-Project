import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardTitle, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

function Event() {
    const buttonStyle = {
        width:'150px',
        borderRadius: '25px',
        border: 'none',
        backgroundColor: '#00A8E3',
        fontFamily: 'Segoe UI',
        padding: '12px',
        fontSize: '20px',
        fontWeight: 'bold'
    };

    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className='animate__animated animate__fadeInUp' style={{ backgroundColor: '#67C0F7', paddingBottom: '350px', paddingTop: '50px', display: 'flex', justifyContent: 'center' }}>
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px', color: 'white', fontFamily: 'system-ui' }}>Event ประจำเดือนนี้!</h1>
            </div>

            <div className='animate__animated animate__slideInRight' style={{ marginTop: '-300px', display: 'flex', justifyContent: 'center' }}>
                <Card
                    style={{
                        width: '85%',
                        height: '430px',
                        backgroundColor: 'white',
                        boxShadow: '0 2px 4px rgba(103, 192, 247, 0.8)',
                        borderRadius: '25px',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'translateY(-10px)' : 'translateY(0)'
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                </Card>
            </div>

            <Row className='justify-content-center'>
                <Col md={6} style={{ textAlign: 'center', marginTop: '80px' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '30px', color: 'black', fontFamily: 'system-ui', padding: '20px' }}>HP Event 2024</h1>
                </Col>
            </Row>

            <div style={{ marginTop: '1em', marginBottom: '1em', display: 'flex', justifyContent: 'center' }}>
                <Card style={{
                    width: '95%',
                    maxWidth: '1000px',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                    margin: '5px',
                    borderRadius: '15px'
                }}>
                    <CardBody>
                        <Row className='justify-content-between' style={{ margin: '0.5em' }}>
                            <Col style={{ textAlign: 'center', paddingTop: '18px' }}>
                                <FontAwesomeIcon icon={faCalendarAlt} size="1.5em" />
                                <span style={{ marginLeft: '0.5em', fontSize: '1em', fontWeight: 'bold' }}>8 / มีนาคม / 2567</span>
                            </Col>
                            <Col>
                                <div style={{
                                    borderLeft: '0.1em solid #dcdcdc',
                                    height: '4em',
                                    margin: '0 1em',
                                    marginLeft: '0.5em',
                                    marginTop: '-1em',
                                    filter: 'blur(0.5px)',
                                }}>
                                </div>
                            </Col>
                            <Col style={{ textAlign: 'center', paddingTop: '18px' }}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} size="1.5em" />
                                <span style={{ marginLeft: '0.5em', fontSize: '1em', fontWeight: 'bold' }}>โอเชี่ยนทาวเวอร์ 2 ชั้น</span>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>

            <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: '100%', maxWidth: '1150px', backgroundColor: 'white', border: 'none' }}>
                    <CardBody>
                        <Row className='justify-content-between align-items-center' style={{ paddingBottom: '15px' }}>
                            <Col md={8}>
                                <CardTitle style={{ fontWeight: 'bold', fontSize: '20px', color: 'black', fontFamily: 'system-ui', paddingTop: '5px' }}>รายละเอียด</CardTitle>
                            </Col>

                            <Col md={3} className='d-flex align-items-center justify-content-end ml-auto' style={{ paddingBottom: '30px' }}>
                                <Link to='/Register'>
                                    <Button href="/Register"
                                        style={buttonStyle}
                                        onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
                                        onMouseOut={(e) => e.target.style.backgroundColor = '#00A8E3'}>
                                        ลงทะเบียน
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center justify-content-center' style={{paddingTop:'20px'}}>
                            <Col md={10}>
                                <Card.Text>
                                    <p style={{ textAlign: 'center', fontFamily: 'system-ui', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales ligula arcu, id hendrerit justo ultrices quis. Suspendisse consequat luctus eros at sodales. Aliquam hendrerit egestas ex volutpat rutrum. Vivamus luctus magna at sapien cursus bibendum. In augue elit, ornare ac interdum sed, pulvinar a tortor. Phasellus eget felis vestibulum, egestas nulla nec, luctus ante. Morbi efficitur massa ex, eget viverra turpis feugiat vitae. Etiam laoreet posuere iaculis. Vivamus sollicitudin est vitae ipsum eleifend tristique.</p>
                                    <br />
                                    <p style={{ textAlign: 'center', fontFamily: 'system-ui', fontSize: '16px' }}>Praesent vulputate sodales dui non condimentum. Quisque ut suscipit dui. Praesent sed mattis nisi, commodo venenatis turpis. Aliquam quis interdum ligula. Sed lectus nulla, rutrum vehicula egestas at, feugiat et urna. In vulputate ultrices facilisis. Quisque id felis sodales, ullamcorper augue vel, vehicula dolor. Phasellus ut dignissim lectus. Quisque blandit neque eu mi imperdiet, ac dictum lectus faucibus. Vestibulum sem mauris, lobortis vel tincidunt eu, elementum vel mi.</p>
                                </Card.Text>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>

            <div style={{ marginTop: '70px', marginBottom: '50px', display: 'flex', justifyContent: 'center' }}>
                <Row style={{ width: '100%', maxWidth: '1150px' }}>
                    <Col md={6}>
                        <h4 style={{ fontWeight: 'bold', fontFamily: 'system-ui', fontSize: '20px' }}>แผนที่จัดงาน</h4>
                        <p style={{ color: 'black', fontFamily: 'system ui', marginBottom: '0' }}>กรุงเทพมหานคร (สำนักงานใหญ่)</p>
                        <p style={{ color: 'black', fontFamily: 'system ui', marginBottom: '0' }}>ชั้น G อาคารโอเชี่ยนทาวเวอร์ 2 ซอย สุขุมวิท 19(วัฒนา)</p>
                        <p style={{ color: 'black', fontFamily: 'system ui', marginBottom: '0' }}>แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 1011</p>
                    </Col>
                    <Row>
                        <Col className='text-center' style={{ paddingTop: '50px', paddingBottom: '80px' }}>
                            <iframe
                                style={{ width: '100%', maxWidth: '1000px', height: "500px", borderRadius: '25px', boxShadow: '0 4px 5px rgba(0, 0, 0, 0.3)', border: 'none' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.391289926578!2d100.54413453955078!3d13.742782000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee517282911%3A0xdc1408f1efe6ebae!2sCoway%20Thailand%20(Official)!5e0!3m2!1sen!2sth!4v1709799170834!5m2!1sen!2sth"
                            ></iframe>
                        </Col>
                    </Row>
                </Row>
            </div>
        </div>
    )
}

export default Event;