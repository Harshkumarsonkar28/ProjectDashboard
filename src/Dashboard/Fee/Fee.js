import React, { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Card,
  CardContent,
  Typography,
  MenuItem,
  Paper,
} from "@mui/material";
import Student from "../Data/Student.json";
import Dca from "./Data/AisectDCA.json";
import Pgdca from "./Data/AisectPGDCA.json";
import Cad from "./Data/Caddcenterfees.json";
import Dfd from "./Data/DeptofFashionDesign.json";
import Did from "./Data/DeptofInteriordesign.json";
import Dgd from "./Data/DeptofGraphicdesign.json";
import Jet from "./Data/Jetkingfees.json";
import Tally from "./Data/Tallyfees.json";
import Web from "./Data/Webdevelopmentfees.json";
import Feetable from "./Feetable";

const Fee = () => {
  const allData = {
    "": Student.Admission_report2024_06_28_10_5,
    DCA: Dca.Sheet1,
    PGDCA: Pgdca.Sheet1,
    "CADD CENTRE": Cad.Sheet1,
    "Dept of Fashion Design": Dfd.Sheet1,
    "Dept Of Graphic & Animation": Dgd.Sheet1,
    JETKING: Jet.Sheet1,
    "TALLY EDGE": Tally.Sheet1,
    "Dept Of Web Development": Web.Sheet1,
    "Dept of Interior Design": Did.Sheet1,
  };

  const [searchParams, setSearchParams] = useState({
    course: "",
    gender: "",
    feeStatus: "",
  });
  const [filteredData, setFilteredData] = useState(allData[""]);
  const [totals, setTotals] = useState({
    totalFees: 0,
    totalPaid: 0,
    totalBalance: 0,
  });

  useEffect(() => {
    const calculateTotals = (data) => {
      const totalFees = data.reduce(
        (sum, student) => sum + (parseFloat(student.TotalFees) || 0),
        0
      );
      const totalPaid = data.reduce(
        (sum, student) => sum + (parseFloat(student.Paidamount) || 0),
        0
      );
      const totalBalance = data.reduce(
        (sum, student) => sum + (parseFloat(student.Pendingamount) || 0),
        0
      );
      setTotals({ totalFees, totalPaid, totalBalance });
    };

    calculateTotals(filteredData);
  }, [filteredData]);

  useEffect(() => {
    const { course, gender, feeStatus } = searchParams;
    const selectedData = allData[course];
    const filtered = selectedData.filter((student) => {
      const matchesGender = gender === "" || student.Gender === gender;
      const matchesFeeStatus =
        feeStatus === "" ||
        (feeStatus === "Paidamount" &&
          parseFloat(student.Pendingamount) === 0) ||
        (feeStatus === "Pendingamount" &&
          parseFloat(student.Pendingamount) > 0);
      return matchesGender && matchesFeeStatus;
    });
    setFilteredData(filtered);
  }, [searchParams]);

  const handleSearchChange = (event) => {
    const { name, value } = event.target;
    setSearchParams((prevParams) => ({ ...prevParams, [name]: value }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  return (
    <div>
      <Stack spacing={2}>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <TextField
            variant="outlined"
            label="Select By Course"
            name="course"
            value={searchParams.course}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{ marginBottom: "20px", marginTop: "20px", width: "350px" }}
          >
            <MenuItem value="">All Courses</MenuItem>
            <MenuItem value="DCA">DCA</MenuItem>
            <MenuItem value="PGDCA">PGDCA</MenuItem>
            <MenuItem value="CADD CENTRE">Cad</MenuItem>
            <MenuItem value="Dept of Fashion Design">
              Dept of Fashion Design
            </MenuItem>
            <MenuItem value="Dept Of Graphic & Animation">
              Dept of Graphic Design & Animation
            </MenuItem>
            <MenuItem value="JETKING">Jetking</MenuItem>
            <MenuItem value="TALLY EDGE">Tally</MenuItem>
            <MenuItem value="Dept Of Web Development">Web Development</MenuItem>
            <MenuItem value="Dept of Interior Design">
              Dept of Interior Design
            </MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            label="Select By Gender"
            name="gender"
            value={searchParams.gender}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              width: "350px",
              marginLeft: "20px",
            }}
          >
            <MenuItem value="">All Genders</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            label="Select By Fees Status"
            name="feeStatus"
            value={searchParams.feeStatus}
            onChange={handleSearchChange}
            size="small"
            select
            fullWidth
            style={{
              marginBottom: "20px",
              marginTop: "20px",
              width: "350px",
              marginLeft: "20px",
            }}
          >
            <MenuItem value="">All </MenuItem>
            <MenuItem value="Paidamount">Clear</MenuItem>
            <MenuItem value="Pendingamount">Not Clear</MenuItem>
          </TextField>
        </div>
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
                Total Amount of Courses
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {formatCurrency(totals.totalFees)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#ab7a04", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total Amount Paid
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {formatCurrency(totals.totalPaid)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#277da1", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total Amount Balance
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {formatCurrency(totals.totalBalance)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "#577590", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Total Number of Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {formatCurrency(totals.totalBalance)}
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ background: "ORANGE", width: "100%", height: "100%" }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Fees Cleared by Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {
                  filteredData.filter(
                    (student) => parseFloat(student.Pendingamount) === 0
                  ).length
                }
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
                Fees Balanced by Students
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {
                  filteredData.filter(
                    (student) => parseFloat(student.Pendingamount) > 0
                  ).length
                }
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div>
          <Feetable data={filteredData} />
        </div>
      </Stack>
    </div>
  );
};

export default Fee;
