// import React, { useState, useEffect } from "react";
// import emp from "../Data/Employee.json";
// import {
//   Stack,
//   TextField,
//   Card,
//   CardContent,
//   Typography,
//   MenuItem,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TableSortLabel,
// } from "@mui/material";
// import Progress from "./Progress";
// import Empbar from "./Empbar";
// import Teachertable from "./Teachertable";

// const Teacher = () => {
//   const [searchParams, setSearchParams] = useState({
//     department: "",
//     gender: "",
//     district: "",
//   });
//   const [filteredData, setFilteredData] = useState(emp.Sheet1);
//   const [counts, setCounts] = useState({ total: 0, male: 0, female: 0 });
//   const [departmentForDistrict, setDepartmentForDistrict] = useState(0);

//   useEffect(() => {
//     const total = filteredData.length;
//     const male = filteredData.filter((emp) => emp.Gender === "Male").length;
//     const female = filteredData.filter((emp) => emp.Gender === "Female").length;
//     setCounts({ total, male, female });
//     const districtCount = filteredData.filter(
//       (emp) => emp.District === searchParams.district
//     ).length;
//     setDepartmentForDistrict(districtCount);
//   }, [filteredData, searchParams.district]);

//   const handleSearchChange = (event) => {
//     const { name, value } = event.target;
//     const newSearchParams = { ...searchParams, [name]: value };
//     setSearchParams(newSearchParams);

//     const filtered = emp.Sheet1.filter((employee) => {
//       return (
//         (newSearchParams.department === "" ||
//           employee.DEPARTMENT === newSearchParams.department) &&
//         (newSearchParams.gender === "" ||
//           employee.Gender === newSearchParams.gender) &&
//         (newSearchParams.district === "" ||
//           employee.District === newSearchParams.district)
//       );
//     });

//     setFilteredData(filtered);
//   };

//   return (
//     <div>
//       <Stack spacing={4}>
//         {/* Search Area */}
//         <div
//           style={{
//             border: "1px solid black",
//             display: "flex",
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <TextField
//             label="Search by Department"
//             variant="outlined"
//             name="department"
//             value={searchParams.department}
//             onChange={handleSearchChange}
//             size="small"
//             select
//             fullWidth
//             style={{ marginBottom: "20px", marginTop: "20px", width: "520px" }}
//           >
//             <MenuItem value="">All Departments</MenuItem>
//             <MenuItem value="ADMIN">ADMIN</MenuItem>
//             <MenuItem value="FRONT DESK">FRONT DESK</MenuItem>
//             <MenuItem value="BACK OFFICE">BACK OFFICE</MenuItem>
//             <MenuItem value="SOCIAL MEDIA">SOCIAL MEDIA</MenuItem>
//             <MenuItem value="DEPT OF INTERIOR DESIGN">
//               DEPT OF INTERIOR DESIGN
//             </MenuItem>
//             <MenuItem value="TALLY EDGE & AISECT">TALLY EDGE & AISECT</MenuItem>
//             <MenuItem value="JETKING & WEB DEVLOPMENT">
//               JETKING & WEB DEVLOPMENT
//             </MenuItem>
//             <MenuItem value="FASHION DESIGN & GRAPHIC ,ANIMATION">
//               FASHION DESIGN & GRAPHIC ,ANIMATION
//             </MenuItem>
//             <MenuItem value="ACCOUNTS">ACCOUNTS</MenuItem>
//             <MenuItem value="COMMERCIAL">COMMERCIAL</MenuItem>
//             <MenuItem value="HOUSE KEEPING">HOUSE KEEPING</MenuItem>
//             <MenuItem value="DEPT OF WEB DEVELOPMENT">
//               DEPT OF WEB DEVELOPMENT
//             </MenuItem>
//             <MenuItem value="DEPT OF GRAPHIC & ANIMATION">
//               DEPT OF GRAPHIC & ANIMATION
//             </MenuItem>
//             <MenuItem value="JETKING">JETKING</MenuItem>
//             <MenuItem value="AISECT">AISECT</MenuItem>
//             <MenuItem value="TALLY EDGE">TALLY EDGE</MenuItem>
//             <MenuItem value="DEPT OF FASHION DESIGN">
//               DEPT OF FASHION DESIGN
//             </MenuItem>
//             <MenuItem value="GRAPHIC, ANIMATION">GRAPHIC, ANIMATION</MenuItem>
//             <MenuItem value="TALLY EDGE, AISECT">TALLY EDGE, AISECT</MenuItem>
//           </TextField>

