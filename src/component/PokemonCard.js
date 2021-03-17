import React, {useState} from 'react'
import {db} from '../firebase'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import './style.css'

const PokemonCard=({pokemon})=>{
    const [show, setShow] = useState(false);
    const [showCatchModal, setShowCatchModal] = useState(false);
    const [catchID, setCatchPokemon] = useState('');

    const catchPokemon=(e)=>{
        db.collection("pokemon_ids").add({
            pokemon_id:pokemon.id
        }).then(()=>{
            //
        }).catch((error)=>{
            console.log(error);
        })
       setShowCatchModal(true);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCatchModalClose = () => setShowCatchModal(false);

    return (
        <div className="Card col"> 
        
           <div className="card-content">
                <div className="flex-header">
                    <div className="card-img">
                        <img src={pokemon.sprites.front_default}/>
                    </div>
                    <div className="coins-box">
                        <div className="coin-value">
                            <p>30</p>
                        </div> 
                        <div className="coin-img-box">
                            <img src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"/>
                        </div>   
                    </div>
                </div>
                <div className="card-title">
                    <h4 className="title pt-3 pb-3">{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h4>
                </div>
                <div className="card-description">
                    <p>Weight: <span className="weight">{pokemon.weight}</span></p>
                    <p>Height: <span className="height">{pokemon.height}</span></p>
                    <p>Ability: <span className="ability">{pokemon.abilities[0].ability.name}</span></p>
                </div>
                <div className="btn-box">
                <Button onClick={catchPokemon} variant="danger">Catch</Button>

                <Modal show={showCatchModal} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row className="catch-modal-img">
                        <Col xs={12} md={12}>
                        <img src={pokemon.sprites.front_default}/>
                        </Col>
                    </Row>

                    <Row className="catch-modal-text">
                        <Col xs={6} md={12}>
                        Woohoo, you catched a new pokemon!
                        </Col>
                        
                    </Row>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="success" onClick={handleCatchModalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>


                <Button onClick={handleShow} variant="info">Info</Button>
                </div>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>
                    <p>{pokemon.stats[0].stat.name.charAt(0).toUpperCase()+pokemon.stats[0].stat.name.slice(1)}: <span className="weight">{pokemon.stats[0].base_stat}</span></p>
                    <p>{pokemon.stats[1].stat.name.charAt(0).toUpperCase()+pokemon.stats[1].stat.name.slice(1)}: <span className="weight">{pokemon.stats[1].base_stat}</span></p>
                    <p>{pokemon.stats[2].stat.name.charAt(0).toUpperCase()+pokemon.stats[2].stat.name.slice(1)}: <span className="weight">{pokemon.stats[2].base_stat}</span></p>
                    <p>{pokemon.stats[3].stat.name.charAt(0).toUpperCase()+pokemon.stats[3].stat.name.slice(1)}: <span className="weight">{pokemon.stats[3].base_stat}</span></p>
                    <p>{pokemon.stats[4].stat.name.charAt(0).toUpperCase()+pokemon.stats[4].stat.name.slice(1)}: <span className="weight">{pokemon.stats[4].base_stat}</span></p>
                    <p>{pokemon.stats[5].stat.name.charAt(0).toUpperCase()+pokemon.stats[5].stat.name.slice(1)}: <span className="weight">{pokemon.stats[5].base_stat}</span></p>
                    </Modal.Body> */}
                    <Container>
                    <Row>
                        <Col className="modal-content-left" xs={12} md={6}>
                        <p>{pokemon.stats[0].stat.name.charAt(0).toUpperCase()+pokemon.stats[0].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[0].base_stat}</span></p>
                        <p>{pokemon.stats[1].stat.name.charAt(0).toUpperCase()+pokemon.stats[1].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[1].base_stat}</span></p>
                        <p>{pokemon.stats[2].stat.name.charAt(0).toUpperCase()+pokemon.stats[2].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[2].base_stat}</span></p>
                        <p>{pokemon.stats[3].stat.name.charAt(0).toUpperCase()+pokemon.stats[3].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[3].base_stat}</span></p>
                        <p>{pokemon.stats[4].stat.name.charAt(0).toUpperCase()+pokemon.stats[4].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[4].base_stat}</span></p>
                        <p>{pokemon.stats[5].stat.name.charAt(0).toUpperCase()+pokemon.stats[5].stat.name.slice(1)}: <span className="modal-description">{pokemon.stats[5].base_stat}</span></p>
                        </Col>
                        <Col className="modal-img" xs={6} md={6}>
                            <img src={pokemon.sprites.front_default}/>
                        </Col>
                    </Row>

                    </Container>
                    <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
           </div>
        </div>
    )
};

export default PokemonCard;