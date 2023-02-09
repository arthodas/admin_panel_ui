import { Icon } from '@iconify/react';
const SubMenu = (props) => {
    return (
        <button className="sub_menu">
            <Icon className='icon' icon={`${props.icon}`} />
            {props.title}
        </button>
    )
}

export default SubMenu