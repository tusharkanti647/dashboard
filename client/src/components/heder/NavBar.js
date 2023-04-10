
import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./NavBar.css"
import SidebarModel from "../sidebar/SidebarModel";
//import Menu from "./model/Menu";
//import { Link } from "react-router-dom";
//import { useSelector } from "react-redux";


function NewNav() {




    return (<div className="navbar_container" >
        <header>
            <nav>
                <div className="left">
                    {/* <IconButton
                    id="navbar_menu_icon"
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        //   onClick={handleProfileMenuOpen}
                        color="black">
                        <MenuIcon style={{ fontSize: 40 }} />
                    </IconButton> */}
                    <SidebarModel />

                    <div className="nav_searchbaar">
                        <input type="text" name=""
                            // onChange={(e) => getText(e.target.value)}
                            placeholder="Search...." />

                        <IconButton sx={{ m: "0", p: "0" }}>
                            <SearchIcon id="search_icon" />
                        </IconButton>
                    </div>

                </div>

                <div className="right">

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        //   onClick={handleProfileMenuOpen}
                        color="black"
                    >
                        <Badge badgeContent={6} color="error">
                            <NotificationsIcon style={{ fontSize: 40,}} />
                        </Badge>


                    </IconButton>

                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        //   onClick={handleProfileMenuOpen}
                        color="black">
                        <DarkModeIcon style={{ fontSize: 40 }} />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                        //   onClick={handleProfileMenuOpen}
                        color="black">
                        <AccountCircleIcon style={{ fontSize: 40 }} />
                    </IconButton>

                </div>
            </nav>

        </header>
    </div>)
}

export default NewNav;