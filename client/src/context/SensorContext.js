import { createContext, useState } from "react";
import { dataMock, dataMiddleMock } from "../data";

const SensorContext = createContext();

const SensorProvider = ({children}) => {

    let initQuantity = 8;
    const [sensors, setSensors] = useState(dataMock)
    const [sensorsMiddle, setSensorsMiddle] = useState(dataMiddleMock)
    const [permit, setPermit] = useState(true)
    const [quantityOfSensors, setQuantityOfSensors] = useState(initQuantity);


    const initSensors = () => {
        setSensors(dataMock);
        setSensorsMiddle(dataMiddleMock);
        setPermit(true)
    }

    const overChargeSensorsAction = () =>{
        
        const randomId = generateRandomInteger(quantityOfSensors);
        console.log("randomId from overCharge: ", randomId)

        if(randomId >= 8){
            let newArray = sensorsMiddle.map(data => {
                return data.id === randomId ? {...data, status: false} : data;
            })
            setSensorsMiddle(newArray);
        }else{
            let newArray = sensors.map(data => {
                return data.id === randomId ?  {...data, status: false} : data;
            })
            setSensors(newArray);
        }
        setPermit(false)
    }

    const offSensorsAction = () =>{
         
        const randomId = generateRandomInteger(quantityOfSensors);
        console.log("randomId from offSensors: ", randomId)

        if(randomId >= 8){
            let newArray = sensorsMiddle.map(data => {
                return data.id === randomId ? {...data, on: false} : data;
            })
            setSensorsMiddle(newArray);
        }else{
            let newArray = sensors.map(data => {
                return data.id === randomId ? {...data, on: false} : data;
            })
            setSensors(newArray);
        }
        setPermit(false)
    }

    // Generate a number between 0 and 10, including 10
    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    const data = {
        initSensors,
        overChargeSensorsAction,
        offSensorsAction,
        sensors,
        sensorsMiddle,
        quantityOfSensors,
        setQuantityOfSensors, 
        permit
    }
    
    return (
        <SensorContext.Provider value={data}>
            {children}
        </SensorContext.Provider>
    );
};

export default SensorContext ;
export { SensorProvider }