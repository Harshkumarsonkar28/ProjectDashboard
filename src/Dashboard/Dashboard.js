import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";

const Dashboard = () => {
  // const linkStyle = {
  //   fontSize: "20px",
  //   textDecoration: "none",
  //   color: "#1976d2",
  // };

  // const activeLinkStyle = {
  //   ...linkStyle,
  //   textDecoration: "underline",
  //   color: "#8e6ac9",
  // };

  return (
    <div>
      {/* <Breadcrumbs aria-label="breadcrumb">
        <NavLink
          to="teacher"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Teacher
        </NavLink>
        <NavLink
          to="student"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Student
        </NavLink>
        <NavLink
          to="fee"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          Fees
        </NavLink>
      </Breadcrumbs> */}
      <Box component="main" sx={{ flexGrow: 1, p: 1, background: "white" }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Dashboard;
