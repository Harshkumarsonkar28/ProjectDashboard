import {
  Stack,
  TextField,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";
import student from "../Data/Student.json";
import StdProgress from "./StdProgress";
import StdBar from "./StdBar";
import Stdcaste from "./Stdcaste";
import Malecaste from "./Malecaste";
import Stdtable from "./Stdtable";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const Student = () => {
  const [searchParams, setSearchParams] = useState({
    course: "",
    gender: "",
    caste: "",
    age: "",
    district: "",
  });
  const [filteredData, setFilteredData] = useState(
    student.Admission_report2024_06_28_10_5
  );
  const [counts, setCounts] = useState({ total: 0, male: 0, female: 0 });
  const [studentsInSelectedDistrict, setStudentsInSelectedDistrict] = useState(
    0
  );
  const [casteCounts, setCasteCounts] = useState({
    general: 0,
    obc: 0,
    st: 0,
    sc: 0,
  });
  useEffect(() => {
    const total = filteredData.length;
    const male = filteredData.filter((emp) => emp.Gender === "Male").length;
    const female = filteredData.filter((emp) => emp.Gender === "Female").length;
    setCounts({ total, male, female });

    const general = filteredData.filter((emp) => emp.Caste === "General")
      .length;
    const obc = filteredData.filter((emp) => emp.Caste === "Obc").length;
    const st = filteredData.filter((emp) => emp.Caste === "St").length;
    const sc = filteredData.filter((emp) => emp.Caste === "Sc").length;
    setCasteCounts({ general, obc, st, sc });
    const districtCount = filteredData.filter(
      (emp) => emp.District === searchParams.district
    ).length;
    setStudentsInSelectedDistrict(districtCount);
  }, [filteredData, searchParams.district]);

  useEffect(() => {
    const { course, gender, caste, age, district } = searchParams;
    const filtered = student.Admission_report2024_06_28_10_5.filter(
      (employee) => {
        const employeeAge = calculateAge(employee.DOB);
        return (
          (course === "" || employee.Course === course) &&
          (gender === "" || employee.Gender === gender) &&
          (caste === "" || employee.Caste === caste) &&
          (district === "" || employee.District === district) &&
          (age === "" || employeeAge === parseInt(age))
        );
      }
    );

    setFilteredData(filtered);
  }, [searchParams]);

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    const newSearchParams = { ...searchParams, [name]: value };
    setSearchParams(newSearchParams);
  };

  return (
    <div>
      <Stack spacing={2}>
        {/* Select Area */}
        <div
          style={{
            border: "0px solid red",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="Select By Course"
            variant="outlined"
            name="course"
            value={searchParams.course}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              marginRight: "3px",
            }}
          >
            <MenuItem value="">All Courses</MenuItem>
            {/* Add course options here */}
            <MenuItem value="PGDCA+">PGDCA+</MenuItem>
            <MenuItem value="DCA+">DCA+</MenuItem>
            <MenuItem value="PGDCA (NON ATTENDING)">
              PGDCA (NON ATTENDING)
            </MenuItem>
            <MenuItem value="PGDCA">PGDCA</MenuItem>
            <MenuItem value="DCA">DCA</MenuItem>
            <MenuItem value="PGDFM+">PGDFM+</MenuItem>
            <MenuItem value="B.COM-III+">B.COM-III+</MenuItem>
            <MenuItem value="DCA(NON ATTENDING)+">DCA(NON ATTENDING)+</MenuItem>
            <MenuItem value="DCA+">DCA+</MenuItem>
            <MenuItem value="DATA ENTRY OPERATOR">DATA ENTRY OPERATOR</MenuItem>
            <MenuItem value="DATA ENTRY OPERATOR+">
              DATA ENTRY OPERATOR+
            </MenuItem>
            <MenuItem value="MA HISTORY- I+">MA History-I+</MenuItem>
            <MenuItem value="MA SANSKRIT - I+">MA SANSKRIT - I+</MenuItem>
            <MenuItem value="BCOM-II+">BCOM-II+</MenuItem>
            <MenuItem value="MA HISTORY- II">MA History-II</MenuItem>
            <MenuItem value="MA ENGLISH-II+">MA ENGLISH-II+</MenuItem>
            <MenuItem value="MA SANSKRIT - II+">MA SANSKRIT - II+</MenuItem>
            <MenuItem value="ADVANCE EXCEL+">ADVANCE EXCEL+</MenuItem>
            <MenuItem value="VT AUTOCAD CIVIL+">VT AUTOCAD CIVIL+</MenuItem>
            <MenuItem value="Autocad Essential+">Autocad Essential+</MenuItem>
            <MenuItem value="Full Stack Development (MERN)+">
              Full Stack Development (MERN)+
            </MenuItem>
            <MenuItem value="DIP IN BD (AUTOCAD+REVIT+STADPRO)+">
              DIP IN BD (AUTOCAD+REVIT+STADPRO)+
            </MenuItem>
            <MenuItem value="BFD- (2nd Year)">BFD- (2nd Year)</MenuItem>
            <MenuItem value="Diploma in Fashion  Design+">
              Diploma in Fashion Design+
            </MenuItem>
            <MenuItem value="BFD- (3rd Year)">BFD- (3rd Year)</MenuItem>
            <MenuItem value="Prof in Graphics Design+">
              Prof in Graphics Design+
            </MenuItem>
            <MenuItem value="Prof in 2D Graphics & Animation+">
              Prof in 2D Graphics & Animation+
            </MenuItem>
            <MenuItem value="MD IN VFX & 3D ANIMATION+">
              MD IN VFX & 3D ANIMATION+
            </MenuItem>
            <MenuItem value="Diploma in VFX 3D Animation">
              Diploma in VFX 3D Animation
            </MenuItem>
            <MenuItem value="Professional In VFX">Professional In VFX</MenuItem>
            <MenuItem value="Prof in Video Editing (Film Making)+">
              Prof in Video Editing (Film Making)+
            </MenuItem>
            <MenuItem value="DIPLOMA IN ACCOUNTING & TALLY+">
              DIPLOMA IN ACCOUNTING & TALLY+
            </MenuItem>
            <MenuItem value="PROF IN ACCOUNTING & TALLY+">
              PROF IN ACCOUNTING & TALLY+
            </MenuItem>
            <MenuItem value="PROF IN ACCOUNTING & TALLY">
              PROF IN ACCOUNTING & TALLY
            </MenuItem>
            <MenuItem value="DIPLOMA IN ACCOUNTING & TALLY">
              DIPLOMA IN ACCOUNTING & TALLY
            </MenuItem>
            <MenuItem value="JK-DCC+">JK-DCC+</MenuItem>
            <MenuItem value="JK-DCC">JK-DCC</MenuItem>
            <MenuItem value="JK-DCC & CS">JK-DCC & CS</MenuItem>
            <MenuItem value="JK-DCC & CS+">JK-DCC & CS+</MenuItem>
            <MenuItem value="Full Stack Development (MERN)">
              Full Stack Development (MERN)
            </MenuItem>
            <MenuItem value="Prof in Front End Development">
              Prof in Front End Development
            </MenuItem>
            <MenuItem value="Foundation Course On Front End Development+">
              Foundation Course On Front End Development+
            </MenuItem>
          </TextField>
          <TextField
            label="Select By Gender"
            variant="outlined"
            name="gender"
            value={searchParams.gender}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              marginRight: "5px",
            }}
          >
            <MenuItem value="">All Genders</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            label="Search By Caste"
            variant="outlined"
            name="caste"
            value={searchParams.caste}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              marginRight: "5px",
            }}
          >
            <MenuItem value="">All Caste</MenuItem>
            <MenuItem value="St">ST</MenuItem>
            <MenuItem value="Sc">SC</MenuItem>
            <MenuItem value="Obc">OBC</MenuItem>
            <MenuItem value="General">General</MenuItem>
          </TextField>
          <TextField
            label="Select By Age"
            variant="outlined"
            name="age"
            value={searchParams.age}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              marginRight: "5px",
            }}
          >
            <MenuItem value="">All Age</MenuItem>
            <MenuItem value="18-20">18-20</MenuItem>
            <MenuItem value="20-22">20-22</MenuItem>
            <MenuItem value="22-24">22-24</MenuItem>
          </TextField>

          <TextField
            label="Select By District"
            variant="outlined"
            name="district"
            value={searchParams.district}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{ marginBottom: "20px", marginTop: "20px" }}
          >
            <MenuItem value="">All Districts</MenuItem>
            {/* Add district options here */}
            <MenuItem value="DURG">DURG</MenuItem>
            <MenuItem value="RAIPUR">RAIPUR</MenuItem>
            <MenuItem value="BILASPUR">BILASPUR</MenuItem>
            <MenuItem value="MUNGELI">MUNGELI</MenuItem>
            <MenuItem value="RAJNANDGAON">RAJNANDGAON</MenuItem>
            <MenuItem value="DHAMTARI">DHAMTARI</MenuItem>
            <MenuItem value="KHAIRAGAH">KHAIRAGAH</MenuItem>
            <MenuItem value="BEMETARA">BEMETARA</MenuItem>
            <MenuItem value="BIJAPUR">BIJAPUR</MenuItem>
            <MenuItem value="SURAJPUR">SURAJPUR</MenuItem>
            <MenuItem value="KONDAGAON">KONDAGAON</MenuItem>
            <MenuItem value="KORBA">KORBA</MenuItem>
            <MenuItem value="SUKMA">SUKMA</MenuItem>
            <MenuItem value="SAKTI">SAKTI</MenuItem>
            <MenuItem value="SURGUJA">SURGUJA</MenuItem>
            <MenuItem value="AMBAGARH">AMBAGARH</MenuItem>
            <MenuItem value="KOREA">KOREA</MenuItem>
            <MenuItem value="NARAYANPUR">NARAYANPUR</MenuItem>
            <MenuItem value="GARIYABAND">GARIYABAND</MenuItem>
            <MenuItem value="KABEERDHAM">KABEERDHAM</MenuItem>
            <MenuItem value="MANENDRAGARH-CHIRMIRI">
              MANENDRAGARH-CHIRMIRI
            </MenuItem>
            <MenuItem value="GAURELA-PENDRA">GAURELA-PENDRA</MenuItem>
            <MenuItem value="SARANGARH">SARANGARH</MenuItem>
            <MenuItem value="RAJNANDGAON">RAJNANDGAON</MenuItem>
            <MenuItem value="RAIGARH">RAIGARH</MenuItem>
            <MenuItem value="MAHASAMUND">MAHASAMUND</MenuItem>
            <MenuItem value="KANKER">KANKER</MenuItem>
            <MenuItem value="JASHPUR">JASHPUR</MenuItem>
            <MenuItem value="JAJGIR-CHAMPA">JAJGIR-CHAMPA</MenuItem>
            <MenuItem value="BASTAR">BASTAR</MenuItem>
            <MenuItem value="BALODABAZAR">BALODABAZAR</MenuItem>
            <MenuItem value="BALOD">BALOD</MenuItem>
          </TextField>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <Card sx={{ background: "#836394", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total No. of Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {counts.total}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#90be6d", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                General Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {casteCounts.general}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              background: "#ab7a04",
              width: "100%",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                OBC Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {casteCounts.obc}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              background: "#277da1",
              width: "100%",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                SC Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {casteCounts.sc}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              background: "#577590",
              width: "100%",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                ST Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {casteCounts.st}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              background: "ORANGE",
              width: "100%",
              height: "100%",
            }}
          >
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
                  fontSize: "20px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {" "}
                {studentsInSelectedDistrict}
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Paper elevation={4}>
            <div style={{ width: "100%" }}>
              <StdProgress value={counts.total} />
            </div>
          </Paper>
          <Paper elevation={4}>
            <div style={{ width: "100%" }}>
              <StdBar data={filteredData} />
            </div>
          </Paper>
          <Paper elevation={4}>
            <div style={{ width: "100%" }}>
              <Malecaste data={filteredData} />
            </div>
          </Paper>
        </div>
        <Paper elevation={4}>
          <div style={{ width: "100%" }}>
            <Stdcaste data={filteredData} />
          </div>
        </Paper>

        {/* Table */}
        <div>
          <Stdtable data={filteredData} />
        </div>
      </Stack>
    </div>
  );
};

export default Student;
