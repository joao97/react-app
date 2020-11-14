import SideBar from './SideBar';
import './SideBarItem.css';
import React, { useState } from 'react'

function SideBarItem({ data }) {

    const [selected, setSelected] = useState(false);

    return (
        <div class='side-bar-item'  >
            {/* <img src={ data.img } ></img> */}
            <span onClick={() => setSelected(!selected)} >{ data.name }</span>
            {data.categories.map((item, index) => {
                return <p className={`${selected ? '' : 'hidden'}`} >{item.name}</p>
            })}
        </div>
    );
}


export default SideBarItem;