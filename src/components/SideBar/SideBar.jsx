import "./SideBar.css";
import avatar from "../../images/av.jpg";

function SideBar() {
  return (
    <aside className="sidebar">
      <img src={avatar} alt="Jane Doe" className="sidebar__avatar" />
      <p className="sidebar__username">Jane Doe</p>
    </aside>
  );
}

export default SideBar;
