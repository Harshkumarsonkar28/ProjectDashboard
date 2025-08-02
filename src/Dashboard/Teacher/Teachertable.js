import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.css";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Teachertable = ({ data }) => {
  const { Sid } = useParams();
  const [userlist, setUserlist] = useState([]);
  const [userfilter, setUserfilter] = useState([]);

  useEffect(() => {
    if (data) {
      setUserlist(data);
      setUserfilter(data);
    }
  }, [data]);

  const columns = [
    {
      name: "S.NO",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Id",
      selector: (row) => row.Sid,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row["Name "],
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.DEPARTMENT,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.Gender,
      sortable: true,
    },
    {
      name: "District",
      selector: (row) => row.District,
      sortable: true,
    },
  ];

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = userlist.filter((row) =>
      row["Name "].toLowerCase().includes(value)
    );
    setUserfilter(filteredData);
  };

  const handleFilterById = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = userlist.filter((row) =>
      String(row.Sid).toLowerCase().includes(value)
    );
    setUserfilter(filteredData);
  };

  const customStyles = {
    headRow: {
      style: {
        background:
          "linear-gradient(90deg, rgba(10,2,130,1) 0%, rgba(9,9,121,1) 48%, rgba(13,198,236,1) 100%)",
        fontWeight: "bold",
        fontSize: "13px",
        color: "#FFF",
      },
    },
    rows: {
      style: {
        fontSize: "11px",
        "&:nth-of-type(odd)": {
          backgroundColor: " #F5F5F5",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "White",
        },
        "&:hover": {
          backgroundColor: "LIGHTGRAY ",
        },
      },
    },
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("AVISH EDUCOM", doc.internal.pageSize.getWidth() / 2, 10, {
      align: "center",
    });
    doc.text(
      "Title: Employee Table",
      doc.internal.pageSize.getWidth() / 2,
      20,
      { align: "center" }
    );
    doc.line(10, 25, doc.internal.pageSize.getWidth() - 10, 25);
    doc.autoTable({
      head: [["S.NO", "Id", "Name", "Department", "Gender", "District"]],
      body: userfilter.map((row, index) => [
        index + 1,
        row.Sid,
        row["Name "],
        row.DEPARTMENT,
        row.Gender,
        row.District,
      ]),
      startY: 30,
    });
    doc.save("EmployeeList.pdf");
  };

  return (
    <div className="container-fluid shadow border mt-2 background:#BBDEFB">
      <div className="d-flex justify-content-end">
        <CSVLink
          data={userfilter}
          filename="EmployeeList"
          className="d-flex justify-content-end"
        >
          <Tooltip title="Export to Excel" arrow placement="top">
            <button className="btn btn-sm my-3 btn-success">
              <FaFileExcel />
            </button>
          </Tooltip>
        </CSVLink>
        <Tooltip title="Export to Pdf" arrow placement="top">
          <button
            className="btn btn-sm my-3 btn-danger mx-2"
            onClick={exportPDF}
          >
            <FaFilePdf />
          </button>
        </Tooltip>
      </div>
      <div className="d-flex justify-content-between">
        <div className="my-3">
          SEARCH BY ID <input type="text" onChange={handleFilterById} />
        </div>
        <div className="my-3">
          SEARCH BY NAME <input type="text" onChange={handleFilter} />
        </div>
      </div>
      <DataTable
        title="Employee List"
        columns={columns}
        data={userfilter}
        selectableRows
        pagination
        fixedHeader
        striped
        selectableRowsHighlight
        fixedHeaderScrollHeight="400px"
        customStyles={customStyles}
        responsive // Allow DataTable to handle responsiveness
      />
    </div>
  );
};

export default Teachertable;
