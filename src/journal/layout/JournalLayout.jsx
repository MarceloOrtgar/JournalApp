import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth=240;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* {Navbar drawerWidth} */}
      <NavBar drawerWidth={drawerWidth}/>
      {/* SideBar drawerWidth */}

      <SideBar drawerWidth={drawerWidth}/>


      <Box componet='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
