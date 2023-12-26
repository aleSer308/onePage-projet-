import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const imgLogo = '../assets/images/IYV.png';
const nameLogo = "imagen & vista";

export function Logo(){
    return (
        <>
        <Container>
            <Row>
            <Col>
                <Image 
                    src={imgLogo} 
                    alt={nameLogo}
                    width={40}
                    height={40}
                    roundedCircle
                />
            </Col>
            </Row>
        </Container>
        </>
    )
};

