import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Paper, Tooltip } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


const SensorItem = ({data}) => {
    
    const { id,
            on,
            status,
            location,
            description } = data

    return (
        <Box style={{display: 'flex', justifyContent:'center'}}>
            <Paper style={{marginRight:'5px'}} elevation={3} square>
                <p style={{margin:'5px'}}>Sensor n°: {id}</p>
                {
                    on && status &&
                    <Tooltip title="Sensor Ok" placement="top">
                        <Link to={''} >
                            <CircleIcon style={{color:'green'}} />
                        </Link>    
                    </Tooltip>
                }

                {
                    !on &&
                    <Tooltip title="Sensor Apagado" placement="top">
                        <Link to={''} >
                            <CircleIcon style={{color:'red'}} />
                        </Link>  
                    </Tooltip>
                }

                {
                    on && !status &&  
                    <Tooltip title="Sensor Falla Status" placement="top">
                        <Link to={''} >
                            <CircleIcon style={{color:'yellow'}} />
                        </Link>
                    </Tooltip>
                }
                <p style={{margin:'5px'}}>Locacion: {location}</p>

            </Paper>
            
        </Box>
    );
};

export default SensorItem;