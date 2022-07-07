import { Container, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css'

const Footer = () => {
    return (
        <>
        <div style={{marginTop:'65px'}}>
            <a href='https://smgcontrols.com.ar/'>
                <h2 className='p-footer'>
                    <InstagramIcon style={{marginRight: '5px'}}/> <strong>SMG</strong>
                </h2>
                <p>Visita nuestra Web</p>
                <Button variant='outlined'>
                    Entre
                </Button>
            </a>
        </div>
        <div className='footer-custom'>
            <Container>
                <p style={{color:'white', padding: '25px'}}>
                    Copyright 2022
                </p>
            </Container>
        </div>
        </>
    );
};

export default Footer;