//           <TextField
//             label="Search by Gender"
//             variant="outlined"
//             name="gender"
//             value={searchParams.gender}
//             onChange={handleSearchChange}
//             size="small"
//             select
//             fullWidth
//             style={{ marginBottom: "20px", marginTop: "20px", width: "520px" }}
//           >
//             <MenuItem value="">All Genders</MenuItem>
//             <MenuItem value="Male">Male</MenuItem>
//             <MenuItem value="Female">Female</MenuItem>
//           </TextField>
//           <TextField
//             label="Search by District"
//             variant="outlined"
//             name="district"
//             value={searchParams.district}
//             onChange={handleSearchChange}
//             size="small"
//             select
//             fullWidth
//             style={{ marginBottom: "20px", marginTop: "20px", width: "520px" }}
//           >
//             <MenuItem value="">All Districts</MenuItem>
//             <MenuItem value="Durg">Durg</MenuItem>
//             <MenuItem value="Raipur">Raipur</MenuItem>
//             <MenuItem value="Bilaspur">Bilaspur</MenuItem>
//             <MenuItem value="Bharatpur">Bharatpur</MenuItem>
//             <MenuItem value="Dhamtari">Dhamtari</MenuItem>
//             <MenuItem value="Khairagarh">Khairagarh</MenuItem>
//             <MenuItem value="Bilaigarh">Bilaigarh</MenuItem>
//             <MenuItem value="Goraila">Goraila</MenuItem>
//             <MenuItem value="Surajpur">Surajpur</MenuItem>
//             <MenuItem value="Dongargarh">Dongargarh</MenuItem>
//             <MenuItem value="kondagaon">kondagaon</MenuItem>
//             <MenuItem value="Sukma">Sukma</MenuItem>
//             <MenuItem value="Balrampur">Balrampur</MenuItem>
//             <MenuItem value="koriya">koriya</MenuItem>
//             <MenuItem value="Sarguja">Sarguja</MenuItem>
//             <MenuItem value="Sakti">Sakti</MenuItem>
//             <MenuItem value="Rajnandgaon">Rajnandgaon</MenuItem>
//             <MenuItem value="Raigarh">Raigarh</MenuItem>
//             <MenuItem value="Manpur">Manpur</MenuItem>
//             <MenuItem value="Mahasamund">Mahasamund</MenuItem>
//             <MenuItem value="kanker">kanker</MenuItem>
//             <MenuItem value="Jashpur">Jashpur</MenuItem>
//             <MenuItem value="Jahangir-champa">Jahangir-champa</MenuItem>
//             <MenuItem value="Dantewada">Dantewada</MenuItem>
//             <MenuItem value="Bastar">Bastar</MenuItem>
//             <MenuItem value="Balod">Balod</MenuItem>
//           </TextField>
//         </div>
//         <div
//           style={{
//             border: "1px solid black",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <Card sx={{ background: "#FFCDD2", width: "390px" }}>
//             <CardContent
//               sx={{
//                 background: "#836394",
//                 width: "390px",
//                 height: "70px",
//                 boxShadow: "2px 2px 4px gray",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 Total No. Employees
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 {counts.total}
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card
//             sx={{
//               background: "#C8E6C9",
//               width: "390px",
//               boxShadow: "2px 2px 4px black",
//             }}
//           >
//             <CardContent>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 Total No. Male
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 {counts.male}
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card
//             sx={{
//               background: "#BBDEFB",
//               width: "390px",
//               boxShadow: "2px 2px 4px black",
//             }}
//           >
//             <CardContent>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 Total No. Female
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 {counts.female}
//               </Typography>
//             </CardContent>
//           </Card>
//           <Card
//             sx={{
//               background: "#F5F5F5",
//               width: "390px",
//               boxShadow: "2px 2px 4px black",
//             }}
//           >
//             <CardContent>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 Sorted By District
//               </Typography>
//               <Typography
//                 sx={{
//                   fontSize: "15px",
//                   color: "white",
//                   textAlign: "center",
//                   fontWeight: "700",
//                 }}
//               >
//                 {departmentForDistrict}
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>
//         {/* Charts */}
//         <div
//           style={{
//             border: "0px solid black",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <Paper elevation={4}>
//             <div style={{ border: "0px solid #FFF9C4" }}>
//               <Progress value={counts.total} />
//             </div>
//           </Paper>
//           <Paper elevation={4}>
//             <div style={{ border: "0px solid #FFCDD2" }}>
//               <Empbar data={filteredData} />
//             </div>
//           </Paper>
//         </div>

