import { Icon } from '@iconify/react';


const MenuItem = (props) => {
    function myFunction() {
        alert("I am an alert box!");
    }
    return (
        <button
            className="menu"
            onClick={myFunction}
        >
            <Icon className='icon' icon={`${props.icon}`} />
            {props.title}
        </button>
    )
}

export default MenuItem