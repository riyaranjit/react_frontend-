import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CategoryIcon from '@material-ui/icons/Category';
import BookOnlineIcon from '@material-ui/icons/BookOutlined';
import AddCardIcon from '@material-ui/icons/AddSharp';
import Inventory2Icon from '@material-ui/icons/CardTravel';


export const SidebarData=[
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link:"/dashboard"
    },
    {
        title: "Category",
        icon: <CategoryIcon/>,
        link:"/admincategory"
    },
    {
        title: "View Service",
        icon: <Inventory2Icon/>,
        link:"/viewservice"
    },
    {
        title: "Add Service",
        icon: <AddCardIcon/>,
        link:"/addService"
    },
    {
        title: "Appointments",
        icon: <BookOnlineIcon/>,
        link:"/viewappointment"
    },
    // {
    //     title: "Logout",
    //     icon: <LogoutIcon/>,
    //     link:"/logout"
    // }
];
