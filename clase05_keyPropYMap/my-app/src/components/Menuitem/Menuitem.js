import React from 'react'

function Menuitem(props){
    console.log(props);
    return (
            <li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className={`fas fa-fw ${props.dataItem.icon}`}></i>
					<span>{props.dataItem.menu}</span>
				</a>
			</li>        
    )
}

export default Menuitem;