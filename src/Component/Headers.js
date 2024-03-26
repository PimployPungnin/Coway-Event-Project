import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLine, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Styles.css'
import 'animate.css'

function Headers() {

    const buttonStyle = {
        borderRadius: '20px',
        backgroundColor: '#00A8E3',
        padding: '11px',
        fontFamily: 'Gill Sans',
        fontSize: '18px',
        fontWeight: 'bold'
    };

    return (
        <div>
            <div className='p-5 text-center headers-bg animate__animated animate__fadeInUp'>
                <Row className="mt-5 mt-md-0">
                    <Col md={5} className='text-center' style={{ padding: '50px' }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '28px', color: 'black', fontFamily: 'system-ui' }}>Event ประจำเดือนนี้!</h2>
                        <p style={{ fontWeight: 'bold', fontFamily: 'system-ui', paddingTop: '20px', paddingBottom: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id luctus justo.
                            Curabitur elit orci, feugiat eu gravida non, ultrices ut metus. Pellentesque vehicula, tellus a ultricies pretium, felis lectus feugiat nibh, id interdum ex urna non tortor.
                            Cras eleifend lorem ac libero finibus, vel efficitur orci ornare.</p>
                        <Link to="/event">
                            <Button href="/.Event"
                                style={buttonStyle}
                                onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#00A8E3'}>
                                รายละเอียดเพิ่มเติม
                            </Button>
                        </Link>
                    </Col>

                    <Col md={6} className='text-center mt-4 mt-md-0 ml-auto'>
                        <img src="/hp.jpg" alt="HPImage" style={{ borderRadius: '25px', width: 'auto', height: 'auto', maxWidth: '380px', boxShadow: '0 5px 6px rgba(0, 157, 220, 0.5)' }} />
                    </Col>
                </Row>
            </div>

            <div>
                <Container className='headers-container'>
                    {/* Row ของหัวข้อ contenct COWAY คุณสมบัติและสวัสดิการ */}
                    <Row className='mt-5'>
                        <Col md={6}>
                            <div className='text-container' style={{ marginBottom: '80px' }}>
                                <Row className="mt-5">
                                    <Col style={{ paddingTop: '20px' }}>
                                        <h2>
                                            <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system-ui' }}>เพิ่ม</span>
                                            <span style={{ fontWeight: 'bold', fontFamily: 'system-ui' }}>โอกาส</span>
                                            <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system-ui' }}> สร้าง</span>
                                            <span style={{ fontWeight: 'bold', fontFamily: 'system-ui' }}>รายได้</span>
                                        </h2>
                                        <h2>
                                            <span style={{ fontWeight: 'bold', fontFamily: 'system-ui' }}>กับ</span>
                                            <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system-ui', fontSize: '30px' }}> COWAY!</span>
                                        </h2>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col md={10}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Donec tincidunt ex hendrerit mauris porttitor, at malesuada libero pulvinar.
                                            Etiam finibus mi a leo blandit rhoncus. </p>
                                    </Col>
                                </Row>
                                <h2 style={{ fontWeight: 'bold', fontFamily: 'system-ui', fontSize: '26px', marginBottom: '20px', paddingTop: '35px' }}>คุณสมบัติ</h2>
                                <Row className='mt-2'>
                                    <Col md={6}>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>เพศ ชาย,หญิง</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>ไม่จำกัดวุฒิการศึกษา</p>
                                        </span>
                                    </Col>
                                    <Col md={6}>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>อายุ 20 ปี ขึ้นไป</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>ยินดีรับนักศึกษาจบใหม่,ยินดีรับผู้ไม่มีประสบการณ์</p>
                                        </span>
                                    </Col>
                                </Row>
                                <h2 style={{ fontWeight: 'bold', fontFamily: 'system-ui', fontSize: '26px', marginBottom: '20px' }}>สวัสดิการ</h2>
                                <Row className='mt-3'>
                                    <Col md={6}>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>มีเวลาการทำงานที่ยืดหยุ่น</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>ค่า Commission</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>Incentive รายเดือน / ไตรมาส</p>
                                        </span>
                                    </Col>
                                    <Col md={6}>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>ค่าตอบแทนพิเศษ</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>Activity Allowance</p>
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', marginBottom: '45px', marginLeft: '20px' }}>
                                            <FontAwesomeIcon icon={faCircle} style={{ color: '#00A8E3', marginRight: '5px' }} />
                                            <p style={{ marginBottom: '0', fontSize: '17px' }}>ทริปท่องเที่ยวต่างประเทศ</p>
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='bg-image text-center text-md-right mt-4 mt-md-0 ml-auto'>
                                <Col>
                                    <img src='https://i.pinimg.com/originals/5c/5e/25/5c5e25cdfadb5df4d1da631b7f50088d.jpg' alt="BTSImage" style={{ borderRadius: '10px', maxWidth: '355px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }} />
                                </Col>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div>
                <Container className='headers-container'>
                    <Row className='mt-5' style={{ paddingTop: '30px', paddingBottom: '50px' }}>
                        <Col md={5}>
                            <div className='text-container' style={{ marginBottom: '120px' }}>
                                <Row>
                                    <Col>
                                        <h2>
                                            <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system ui' }}>ติดต่อ</span>
                                            <span style={{ fontWeight: 'bold', fontFamily: 'system ui' }}>หรือ</span>
                                            <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system ui' }}>สอบถาม</span>
                                        </h2>
                                        <h2 style={{ fontWeight: 'bold', fontFamily: 'system ui' }}>ข้อมูลเพิ่มเติม</h2>
                                    </Col>
                                </Row>
                                <Row className="mt-3" >
                                    <Col md={10}>
                                        <span style={{ color: '#00A8E3', fontWeight: 'bold', fontFamily: 'system ui' }}>
                                            <p style={{ marginBottom: '0' }}>กรุงเทพมหานคร (สำนักงานใหญ่)</p>
                                        </span>
                                        <span style={{ color: 'black', fontFamily: 'system ui' }}>
                                            <p style={{ marginBottom: '0' }}>ชั้น G อาคารโอเชี่ยนทาวเวอร์ 2 ซอย สุขุมวิท 19(วัฒนา)</p>
                                        </span>
                                        <span style={{ color: 'black', fontFamily: 'system ui' }}>
                                            <p style={{ marginBottom: '0' }}>แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 1011</p>
                                        </span>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        {/* Contact ส่วน Card */}
                        <Col md={7} className='text-center' >
                            <div className="d-flex flex-wrap justify-content-around ">
                                <Card className='headers-card' style={{ width: '165px', height: '200px', backgroundColor: '#EFF8FE', boxShadow: '0 2px 4px rgba(103, 192, 247, 0.8)', margin: '3px', border: 'none', borderRadius: '25px' }}>
                                    <Card.Body style={{ marginTop: '50px' }}>
                                        <Card.Title style={{ textAlign: 'center' }}>
                                            <FontAwesomeIcon icon={faPhone} size='2x' />
                                        </Card.Title>
                                        <Card.Text style={{ paddingTop: '10px', fontFamily: 'sans-serif' }}>
                                            xx-xxx-xxxx
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className='headers-card' style={{ width: '165px', height: '200px', backgroundColor: '#EFF8FE', boxShadow: '0 2px 4px rgba(103, 192, 247, 0.8)', margin: '3px', border: 'none', borderRadius: '25px' }}>
                                    <Card.Body style={{ marginTop: '50px' }}>
                                        <Card.Title style={{ textAlign: 'center' }}
                                        ><FontAwesomeIcon icon={faLine} size='2x' />
                                        </Card.Title>
                                        <Card.Text style={{ padding: '10px', fontFamily: 'sans-serif' }}>
                                            xxxx-xxx
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card className='headers-card' style={{ width: '165px', height: '200px', backgroundColor: '#EFF8FE', boxShadow: '0 2px 4px rgba(103, 192, 247, 0.8)', margin: '3px', border: 'none', borderRadius: '25px' }}>
                                    <Card.Body style={{ marginTop: '50px' }}>
                                        <Card.Title style={{ textAlign: 'center' }}>
                                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                                        </Card.Title>
                                        <Card.Text style={{ padding: '10px', fontFamily: 'sans-serif' }}>
                                            Coway Thailand
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Headers