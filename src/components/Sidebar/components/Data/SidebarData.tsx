import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineUser
} from 'react-icons/ai';
import { BsController } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { BsNewspaper } from 'react-icons/bs';
import { SidebarItem } from "../../../../models/Sidebaritem";

export const SidebarData: SidebarItem[] = [
    {
        title: 'Navegar',
        path: '/overview',
        icon: <AiOutlineHome />,
        iconOpened: <AiFillCaretDown />,
        iconClosed: <AiFillCaretUp />,
        subnav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <AiOutlineUser />
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <AiOutlineMoneyCollect />
            }
        ]
    },
    {
        title: 'Mangá',
        path: '/manga',
        icon: <HiOutlineBookOpen />
    },
    {
        title: 'Jogos',
        path: '/jogos',
        icon: <BsController />
    },
    {
        title: 'Notícias',
        path: '/noticias',
        icon: <BsNewspaper />
    }

]