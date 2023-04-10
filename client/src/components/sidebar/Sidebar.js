import { Box } from "@mui/material";
import AddHomeIcon from '@mui/icons-material/AddHome';
import ChatIcon from '@mui/icons-material/Chat';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PeopleIcon from '@mui/icons-material/People';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArticleIcon from '@mui/icons-material/Article';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import PieChartIcon from '@mui/icons-material/PieChart';

import "./Sidebar.css";


function Sidebar() {
    return (<Box className="sidebar_main">
        <div className="dashboard_icon">
            <AddHomeIcon />
            <h4>Dashboards</h4>
        </div>

        <Box className="apps_pages">
            <p>APPS & PAGES</p>

            <div className="apps_pages_icon">
                <MailIcon />
                <h4>Email</h4>
            </div>
            <div className="apps_pages_icon">
                <ChatIcon />
                <h4>Chat</h4>
            </div>
            <div className="apps_pages_icon">
                <CalendarMonthIcon />
                <h4>Calendar</h4>
            </div>
            <div className="apps_pages_icon">
                <InsertDriveFileIcon />
                <h4>Invoice</h4>
            </div>
            <div className="apps_pages_icon">
                <PeopleIcon />
                <h4>User</h4>
            </div>
            <div className="apps_pages_icon">
                <InsertDriveFileIcon />
                <h4>Pages</h4>
            </div>
        </Box>






        <Box className="apps_pages">
            <p>UI ELEMENTS</p>

            <div className="apps_pages_icon">
                <FontDownloadIcon />
                <h4>Typography</h4>
            </div>
            <div className="apps_pages_icon">
                <RemoveRedEyeIcon />
                <h4>Icons</h4>
            </div>
            <div className="apps_pages_icon">
                <CreditCardIcon />
                <h4>Cards</h4>
            </div>
            <div className="apps_pages_icon">
                <InsertDriveFileIcon />
                <h4>Components</h4>
            </div>

        </Box>





        <Box className="apps_pages">
            <p>FORMS</p>

            <div className="apps_pages_icon">
                <ArticleIcon />
                <h4>Form Elements</h4>
            </div>
            <div className="apps_pages_icon">
                <ArticleIcon />
                <h4>Form Layouts</h4>
            </div>
            <div className="apps_pages_icon">
                <DomainVerificationIcon />
                <h4>Form Validation</h4>
            </div>
        </Box>

        <Box className="apps_pages">
            <p>CHARTS</p>

            <div className="apps_pages_icon">
                <PieChartIcon />
                <h4>Charts</h4>
            </div>
        </Box>
    </Box>)
}

export default Sidebar;