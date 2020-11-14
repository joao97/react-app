import './SideBar.css';
import SideBarItem from './SideBarItem'
function SideBar({data}) {
    return (
        <div id='side-bar' >
            {data.map((item, index) => {
                return <SideBarItem data={item}></SideBarItem>
            })}
        </div>
    );
}

export default SideBar;