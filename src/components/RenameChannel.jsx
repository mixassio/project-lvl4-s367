import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class RenameChannel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button size="sm" variant="outline-warning" onClick={this.handleShow}><span className="oi oi-pencil" /></Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Rename channel</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={this.handleClose}>
              RENAME
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default RenameChannel;