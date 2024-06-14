import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const Local = ({local}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                보기
            </Button>

            <Modal
                size='lg'
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>{local.place_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Map center={{ lat: local.y, lng: local.x }} style={{ width: "100%", height: "360px" }}>
                    <MapMarker position={{ lat: local.y, lng: local.x }}>
                        <div style={{ color:"#000" }}>{local.phone || "전화번호가 없습니다."}</div>
                    </MapMarker>
                </Map>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
        </>
        )
}

export default Local
