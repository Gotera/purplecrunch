import {
    AiFillCaretDown,
    AiFillCaretUp,
    AiOutlineHome,
    AiOutlineMoneyCollect,
    AiOutlineFire
} from 'react-icons/ai';
import { BsController } from 'react-icons/bs';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { BsNewspaper } from 'react-icons/bs';
import { TbBrandFirebase } from 'react-icons/tb';
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
                title: 'Mais Populares',
                path: '/overview/populars',
                icon: <AiOutlineFire />
                
            },
            {
                title: 'Novidades',
                path: '/overview/news',
                icon: <AiOutlineMoneyCollect />
            }
            ,
            {
                title: 'Gêneros',
                path: '/overview/genres',
                icon: <TbBrandFirebase />
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