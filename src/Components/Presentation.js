import React from 'react';
import {Card, Col, Row, Button} from 'react-materialize';
import Projects from './Projects';
import {Link} from 'react-router-dom';

const Presentation = () => (
    <div>
        <Row>
        <Col s={10} m={3} l={3}>
        <Card className="yellow-card">
            <h6>¡Hola! Mi nombre es:</h6>
            <h2 className='center'>Florencia Silva Olivera</h2>
            <h5>Soy una Front End Developer con
                conocimientos de JavaScript, ReactJS y React-Native
                con 6 meses de experiencia</h5>
            <p>Laboratorian <span className="bold">|</span> Agile <span className="bold">|</span> Autodidacta</p>
            <Row>
            <Button><a href="https://drive.google.com/file/d/16TrK313KGCVTyV___0vPYC6bYMOmpupo/view?usp=sharing" target="_blank" rel="noopener noreferrer">Descarga mi CV</a></Button>
            </Row>
            <div className="margin-links">
            <Row>
                <a href="https://github.com/florenciasilva" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fab fa-github-square"></i> github/florenciasilva</a>
            </Row>
            <Row>
                <a href="https://linkedin.com/in/florenciasilvaolivera" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fab fa-linkedin"></i> linkedin/florenciasilvaolivera</a>
            </Row>
            <Row>
                <a href="mailto:hensgrej@gmail.com" target="_blank" rel="noopener noreferrer" className="black-text links"><i class="fas fa-envelope-square"></i> hensgrej@gmail.com</a>
            </Row>
            <Row className="lang-link-row">
                <Link to='/en-us' className="lang-link">English</Link> <span className="bold">|</span> <Link to="/" className="lang-link">Español</Link>
            </Row>
            </div>
        </Card>

        </Col>
        <Projects />

        </Row>
    </div>
);

export default Presentation