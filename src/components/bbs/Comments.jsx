import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { app } from '../../firebaseInit'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import moment from 'moment'

const Comments = () => {
    const db = getFirestore(app);
    const [contents, setContents] = useState('');
    const {id} = useParams();
    const email = sessionStorage.getItem('email');

    const onClickInsert = () => {
        sessionStorage.setItem('target', `/bbs/read/${id}`);
        window.location.href = '/login';
    }

    const onInsert = async() => {
        if(contents===''){
            alert("댓글 내용을 입력하십시오.");
            return;
        }

        const data = {
            pid: id,
            email,
            contents,
            date: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        }
        // console.log(data);
        await addDoc(collection(db, `/comments`), data);
        alert('댓글 등록 완료');
        setContents("");
    }

    return (
        <div className='my-5'>
            {!email ?
                <div className='text-end'>
                    <Button onClick={onClickInsert}>댓글등록</Button>
                </div>
                :
                <div>
                    <Form.Control value={contents} onChange={(e) => {setContents(e.target.value)}} as="textarea" rows={2} placeholder='댓글 내용을 입력하세요.'/>
                    <div className='text-end mt-2'>
                        <Button onClick={onInsert}>등록</Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Comments
