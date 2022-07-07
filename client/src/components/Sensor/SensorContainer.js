import React, { useState, useContext, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import SensorContext from '../../context/SensorContext';
import SensorControlls from './SensorControlls';
import SensorListItem from './SensorListItem';
import SensorPermit from './SensorPermit';
import { Item } from '../../utils/UxUtils';

const SensorContainer = () => {
    
    // const [on, setOn] = useState()
    const [moreSensors, setMoreSensors] = useState(false)
    const { sensors, 
            sensorsMiddle,
            initSensors, 
            failSensorsAction, 
            offSensorsAction,
            permit 
        } = useContext(SensorContext)

    return (
        <Container className='container-custom' fixed style={{marginTop: '30px'}}>
            <Grid container spacing={2}>
                <Grid item xs={8} >
                    <SensorListItem Item={Item} sensors={sensors} />
                    {
                        moreSensors &&
                            <SensorListItem Item={Item} sensors={sensorsMiddle} />
                    }
                    <SensorPermit Item={Item} permit={permit} />
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <SensorControlls 
                            failSensorsAction={failSensorsAction}
                            offSensorsAction={offSensorsAction}
                            initSensors={initSensors}
                            setMoreSensors={setMoreSensors}
                            moreSensors={moreSensors}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SensorContainer;