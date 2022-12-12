import React, { FC, useState } from 'react';
import { IconContext } from "react-icons";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { SidebarData } from './components/Data/SidebarData';
import Submenu from './components/Submenu';
import { Nav, NavIcon, SidebarNav, SidebarWrap } from './stylesSidebar';

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavIcon to='#' onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to='#' onClick={showSidebar}>
                        <AiOutlineClose />
                    </NavIcon>
                    { SidebarData.map((item, index) => {
                        return <Submenu item={ item } key={ index } />
                    }) }
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
    )
}

export default Sidebar