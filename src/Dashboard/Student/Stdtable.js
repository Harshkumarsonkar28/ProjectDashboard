import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import "bootstrap/dist/css/bootstrap.css";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { FaFilePdf, FaFileExcel } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Stdtable = ({ data }) => {
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
      selector: (row) => row.Sno,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Course",
      selector: (row) => row.Course,
      sortable: true,
    },
    {
      name: "Gender",
      selector: (row) => row.Gender,
      sortable: true,
    },
    {
      name: "Caste",
      selector: (row) => row.Caste,
      sortable: true,
    },
    {
      name: "DOB",
      selector: (row) => row.DOB,
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
      row.Name.toLowerCase().includes(value)
    );
    setUserfilter(filteredData);
  };

  const handleFilterById = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = userlist.filter((row) =>
      String(row.Sno).toLowerCase().includes(value)
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
        color: "white",
      },
    },
    rows: {
      style: {
        fontSize: "11px",
        "&:nth-of-type(odd)": {
          backgroundColor: " #F5F5F5",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "white",
        },
        "&:hover": {
          backgroundColor: "lightgray",
        },
      },
    },
  };

  const exportPDF = () => {
    const doc = new jsPDF("l", "mm", "a4"); // 'l' for landscape
    const pageHeight =
      doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const pageWidth =
      doc.internal.pageSize.width || doc.internal.pageSize.getWidth();

    doc.text("AVISH EDUCOM", pageWidth / 2, 10, { align: "center" });
    doc.text("Title: Student List", pageWidth / 2, 20, { align: "center" });
    doc.line(10, 25, pageWidth - 10, 25);

    doc.autoTable({
      head: [
        ["S.NO", "Id", "Name", "Course", "Gender", "Caste", "DOB", "District"],
      ],
      body: userfilter.map((row, index) => [
        index + 1,
        row.Sno,
        row.Name,
        row.Course,
        row.Gender,
        row.Caste,
        row.DOB,
        row.District,
      ]),
      startY: 30,
      margin: { top: 10 },
      styles: { overflow: "linebreak", cellWidth: "wrap" },
      theme: "striped",
      didDrawPage: (data) => {
        if (data.cursor.y > pageHeight - 10) {
          doc.addPage();
          data.cursor.y = 10; // Reset position to start from the top of the new page
        }
      },
    });

    doc.save("StudentList.pdf");
  };

  return (
    <div className="container-fluid shadow border mt-2 background:#BBDEFB">
      <div className="d-flex justify-content-end">
        <CSVLink
          data={userfilter}
          filename="StudentList"
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

      <div
        style={{
          width: "100%",
          overflowX: "auto",
          maxWidth: "100vw",
        }}
      >
        <DataTable
          title="Student List"
          columns={columns}
          data={userfilter}
          selectableRows
          pagination
          fixedHeader
          striped
          selectableRowsHighlight
          fixedHeaderScrollHeight="400px"
          customStyles={customStyles}
          scrollX
          scrollXThreshold={1.0}
        />
      </div>
    </div>
  );
};

export default Stdtable;
