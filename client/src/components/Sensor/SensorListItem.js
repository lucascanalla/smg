import React from 'react';
import SensorItem from './SensorItem';

const SensorListItem = ({Item, sensors}) => {
    return (
        <Item style={{display:'flex'}}>
            {
                sensors && sensors.map((data) => {
                    return(
                        <SensorItem
                            data={data}
                            key={data.id}
                        />
                    )
                })
            }
        </Item>
    );
};

export default SensorListItem;