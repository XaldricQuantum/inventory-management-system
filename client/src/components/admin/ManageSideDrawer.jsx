
import { Drawer, List, ListItemButton, Divider, ListItem, ListItemText, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const ManageSideDrawer = ({ open, onClose, toggleSidebar }) => {

    const navItems = [
        { to: '/manage/users', label: 'User Management' },
        { to: '/manage/settings', label: 'Settings' },
        { to: '/manage/logs', label: 'Log Monitoring' },
    ];


    const linkStyles = ({ isActive}) => ({
    color: isActive ? '#1976d2' : 'inherit',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none',
    });

    const drawerContent = (
        <Box sx={{ width: drawerWidth , p: 2 }} >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }} >
                <Typography variant="h6" component="div">
                    Admin Dashboard
                </Typography>
                <IconButton onClick={onClose} sx={{ color: 'inherit' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List >
                {navItems.map((link) => (
                    <NavLink to={link.to} key={link.to} style={linkStyles}>
                        <ListItemButton>
                            <ListItemText primary={link.label} />
                        </ListItemButton>
                    </NavLink>
                ))}
            </List>
            
            <Box sx={{ mt: 'auto'}} >
                <Divider />
                <List >
                    <ListItem disablePadding>
                        <NavLink to="/logout" style={{ textDecoration: 'none', width: '100%' }} >
                            <ListItemButton 
                                sx={{ 
                                    backgroundColor: '#f87171',
                                    color: '#fff',
                                    borderRadius: 1,
                                    m: 1,
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: '#ef4444',
                                    },
                                }}>
                                <ListItemText primary="Logout" sx={{ textAlign: 'center'}}/>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                    <ListItem  disablePadding>
                         <NavLink to="/dashboard" style={{ textDecoration: 'none', width: '100%' }} >
                            <ListItemButton 
                                sx={{ 
                                    backgroundColor: '#3b82f6',
                                    color: '#fff',
                                    borderRadius: 1,
                                    m: 1,
                                    px: 2,
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 98, 189, 0.96)',
                                    },
                                }}>
                                <ListItemText primary="Dashboard" sx={{ textAlign: 'center'}}/>
                            </ListItemButton>
                        </NavLink>
                    </ListItem>
                </List>
            </Box>
        
        </Box>
    );


    return (
        <div>
            <IconButton onClick={toggleSidebar} sx={{ position: 'fixed', top: 0, left: 10, zIndex: 1000 }}>
                <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer open={open} onClose={onClose} >
                {drawerContent}
            </Drawer>
        </div>
    );
};

export default ManageSideDrawer;


