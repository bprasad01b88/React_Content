import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title : "About Us",
        path : "/about-us",
        icon : <AiIcons.AiFillHome />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,

        subNav : [
            {
                title : "Our AIm",
                path : "about-us/aim",
                icon : <IoIcons.IoIosPaper />
            },
            {
                title : "Our Vision",
                path : 'about-us/vision',
                icon : <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title : "Services",
        path : "/service",
        icon : <IoIcons.IoIosPaper />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,

        subNav : [
            {
                title : "Service 1",
                path : "services/service1",
                icon : <IoIcons.IoIosPaper/>,
                cName : "sub-nav"
            },
            {
                title : "Service 2",
                path : "services/service2",
                icon : <IoIcons.IoIosPaper />,
                cName : "sub-nav"
            },
            {
                title : "Service 3",
                path : "services/service3",
                icon : <IoIcons.IoIosPaper />,
                cName : "sub-nav"
            }
        ]
    },
    {
        title : "Contact Us",
        path : "/contact",
        icon : <FaIcons.FaPhone />
    },
    {
        title : "Events",
        path : "/events",
        icon : <FaIcons.FaEnvelopeOpenText />,
        iconClosed : <RiIcons.RiArrowDownSFill />,
        iconOpened : <RiIcons.RiArrowUpSFill />,

        subNav : [
            {
                title : "Event 1",
                path : "events/event1",
                icon : <IoIcons.IoIosPaper />
            },
            {
                title : "Event 2",
                path : "events/event2",
                icon : <IoIcons.IoIosPaper />
            }
        ]
    },
    {
        title : "Support",
        path : "/support",
        icon : <IoIcons.IoMdHelpCircle />
    },
    {
        title : "FAQ",
        path : "/excel-export",
        icon : <IoIcons.IoIosHelpCircleOutline />
    }
]