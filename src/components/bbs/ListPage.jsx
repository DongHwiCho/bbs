import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

const ListPage = () => {
    const email = sessionStorage.getItem('email');
    const uid = sessionStorage.getItem('uid');

    return (
        <Row className='my-5 justify-content-center'>
            <Col xs={12} md={10} lg={8}>
                <h1 className='mb-5'>게시글목록</h1>
                {uid && 
                    <div className='text-end'>
                        <a href='/bbs/insert'>
                            <Button className='px-5'>글쓰기</Button>
                        </a>
                    </div>
                }
            </Col>
        </Row>
    )
}

export default ListPage
