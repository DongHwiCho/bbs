import React, { useState } from 'react'
import { Row, Col, Form, InputGroup, Card, Button } from 'react-bootstrap'

const Login = () => {

    const [form, setForm] = useState({
        email:'blue@test.com',
        pass:'12341234'
    });

    const {email, pass} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(email==="" || pass==="") {
            alert("이메일 또는 비밀번호를 입력하세요!")
        } else {
            //로그인 체크
        }
    }

    return (
        <Row className='my-5 justify-content-center'>
            <Col md={6} lg={4}>
                <Card>
                    <Card.Header>
                        <h3 className='text-center'>로그인</h3>
                    </Card.Header>
                    <Card.Body>
                        <form onSubmit={onSubmit}>
                            <InputGroup className='mb-2'>
                                <InputGroup.Text style={{width:100}} className='justify-content-center'>
                                    이메일
                                </InputGroup.Text>
                                <Form.Control name='email' value={email} onChange={onChange}/>
                            </InputGroup>
                            <InputGroup className='mb-2'>
                                <InputGroup.Text style={{width:100}} className='justify-content-center'>
                                    비밀번호
                                </InputGroup.Text>
                                <Form.Control name='pass' type='password' value={pass} onChange={onChange}/>
                            </InputGroup>
                            <div>
                                <Button className='w-100' type='submit'>로그인</Button>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login
