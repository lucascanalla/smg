import { Box, Paper, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';


const SensorPermit = ({Item, permit}) => {
    return (
        <Item style={{marginTop: '15px', marginBottom: '15px'}}>
            <Box className='sensor-permit-custom'>
                <Tooltip title={permit ? "Permite Cargar" : "Sensores Fallando"} placement="top">
                    <Link to={''} >
                        <p>
                            <strong>PERMIT</strong> <CircleIcon style={ permit ? {color:'green', marginLeft:'7px'} : {color:'red', marginLeft:'7px'}} />
                        </p>
                    </Link>  
                </Tooltip>
            </Box>
        </Item>
    );
};

export default SensorPermit;