import React from "react";

import { NavBar } from "./Components/Navbar/NavBar";
import { SideBar } from "./Components/SideBar/SideBar";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className='grid-container'>
    Hi
      {/* <NavBar OpenSidebar={OpenSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      /> */}
    </div>
  );
}

export default Home;
