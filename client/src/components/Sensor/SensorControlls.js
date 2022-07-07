import { Button } from '@mui/material';
import React from 'react';
import './Sensor.css'

const SensorControlls = ({failSensorsAction, offSensorsAction, initSensors, setMoreSensors, moreSensors}) => {

    const handleOff = () => offSensorsAction()
    const handleFail = () => failSensorsAction()
    const handleReset = () => initSensors()
    const handleAddSensors = () => setMoreSensors(!moreSensors)

    return (
        <>
        <h1>Controles</h1>
        <h4>Simulador de Eventos</h4>
        <div className='div-buttons'>
            <Button variant='contained' onClick={handleOff}>
                Sensor Apagado
            </Button>
            <Button variant='contained' onClick={handleFail}>
                Sensor Falla
            </Button>
            {/* <Button variant='contained' onClick={handleOk}>
                Sensor Ok
            </Button> */}
            <Button variant='contained' onClick={handleReset} style={{marginTop: '20px'}}>
                Reset
            </Button>
            <Button variant='outlined' onClick={handleAddSensors} style={{marginTop: '20px'}}>
               {
                    moreSensors ?
                        'Quitar Sensores Medios'
                    :
                        'Agregar Sensores Medios'
               } 
            </Button>
        </div>
        </>
    );
};

export default SensorControlls;