import React from 'react';
import 'animate.css';
import './Styles.css';

function Success() {
    return (
        <div className='animate__animated animate__zoomIn' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '200px', paddingBottom:'157px'}}>
            <img src='/circle-envelope.png' alt='Envelope' style={{ width: '80px', height: '80px' }} />
            <h1 style={{ fontSize: '38px', fontFamily: 'Gill Sans', fontWeight: 'bold', marginTop: '20px', color: '#00A8E3' }}>ลงทะเบียนสำเร็จ!</h1>
            <p style={{ fontSize: '20px', marginTop: '10px', fontWeight: 'bold', fontFamily: 'Gill Sans' }}>กรุณาตรวจสอบอีเมลของคุณ เพื่อตรวจสอบความถูกต้องของข้อมูล</p>
        </div>
    );
}

export default Success;
