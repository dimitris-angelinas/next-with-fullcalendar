import React, { useEffect } from "react";
import {Modal, Button} from 'react-bootstrap'


const EventModal = ({reveal,setReveal,render}) => {

    return (

        <Modal animation={false} show={reveal} onHide={() => setReveal(false)}>
            <Modal.Header style={{border:'none', paddingBottom:'0'}}  closeButton />
            <Modal.Body>
                {render()}
            </Modal.Body>
        </Modal>
    )
}


export default EventModal