//         {/* Table */}
//         <div>
//           <Teachertable data={filteredData} />
//         </div>
//       </Stack>
//     </div>
//   );
// };

// export default Teacher;

import React, { useState, useEffect } from "react";
import emp from "../Data/Employee.json";
import {
  Stack,
  TextField,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import Progress from "./Progress";
import Empbar from "./Empbar";
import Teachertable from "./Teachertable";

const Teacher = () => {
  const [searchParams, setSearchParams] = useState({
    department: "",
    gender: "",
    district: "",
  });
  const [filteredData, setFilteredData] = useState(emp.Sheet1);
  const [counts, setCounts] = useState({ total: 0, male: 0, female: 0 });
  const [departmentForDistrict, setDepartmentForDistrict] = useState(0);

  useEffect(() => {
    const total = filteredData.length;
    const male = filteredData.filter((emp) => emp.Gender === "Male").length;
    const female = filteredData.filter((emp) => emp.Gender === "Female").length;
    setCounts({ total, male, female });
    const districtCount = filteredData.filter(
      (emp) => emp.District === searchParams.district
    ).length;
    setDepartmentForDistrict(districtCount);
  }, [filteredData, searchParams.district]);

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    const newSearchParams = { ...searchParams, [name]: value };
    setSearchParams(newSearchParams);

    const filtered = emp.Sheet1.filter((employee) => {
      return (
        (newSearchParams.department === "" ||
          employee.DEPARTMENT === newSearchParams.department) &&
        (newSearchParams.gender === "" ||
          employee.Gender === newSearchParams.gender) &&
        (newSearchParams.district === "" ||
          employee.District === newSearchParams.district)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="teacher-container">
      <Stack spacing={2}>
        {/* Search Area */}
        <div
          className="search-area"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          <TextField
            label="Search by Department"
            variant="outlined"
            name="department"
            value={searchParams.department}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            className="search-field"
          >
            <MenuItem value="">All Departments</MenuItem>
            <MenuItem value="ADMIN">ADMIN</MenuItem>
            <MenuItem value="FRONT DESK">FRONT DESK</MenuItem>
            <MenuItem value="BACK OFFICE">BACK OFFICE</MenuItem>
            <MenuItem value="SOCIAL MEDIA">SOCIAL MEDIA</MenuItem>
            <MenuItem value="DEPT OF INTERIOR DESIGN">
              DEPT OF INTERIOR DESIGN
            </MenuItem>
            <MenuItem value="TALLY EDGE & AISECT">TALLY EDGE & AISECT</MenuItem>
            <MenuItem value="JETKING & WEB DEVLOPMENT">
              JETKING & WEB DEVLOPMENT
            </MenuItem>
            <MenuItem value="FASHION DESIGN & GRAPHIC ,ANIMATION">
              FASHION DESIGN & GRAPHIC ,ANIMATION
            </MenuItem>
            <MenuItem value="ACCOUNTS">ACCOUNTS</MenuItem>
            <MenuItem value="COMMERCIAL">COMMERCIAL</MenuItem>
            <MenuItem value="HOUSE KEEPING">HOUSE KEEPING</MenuItem>
            <MenuItem value="DEPT OF WEB DEVELOPMENT">
              DEPT OF WEB DEVELOPMENT
            </MenuItem>
            <MenuItem value="DEPT OF GRAPHIC & ANIMATION">
              DEPT OF GRAPHIC & ANIMATION
            </MenuItem>
            <MenuItem value="JETKING">JETKING</MenuItem>/{" "}
            <MenuItem value="AISECT">AISECT</MenuItem>
            <MenuItem value="TALLY EDGE">TALLY EDGE</MenuItem>
            <MenuItem value="DEPT OF FASHION DESIGN">
              DEPT OF FASHION DESIGN
            </MenuItem>
            <MenuItem value="GRAPHIC, ANIMATION">GRAPHIC, ANIMATION</MenuItem>
            <MenuItem value="TALLY EDGE, AISECT">TALLY EDGE, AISECT</MenuItem>
          </TextField>
          {/* Add other departments */}

          <TextField
            label="Search by Gender"
            variant="outlined"
            name="gender"
            value={searchParams.gender}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            className="search-field"
          >
            <MenuItem value="">All Genders</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            label="Search by District"
            variant="outlined"
            name="district"
            value={searchParams.district}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            className="search-field"
          >
            <MenuItem value="">All Districts</MenuItem>
            <MenuItem value="Durg">Durg</MenuItem>{" "}
            <MenuItem value="Raipur">Raipur</MenuItem>
            <MenuItem value="Bilaspur">Bilaspur</MenuItem>
            <MenuItem value="Bharatpur">Bharatpur</MenuItem>
            <MenuItem value="Dhamtari">Dhamtari</MenuItem>
            <MenuItem value="Khairagarh">Khairagarh</MenuItem>
            <MenuItem value="Bilaigarh">Bilaigarh</MenuItem>
            <MenuItem value="Goraila">Goraila</MenuItem>
            <MenuItem value="Surajpur">Surajpur</MenuItem>
            <MenuItem value="Dongargarh">Dongargarh</MenuItem>
            <MenuItem value="kondagaon">kondagaon</MenuItem>
            <MenuItem value="Sukma">Sukma</MenuItem>
            <MenuItem value="Balrampur">Balrampur</MenuItem>
            <MenuItem value="koriya">koriya</MenuItem>
            <MenuItem value="Sarguja">Sarguja</MenuItem>
            <MenuItem value="Sakti">Sakti</MenuItem>
            <MenuItem value="Rajnandgaon">Rajnandgaon</MenuItem>
            <MenuItem value="Raigarh">Raigarh</MenuItem>
            <MenuItem value="Manpur">Manpur</MenuItem>
            <MenuItem value="Mahasamund">Mahasamund</MenuItem>
            <MenuItem value="kanker">kanker</MenuItem>
            <MenuItem value="Jashpur">Jashpur</MenuItem>
            <MenuItem value="Jahangir-champa">Jahangir-champa</MenuItem>
            <MenuItem value="Dantewada">Dantewada</MenuItem>
            <MenuItem value="Bastar">Bastar</MenuItem>
            <MenuItem value="Balod">Balod</MenuItem>
            {/* Add other districts */}
          </TextField>
        </div>
        {/* Statistics Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Card sx={{ width: "100%", height: "100%", background: "#836394" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total No. Employees
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {counts.total}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", height: "100%", background: "#577590" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total No. Male
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {counts.male}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", height: "100%", background: "#277da1" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total No. Female
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {counts.female}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", height: "100%", background: "#bd9640" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Sorted By District
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {departmentForDistrict}
              </Typography>
            </CardContent>
          </Card>
        </div>
        {/* Charts Section */}
        <div
          className="charts-grid"
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <Paper elevation={4}>
            <div style={{ width: "100%" }}>
              <Progress value={counts.total} />
            </div>
          </Paper>
          <Paper elevation={4}>
            <div style={{ width: "100%" }}>
              <Empbar data={filteredData} />
            </div>
          </Paper>
        </div>
        {/* Table */}
        <div style={{ border: "0px solid black" }}>
          <Teachertable data={filteredData} />
        </div>
      </Stack>
    </div>
  );
};

export default Teacher;
