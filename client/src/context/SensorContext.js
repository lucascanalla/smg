import { createContext, useState } from "react";
import { dataMock, dataMiddleMock } from "../data";

const SensorContext = createContext();

const SensorProvider = ({children}) => {

    const [sensors, setSensors] = useState(dataMock)
    const [sensorsMiddle, setSensorsMiddle] = useState(dataMiddleMock)
    const [permit, setPermit] = useState(true)

    const initSensors = () => {
        setSensors(dataMock);
        setSensorsMiddle(dataMiddleMock);
        setPermit(true)
    }

    const failSensorsAction = () =>{
        
        const randomId = generateRandomInteger(8);
        console.log("randomId", randomId)
        const newArray = sensors.map(data => {
            if(data.id === randomId ) { 
                return {...data, status: false}
            }else{ 
                return data
            }
        })
        setSensors(newArray);
        setPermit(false)
    }

    const offSensorsAction = () =>{
        
        const randomId = generateRandomInteger(8);
        console.log("randomId", randomId)
        const newArray = sensors.map(data => {
            if(data.id === randomId ) { 
                return {...data, on: false}
            }else{ 
                return data
            }
        })
        setSensors(newArray);
        setPermit(false)
    }

    // Generate a number between 0 and 10, including 10
    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    // const [cartListItem, setCartListItem] = useState([])
    // const [total, setTotal] = useState(0)
    
    // const addProductToCart = (product, typeChosen, quantity) => {
    //     const { id, title, img } = product;
    //     const { type, price } = typeChosen;

    //     let isInCart = cartListItem.find(item => item.id === id && item.type === type)
    //     if(!isInCart){
    //         let itemToAdd = {
    //             'id': id,'title': title,
    //             'type': type,'price': price,
    //             'quantity': quantity,'img': img[0]
    //         }
    //         setCartListItem(cartListItem => [...cartListItem, itemToAdd]);
    //     }else{
    //         modifyQuantity(id, type, (isInCart.quantity + quantity))
    //     }
    // }

    // const modifyQuantity = (id, type, quantityToAdd) => {
    //     const newList = cartListItem.map(item => {
    //         if(item.id === id && item.type === type) { 
    //             return {...item, quantity: quantityToAdd}
    //         }else{ 
    //             return item
    //         }
    //     })
    //     setCartListItem(newList);
    // }

    // const removeItem = (itemId, type) => {
    //     let newCartListItem = cartListItem.filter(item => 
    //         (item.id !== itemId))
    //     setCartListItem(newCartListItem);
    // }

    // const clear = () => {
    //     setCartListItem([]);
    //     setTotal(0)
    // }

    // const getListItemTotal = () => {
    //     const initialValue = 0;
    //     const sumTotal = 
    //         cartListItem.reduce(
    //             (previousValue, currentValue) => 
    //                 previousValue + (currentValue.price * currentValue.quantity), 
    //                 initialValue
    //         );
    //     setTotal(sumTotal)
    // }

    const data = {
        initSensors,
        failSensorsAction,
        offSensorsAction,
        sensors,
        sensorsMiddle, 
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