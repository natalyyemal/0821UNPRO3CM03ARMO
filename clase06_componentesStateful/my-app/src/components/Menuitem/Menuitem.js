import React, {Component} from 'react';

class Menuitem extends Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	clickeame(){
		console.log('click en el menú:' + this.props.dataItem.menu);
	}

    render(){
		return (
				<li onClick={() => this.clickeame()} className="nav-item">
					<a className="nav-link collapsed" href="/">
						<i className={`fas fa-fw ${this.props.dataItem.icon}`}></i>
						<span>{this.props.dataItem.menu}</span>
					</a>
				</li>        
		)
	}
}

export default Menuitem;