router.post('/register', async (req, res) => {
    try {
        // ตรวจสอบและประมวลผลข้อมูลที่ส่งมาจาก client
        const { fullName, email, phoneNumber, agentNumber, affiliation, gender, city } = req.body;
        if (!fullName || !email || !phoneNumber || !agentNumber || !affiliation || !gender || !city) {
            return res.status(400).json({ error: 'กรุณากรอกข้อมูลที่จำเป็นให้ครบถ้วน' });
        }

        // บันทึกข้อมูลลงใน MongoDB
        const registration = new Registration(req.body);
        await registration.save();

        // ส่งอีเมลยืนยัน
        await transporter.sendMail({
            from: 'pimployforwork@gmail.com',
            to: email,
            subject: 'ยืนยันการลงทะเบียน',
            text: `ขอบคุณที่ลงทะเบียนกับเรา\n\n
                ชื่อ-นามสกุล: ${fullName}\n
                อีเมล: ${email}\n
                หมายเลขโทรศัพท์: ${phoneNumber}\n
                หมายเลขตัวแทน: ${agentNumber}\n
                สังกัด: ${affiliation}\n
                เพศ: ${gender}\n
                จังหวัด: ${city}`
        });

        res.status(201).send('Registration successful');
    } catch (error) {
        res.status(400).send(error);
    }
});
