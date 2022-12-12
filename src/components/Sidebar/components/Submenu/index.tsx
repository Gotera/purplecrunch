import React, { FC, useState } from "react";
import { SidebarItem } from "../../../../models/Sidebaritem";
import { DropdownLink, SidebarLabel, SidebarLink } from './stylesSidebarLink'

type SidebarLinkProps = {
    item: SidebarItem;
};

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <React.Fragment>
            <SidebarLink to={ item.path } onClick={ showSubnav }>
                <div>
                    { item.icon }
                    <SidebarLabel> { item.title } </SidebarLabel>
                </div>
                <div> { item?.subnav && subnav ? item?.iconOpened : item?.iconClosed } </div>
            </SidebarLink>
            { subnav && item?.subnav?.map((subnavItem , index) => {
                return <DropdownLink 
                            to= { subnavItem.path }
                            key= { index }
                        >
                    { subnavItem.icon }
                    <SidebarLabel> { subnavItem.title } </SidebarLabel>
                </DropdownLink>
            }) }
        </React.Fragment>
    )
};

export default Submenu;