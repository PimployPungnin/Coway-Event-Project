import React, { useState } from 'react'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import 'animate.css'
import axios from 'axios'

function Register() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showSignupForm, setShowSignupForm] = useState(true);
    const navigate = useNavigate();
    const mongoose = require('mongoose');

    // ประกาศ Schema
    const registrationSchema = new mongoose.Schema({
        fullName: String,
        email: String,
        phoneNumber: String,
        agentNumber: String,
        affiliation: String,
        gender: String,
        city: String
    });

    // ประกาศ Model จาก Schema
    const Registration = mongoose.model('Registration', registrationSchema);

    // สร้าง connection และเชื่อมต่อ MongoDB
    const uri = 'mongodb://localhost:27017/Regisdata/DataForm';
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('Connected to MongoDB');
    });
    const toggleForm = () => {
        setShowSignupForm(!showSignupForm);
    };

    const onSubmit = async (data) => {
        console.log(data);

        const registration = new Registration({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            agentNumber: data.agentNumber,
            affiliation: data.affiliation,
            gender: data.gender,
            city: data.city
        })

        const serviceId = 'service_dhma91y';
        const templateId = 'template_sjsmono';
        const publicKey = 'DfB3LkE-ArB0N_5Mc';

        const emailData = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: data.fullName,
                from_email: data.email,
                message: `
                    ข้อมูลการลงทะเบียน:
                    
                    ชื่อ-นามสกุล: ${data.fullName}
                    
                    อีเมล: ${data.email}
                    
                    หมายเลขโทรศัพท์: ${data.phoneNumber}
                    
                    เพศ: ${data.gender}mongodb://localhost:27017/Regisdata/DataForm
                    
                    จังหวัด: ${data.city}
                    
                    ขอบคุณที่ลงทะเบียนกับเรา!
                    
                    ด้วยความเคารพ,
                    Coway (Thailand) Co.,ltd
                `
            }
        };

        try {
            await registration.save();
            console.log('Registration data saved to MongoDB successfully');
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", emailData);
            console.log('Email sent successfully');
            reset();
            navigate('/success');
        } catch (error) {
            console.error('Error sending email:', error);
            console.error('Error saving registration data:', error);
        }
    };

    const buttonStyle = {
        width: '160px',
        borderRadius: '30px',
        border: 'none',
        backgroundColor: '#00A8E3',
        fontFamily: 'Segoe UI',
        padding: '12px',
        fontSize: '20px',
        fontWeight: 'bold'
    };

    return (
        <div className="register-page" style={{ padding: '55px' }}>
            <Container className='form-container animate__animated animate__zoomIn' style={{ maxWidth: '700px', paddingTop: '45px' }}>
                <div className="toggle-container">
                    <input type="checkbox" id="toggle" className="hidden" />
                    <label htmlFor="toggle" className={`toggle ${showSignupForm ? '' : 'unchecked'}`} onClick={toggleForm}>
                        <div className="slide"></div>
                        <span className="label">มีรหัสตัวแทน</span>
                        <span className="label">ไม่มีรหัสตัวแทน</span>
                    </label>
                </div>

                {showSignupForm ? (
                    <Form onSubmit={handleSubmit(onSubmit)} className='form-input d-flex flex-column justify-content-center animate__animated animate__zoomIn'>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md='11' controlId="validationCustomName" className="mt-3 mb-3 mx-auto" >
                                <Form.Label>ชื่อ-นามสกุล*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="fullName"
                                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && <Form.Control.Feedback type="invalid">*กรุณากรอกชื่อ-นามสกุล</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} md='11' controlId="validationCustomEmail" className="mt-3 mb-3 mx-auto">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="กรุณากรอกอีเมล"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <Form.Control.Feedback type="invalid">*กรุณากรอกอีเมล</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} md='11' controlId="validationCustomPhone" className="mt-3 mb-3 mx-auto">
                                <Form.Label>หมายเลขโทรศัพท์*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="กรุณากรอกเบอร์โทรศัพท์"
                                    minLength={10}
                                    {...register("phoneNumber", { required: true })}
                                />
                                {errors.phoneNumber && <Form.Control.Feedback type="invalid">*กรุณากรอกหมายเลขโทรศัพท์</Form.Control.Feedback>}
                            </Form.Group>
                        </Row>

                        <Row className="mb-3" style={{ paddingLeft: '23px', paddingRight: '23px' }}>
                            <Form.Group as={Col} controlId="validationCustomNumber">
                                <Form.Label>หมายเลขตัวแทน*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="agentNumber"
                                    placeholder="กรุณากรอกหมายเลขตัวแทน"
                                    {...register("agentNumber", { required: true })}
                                />
                                {errors.agentNumber && <Form.Control.Feedback type="invalid">*กรุณากรอกหมายเลขตัวแทน</Form.Control.Feedback>}
                            </Form.Group>
                            <Form.Group as={Col} controlId="validationCustomAffiliation">
                                <Form.Label>สังกัด*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="affiliation"
                                    placeholder="กรุณากรอกสังกัด"
                                    {...register("affiliation", { required: true })}
                                />
                                {errors.affiliation && <Form.Control.Feedback type="invalid">*กรุณากรอกสังกัด</Form.Control.Feedback>}
                            </Form.Group>
                        </Row>

                        <Row className='mb-3' style={{ paddingLeft: '23px', paddingRight: '23px' }}>
                            <Form.Group as={Col} controlId="validationCustomGender" >
                                <Form.Label>เพศ*</Form.Label>
                                <Form.Select className='select' name="gender" required {...register("gender")}>
                                    <option value="">กรุณาเลือกเพศ</option>
                                    <option value="หญิง">หญิง</option>
                                    <option value="ชาย">ชาย</option>
                                </Form.Select>
                                {errors.gender && <Form.Control.Feedback type="invalid">*กรุณาเลือกเพศ</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationCustomCity">
                                <Form.Label>จังหวัด*</Form.Label>
                                <Form.Select className='select' name="city" required {...register("city")}>
                                    <option value="">กรุณาเลือกจังหวัด</option>
                                    <option value="กระบี่">กระบี่</option>
                                    <option value="กรุงเทพฯ">กรุงเทพมหานคร</option>
                                    <option value="กาญจนบุรี">กาญจนบุรี</option>
                                    <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                                    <option value="กำแพงเพชร">กำแพงเพชร</option>
                                    <option value="ขอนแก่น">ขอนแก่น</option>
                                    <option value="จันทบุรี">จันทบุรี</option>
                                    <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                                    <option value="ชลบุรี">ชลบุรี</option>
                                    <option value="ชัยนาท">ชัยนาท</option>
                                    <option value="ชัยภูมิ">ชัยภูมิ</option>
                                    <option value="ชุมพร">ชุมพร</option>
                                    <option value="เชียงราย">เชียงราย</option>
                                    <option value="เชียงใหม่">เชียงใหม่</option>
                                    <option value="ตรัง">ตรัง</option>
                                    <option value="ตราด">ตราด</option>
                                    <option value="ตาก">ตาก</option>
                                    <option value="นครนายก">นครนายก</option>
                                    <option value="นครปฐม">นครปฐม</option>
                                    <option value="นครพนม">นครพนม</option>
                                    <option value="นครราชสีมา">นครราชสีมา</option>
                                    <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                                    <option value="นครสวรรค์">นครสวรรค์</option>
                                    <option value="นนทบุรี">นนทบุรี</option>
                                    <option value="นราธิวาส">นราธิวาส</option>
                                    <option value="น่าน">น่าน</option>
                                    <option value="บึงกาฬ">บึงกาฬ</option>
                                    <option value="บุรีรัมย์">บุรีรัมย์</option>
                                    <option value="ปทุมธานี">ปทุมธานี</option>
                                    <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                                    <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                                    <option value="ปัตตานี">ปัตตานี</option>
                                    <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                                    <option value="พังงา">พังงา</option>
                                    <option value="พัทลุง">พัทลุง</option>
                                    <option value="พิจิตร">พิจิตร</option>
                                    <option value="พิษณุโลก">พิษณุโลก</option>
                                    <option value="เพชรบุรี">เพชรบุรี</option>
                                    <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                                    <option value="แพร่">แพร่</option>
                                    <option value="ภูเก็ต">ภูเก็ต</option>
                                    <option value="มหาสารคาม">มหาสารคาม</option>
                                    <option value="มุกดาหาร">มุกดาหาร</option>
                                    <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                                    <option value="ยโสธร">ยโสธร</option>
                                    <option value="ยะลา">ยะลา</option>
                                    <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                                    <option value="ระนอง">ระนอง</option>
                                    <option value="ระยอง">ระยอง</option>
                                    <option value="ราชบุรี">ราชบุรี</option>
                                    <option value="ลพบุรี">ลพบุรี</option>
                                    <option value="ลำปาง">ลำปาง</option>
                                    <option value="ลำพูน">ลำพูน</option>
                                    <option value="เลย">เลย</option>
                                    <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                                    <option value="สกลนคร">สกลนคร</option>
                                    <option value="สงขลา">สงขลา</option>
                                    <option value="สตูล">สตูล</option>
                                    <option value="สมุทรปราการ">สมุทรปราการ</option>
                                    <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                                    <option value="สมุทรสาคร">สมุทรสาคร</option>
                                    <option value="สระแก้ว">สระแก้ว</option>
                                    <option value="สระบุรี">สระบุรี</option>
                                    <option value="สิงห์บุรี">สิงห์บุรี</option>
                                    <option value="สุโขทัย">สุโขทัย</option>
                                    <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                                    <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                                    <option value="สุรินทร์">สุรินทร์</option>
                                    <option value="หนองคาย">หนองคาย</option>
                                    <option value="หนองบัวลำพูน">หนองบัวลำภู</option>
                                    <option value="อ่างทอง">อ่างทอง</option>
                                    <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                                    <option value="อุดรธานี">อุดรธานี</option>
                                    <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                                    <option value="อุทัยธานี">อุทัยธานี</option>
                                    <option value="อุบลราชธานี">อุบลราชธานี</option>
                                </Form.Select>
                                {errors.city && <Form.Control.Feedback type="invalid">*กรุณาเลือกจังหวัด</Form.Control.Feedback>}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 text-center mx-auto" style={{ margin: '25px' }}>
                            <Form.Check
                                required
                                label={<p style={{ color: 'black' }}>ฉันยอมรับ <a href='https://www.coway.co.th/th/terms-of-conditions' target="_blank" rel="noopener noreferrer" style={{ color: '#00A8E3' }}>เงื่อนไขการให้บริการ</a> และ <a href='https://www.coway.co.th/th/privacy-policy' target="_blank" rel="noopener noreferrer" style={{ color: '#00A8E3' }}>นโยบายความเป็นส่วนตัว</a></p>}
                                feedback="*กรุณาอ่านข้อตกลงและกดยอมรับเงื่อนไข"
                                feedbackType="invalid"
                            />
                        </Form.Group>

                        <div className='text-center' style={{ margin: '10px' }}>
                            <Button type='submit'
                                style={buttonStyle}
                                onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#00A8E3'}>
                                ลงทะเบียน
                            </Button>
                        </div>
                    </Form>
                ) : (
                    <Form onSubmit={handleSubmit(onSubmit)} className='form-input d-flex flex-column justify-content-center animate__animated animate__zoomIn'>
                        <Row className='mb-3'>
                            <Form.Group as={Col} md='11' controlId="validationCustomName" className="mt-3 mb-3 mx-auto" >
                                <Form.Label>ชื่อ-นามสกุล*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="fullName"
                                    placeholder="กรุณากรอกชื่อ-นามสกุล"
                                    {...register("fullName", { required: true })}
                                />
                                {errors.fullName && <Form.Control.Feedback type="invalid">*กรุณากรอกชื่อ-นามสกุล</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} md='11' controlId="validationCustomEmail" className="mt-3 mb-3 mx-auto">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="กรุณากรอกอีเมล"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <Form.Control.Feedback type="invalid">*กรุณากรอกอีเมล</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} md='11' controlId="validationCustomPhone" className="mt-3 mb-3 mx-auto">
                                <Form.Label>หมายเลขโทรศัพท์*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="กรุณากรอกเบอร์โทรศัพท์"
                                    minLength={10}
                                    {...register("phoneNumber", { required: true })}
                                />
                                {errors.phoneNumber && <Form.Control.Feedback type="invalid">*กรุณากรอกหมายเลขโทรศัพท์</Form.Control.Feedback>}
                            </Form.Group>
                        </Row>

                        <Row className='mb-3' style={{ paddingLeft: '23px', paddingRight: '23px' }}>
                            <Form.Group as={Col} controlId="validationCustomGender" >
                                <Form.Label>เพศ*</Form.Label>
                                <Form.Select className='select' name="gender" required {...register("gender")}>
                                    <option value="">กรุณาเลือกเพศ</option>
                                    <option value="หญิง">หญิง</option>
                                    <option value="ชาย">ชาย</option>
                                </Form.Select>
                                {errors.gender && <Form.Control.Feedback type="invalid">*กรุณาเลือกเพศ</Form.Control.Feedback>}
                            </Form.Group>

                            <Form.Group as={Col} controlId="validationCustomCity">
                                <Form.Label>จังหวัด*</Form.Label>
                                <Form.Select className='select' name="city" required {...register("city")}>
                                    <option value="">กรุณาเลือกจังหวัด</option>
                                    <option value="กระบี่">กระบี่</option>
                                    <option value="กรุงเทพฯ">กรุงเทพมหานคร</option>
                                    <option value="กาญจนบุรี">กาญจนบุรี</option>
                                    <option value="กาฬสินธุ์">กาฬสินธุ์</option>
                                    <option value="กำแพงเพชร">กำแพงเพชร</option>
                                    <option value="ขอนแก่น">ขอนแก่น</option>
                                    <option value="จันทบุรี">จันทบุรี</option>
                                    <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
                                    <option value="ชลบุรี">ชลบุรี</option>
                                    <option value="ชัยนาท">ชัยนาท</option>
                                    <option value="ชัยภูมิ">ชัยภูมิ</option>
                                    <option value="ชุมพร">ชุมพร</option>
                                    <option value="เชียงราย">เชียงราย</option>
                                    <option value="เชียงใหม่">เชียงใหม่</option>
                                    <option value="ตรัง">ตรัง</option>
                                    <option value="ตราด">ตราด</option>
                                    <option value="ตาก">ตาก</option>
                                    <option value="นครนายก">นครนายก</option>
                                    <option value="นครปฐม">นครปฐม</option>
                                    <option value="นครพนม">นครพนม</option>
                                    <option value="นครราชสีมา">นครราชสีมา</option>
                                    <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
                                    <option value="นครสวรรค์">นครสวรรค์</option>
                                    <option value="นนทบุรี">นนทบุรี</option>
                                    <option value="นราธิวาส">นราธิวาส</option>
                                    <option value="น่าน">น่าน</option>
                                    <option value="บึงกาฬ">บึงกาฬ</option>
                                    <option value="บุรีรัมย์">บุรีรัมย์</option>
                                    <option value="ปทุมธานี">ปทุมธานี</option>
                                    <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
                                    <option value="ปราจีนบุรี">ปราจีนบุรี</option>
                                    <option value="ปัตตานี">ปัตตานี</option>
                                    <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
                                    <option value="พังงา">พังงา</option>
                                    <option value="พัทลุง">พัทลุง</option>
                                    <option value="พิจิตร">พิจิตร</option>
                                    <option value="พิษณุโลก">พิษณุโลก</option>
                                    <option value="เพชรบุรี">เพชรบุรี</option>
                                    <option value="เพชรบูรณ์">เพชรบูรณ์</option>
                                    <option value="แพร่">แพร่</option>
                                    <option value="ภูเก็ต">ภูเก็ต</option>
                                    <option value="มหาสารคาม">มหาสารคาม</option>
                                    <option value="มุกดาหาร">มุกดาหาร</option>
                                    <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
                                    <option value="ยโสธร">ยโสธร</option>
                                    <option value="ยะลา">ยะลา</option>
                                    <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
                                    <option value="ระนอง">ระนอง</option>
                                    <option value="ระยอง">ระยอง</option>
                                    <option value="ราชบุรี">ราชบุรี</option>
                                    <option value="ลพบุรี">ลพบุรี</option>
                                    <option value="ลำปาง">ลำปาง</option>
                                    <option value="ลำพูน">ลำพูน</option>
                                    <option value="เลย">เลย</option>
                                    <option value="ศรีสะเกษ">ศรีสะเกษ</option>
                                    <option value="สกลนคร">สกลนคร</option>
                                    <option value="สงขลา">สงขลา</option>
                                    <option value="สตูล">สตูล</option>
                                    <option value="สมุทรปราการ">สมุทรปราการ</option>
                                    <option value="สมุทรสงคราม">สมุทรสงคราม</option>
                                    <option value="สมุทรสาคร">สมุทรสาคร</option>
                                    <option value="สระแก้ว">สระแก้ว</option>
                                    <option value="สระบุรี">สระบุรี</option>
                                    <option value="สิงห์บุรี">สิงห์บุรี</option>
                                    <option value="สุโขทัย">สุโขทัย</option>
                                    <option value="สุพรรณบุรี">สุพรรณบุรี</option>
                                    <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
                                    <option value="สุรินทร์">สุรินทร์</option>
                                    <option value="หนองคาย">หนองคาย</option>
                                    <option value="หนองบัวลำพูน">หนองบัวลำภู</option>
                                    <option value="อ่างทอง">อ่างทอง</option>
                                    <option value="อำนาจเจริญ">อำนาจเจริญ</option>
                                    <option value="อุดรธานี">อุดรธานี</option>
                                    <option value="อุตรดิตถ์">อุตรดิตถ์</option>
                                    <option value="อุทัยธานี">อุทัยธานี</option>
                                    <option value="อุบลราชธานี">อุบลราชธานี</option>
                                </Form.Select>
                                {errors.city && <Form.Control.Feedback type="invalid">*กรุณาเลือกจังหวัด</Form.Control.Feedback>}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3 text-center mx-auto" style={{ margin: '25px' }}>
                            <Form.Check
                                required
                                label={<p style={{ color: 'black' }}>ฉันยอมรับ <a href='https://www.coway.co.th/th/terms-of-conditions' target="_blank" rel="noopener noreferrer" style={{ color: '#00A8E3' }}>เงื่อนไขการให้บริการ</a> และ <a href='https://www.coway.co.th/th/privacy-policy' target="_blank" rel="noopener noreferrer" style={{ color: '#00A8E3' }}>นโยบายความเป็นส่วนตัว</a></p>}
                                feedback="*กรุณาอ่านข้อตกลงและกดยอมรับเงื่อนไข"
                                feedbackType="invalid"
                            />
                        </Form.Group>

                        <div className='text-center' style={{ margin: '10px' }}>
                            <Button type='submit'
                                style={buttonStyle}
                                onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#00A8E3'}>
                                ลงทะเบียน
                            </Button>
                        </div>
                    </Form>
                )}
            </Container>
        </div>
    );
}

export default Register;
