import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { Status } from './types';



const StatusButton = () => {
    const StatusOptions = [] ;
    Object.values(Status).forEach((status) => { StatusOptions.push({ key: status, value: status, text: status }) });
    return (
       
            <Menu compact style={{marginLeft: 15}}>
                <Dropdown text='Status' options={StatusOptions} simple item />
            </Menu>
    )
}


export default StatusButton;

