import React, { Component } from 'react';
import { Form ,Button } from 'react-bootstrap';
class Gift extends Component {
    constructor() {
        super()
        this.state = {
            person: '',
            present:''
        }
    }
    render() {
        
        return (
            <div className="container">
                <Form > 
                    <Form.Group controlId="formPlaintext">
                        <Form.Label>Person</Form.Label>
                        <Form.Control size="sm" type="text" placeholder="Person Name" className="input-person" onChange={event=>this.setState({person:event.target.value})} />
                         <br />
                        <Form.Label>Present</Form.Label>
                        <Form.Control size="lg" type="text" placeholder="Present Name" 
                        className="input-present" onChange={event=>this.setState({present:event.target.value})} />
                    </Form.Group>
                    <Button className='btn-remove' onClick={()=>this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
                </Form>
            </div>
        );
    }
}

export default Gift;