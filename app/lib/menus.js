import {
    FaServer,
    FaUserAlt,
    FaDownload,
    FaChartBar,
    FaHome
} from "react-icons/fa"

import { IoSettingsSharp } from "react-icons/io5"

const menus = [
    {
        id: 1,
        title: "Home",
        icon: FaHome,
        link: "/"
    },
    {
        id: 2,
        title: "Charts",
        icon: FaChartBar,
        link: "/charts"
    },
    {
        id: 3,
        title: "Users",
        icon: FaUserAlt,
        link: "/users"
    },
    {
        id: 4,
        title: "Activity",
        icon: FaServer,
        link: "/server-activity"
    },
    {
        id: 5,
        title: "Downloads",
        icon: FaDownload,
        link: "/downloads"
    },
    {
        id: 6,
        title: "Settings",
        icon: IoSettingsSharp,
        link: "/settings"
    }
]

export default menus