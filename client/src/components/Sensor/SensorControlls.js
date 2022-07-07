import { Button } from '@mui/material';
import React from 'react';
import './Sensor.css'

const SensorControlls = ({
    overChargeSensorsAction, 
    offSensorsAction, 
    initSensors, 
    setMoreSensors, 
    moreSensors,
    quantityOfSensors,
    setQuantityOfSensors
    }) => {

    const handleOff = () => offSensorsAction()
    const handleOverCharge = () => overChargeSensorsAction()
    const handleReset = () => initSensors()
    const handleAddSensors = () => {
        setMoreSensors(!moreSensors)
        console.log("moreSensors: ", moreSensors)

        let newQuantity = moreSensors ? 8 : 16;
        setQuantityOfSensors(newQuantity) 
    }

    return (
        <>
        <h1>Controles</h1>
        <h4>Simulador de Eventos</h4>
        <div className='div-buttons'>
            <Button variant='contained' onClick={handleOff}>
                Sensor Apagado/Falla
            </Button>
            <Button variant='contained' onClick={handleOverCharge}>
                Sensor Sobrellenado
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