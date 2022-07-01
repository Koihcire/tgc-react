import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function DisplayDeleteTask(props){
    return(
        <React.Fragment>
            <React.Fragment>
                <Modal show={true}>
                    <ModalHeader>
                        <ModalTitle>Confirm Delete</ModalTitle>
                    </ModalHeader>
                    <ModalBody>{props.description}</ModalBody>
                    <ModalFooter>
                        <button className="btn btn-sm btn-danger" onClick={() => {
                            props.processDeleteTask(props.task)
                        }}>Yes</button>
                        <button className="btn btn-sm btn-primary" onClick={() => {
                            props.endDeleteTask()
                        }}>No</button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        </React.Fragment>
    )
}