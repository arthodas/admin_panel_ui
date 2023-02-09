import { Icon } from '@iconify/react';
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left">
                <Button><Icon className="navbar-icon" icon="fa6-solid:bars" /></Button>
            </div>
            <div className="right">
                <Button><Icon className="navbar-icon" icon="bi:envelope-fill" /></Button>
                <Button><Icon className="navbar-icon" icon="mdi:bell" /></Button>
                <Button><Icon className="navbar-icon" icon="ph:user-circle-fill" /></Button>
            </div>
        </div>
    )
}

export default Navbar