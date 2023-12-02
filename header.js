import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Create from './Create';
import { 
	Navbar, 
	NavItem, 
	NavbarToggler, 
	Collapse, 
	NavLink, 
	Nav, 
	NavbarBrand 
} from 'reactstrap'; 

function App() { 

	// Collapse isOpen State 
	const [isOpen, setIsOpen] = React.useState(false); 

	return ( 
		<div style={{ 
			display: 'block', width: 1550, padding: 0,
		}}> 
			
			<Navbar color="light" light expand="md"> 
			
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} /> 
				<Collapse isOpen={isOpen} navbar> 
					<Nav className="mr-auto" navbar> 
						<NavItem> 
							<NavLink href="#"><b>APP LOGO</b></NavLink> 
						</NavItem> 
						&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
						<NavItem> 
							<NavLink href="#">DASHBOARD</NavLink> 
						</NavItem> 
						<NavItem> 
							<NavLink href="/Create">CREATE ADS</NavLink> 
						</NavItem> 
					</Nav> 
				</Collapse> 
			</Navbar> 
			
		</div > 
		
	); 
} 

export default App;
