import MenuItem from "./MenuItem"
import SubMenu from "./SubMenu"


const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="button_container">
                <img className="logo" src={require('../images/Logo.png')} alt=""/>
                <MenuItem icon="ion:home" title=" Home" />
                <MenuItem icon="raphael:users" title="User Accounts"/>
                <SubMenu icon="mingcute:delete-2-fill" title="Delete Posts" />
                <SubMenu icon="ion:ban" title="Banned Accounts"/>
                <SubMenu icon="zondicons:repost" title="Reposted Posts"/>
                <SubMenu icon="mingcute:delete-2-fill" title="Delete Account"/>
                <SubMenu icon="tabler:message-report" title="Reported Accounts"/>
                <SubMenu icon="ant-design:dislike-filled" title="Disliked Posts"/>
                <SubMenu icon="fa6-regular:copyright" title="Copyright Claims"/>
                <MenuItem icon="mdi:file-report" title="Reports"/>
                <MenuItem icon="ion:log-out" title="Log Out"/>
            </div>
            
        </div>
    )
}

export default Sidebar