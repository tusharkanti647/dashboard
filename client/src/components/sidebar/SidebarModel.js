import "./SidebarModel.css"

// import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
import { useState } from 'react';


const style = {
    // as 'absolute',
    
    position: 'absolute',
    top: '50%',
    left: 129,
    transform: 'translate(-50%, -50%)',
    height:564,
    width: 400,
    bgcolor: '#DDDDDD',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    // px: 4,
    pb: 3,
};


export default function SidebarModel() {
    const [open, setOpen] = useState(false);
    const [cookieValue, setCookieValue] = useState('');
    const [signInData, setSignInData] = useState({
        password: "",
        email: ""
    });


    //handel model close or open
    //-------------------------------------------------------------------------
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //-------------------------------------------------------------------------


    //handel control input
    //-------------------------------------------------------------------------
    const handelInput = (event) => {
        const { name, value } = event.target;
        setSignInData({ ...signInData, [name]: value });
    }




    //console.log(cookieValue);
    return (
        <div>
            <IconButton
                id="navbar_menu_icon"
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleOpen}
                color="black"
                className="menuIcon-toggle">
                <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                style={{}}
            >
                <Box  sx={{ ...style, width: 251, }}>

                    <Box  className="sidebar_main_Model">
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
                    </Box>

                    <Button onClick={handleClose} style={{color:"#888888"}}>Close</Button>

                </Box>
            </Modal>
        </div>
    );
}


