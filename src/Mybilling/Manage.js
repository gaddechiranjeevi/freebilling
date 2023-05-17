import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import jsPDF from "jspdf";

const Manage = () => {

  const num = ["1","5","10","15","20","25","50","75","100","125","150","200","250","500"];
  let [data, setdata] = useState([]);
  let [search, updatesearch] = useState("");
  let [entry, updateentry] = useState("10");

  let total = 0; 
  let gst = 0;
  let grandtotal = 0;

  data.map((data, index)=>{
    total = total + parseInt(data.amount);
    gst = gst + parseInt(data.gst);
    grandtotal = grandtotal + parseInt(data.total);
  })

  // getting data from API code start here 
  const getBilling = () => {
    let input = {
      key: localStorage.getItem('Key'),
    };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://www.campusinterview.in/webapi/Billing/getmybill",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setdata(data);
      });
  };

  // getting data from API code ends here

  useEffect(() => {
    getBilling();
  }); 

// Pagination started
  const PER_PAGE = parseInt(entry);
  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(data.length / PER_PAGE);
// pagination ended 

// Download function code start here ----------
const generatePDF = (index) => {
    // Create new jsPDF instance
    const pdf = new jsPDF();
  
    // Map the data for the selected row to a table
    const rows = [data[index]].map((billdata, index) => [
      billdata.product,
      1,
      billdata.amount,
      billdata.total
    ]);
  
    // Add table to PDF

    pdf.setFontSize(24);
    pdf.setFont(undefined, 'bold');
    pdf.setTextColor('#007bff');

    // Add invoice title
    pdf.text('Invoice', 105, 30, null, null, 'center');
    pdf.setLineWidth(0.5);
    pdf.line(20, 35, 190, 35).setFillColor('#007bff');

    // Set styles for billed to/company details
    pdf.setFontSize(12);

    pdf.setTextColor('#000000');

    // Add billed to/company details
    pdf.text('Billed To:', 20, 60);
    pdf.setFont(undefined, 'normal');
    pdf.setLineWidth(0.3);
    pdf.line(20, 62, 40, 62);
    pdf.text(`${data[index].name}`, 20, 69);
    pdf.text(`Bill Id : ${data[index].id},`, 20, 76);
    pdf.text(`Billed date : ${data[index].day}/${data[index].month}/${data[index].year}`, 20, 83);
    pdf.text(`Phone : +91 ${data[index].mobile}`, 20, 90);
    pdf.text(`E-mail : ${data[index].email}`, 20, 97);

    pdf.setFont(undefined, 'bold');
    pdf.text('Company Details:', 130, 60);
    pdf.setFont(undefined, 'normal');
    pdf.setLineWidth(0.3);
    pdf.line(130, 62, 165, 62);
    pdf.text('Info Campus,', 130, 69);
    pdf.text('#321, Layout, Marathahalli,', 130, 76);
    pdf.text('Bangalore, Karnataka, India', 130, 83);
    pdf.text('Phone : +91 8899123827', 130, 90);
    pdf.text('E-Mail : infocampus@gmail.com.', 130, 97);

    // Set styles for invoice table
    pdf.setLineWidth(0.5);
    pdf.line(20, 125, 190, 125);
    pdf.setFillColor(200, 200, 200);
    pdf.setFontSize(14);
    pdf.setFont(undefined, 'bold');
    pdf.setTextColor('#000000');
    pdf.text('Description', 25, 135);
    pdf.text('Quantity', 150, 135, null,null,'right');
    pdf.text('Price', 170, 135);
    pdf.line(20, 140, 190, 140);
    pdf.setFillColor('#ff0000');
    pdf.setFontSize(12);
    pdf.setFont(undefined, 'normal');
    pdf.text(`${data[index].product}`, 25, 150);
    pdf.text(`1`, 140, 150);
    pdf.text(`${data[index].amount}`, 170, 150);
    pdf.line(20, 155, 190, 155);

    // Set styles for invoice total
    pdf.setFontSize(12);
    pdf.setFont(undefined, 'normal');
    pdf.setTextColor('#000000');
    pdf.text('Total:', 150, 175, null, null, 'right');
    pdf.text(`${data[index].amount}`, 170, 175);

    pdf.text('Tax:', 150, 185, null, null, 'right');
    pdf.text(`${data[index].gst}`, 170, 185);

    pdf.setLineWidth(0.5);
    pdf.line(123, 190, 190, 190);

    pdf.setFontSize(14);
    pdf.setFont(undefined, 'bold');
    pdf.text('Total Due:', 150, 200, null, null, 'right');
    pdf.text(`${data[index].total}`, 170, 200);

    // Add page header
    const today = new Date();
    const date = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    pdf.setFontSize(10);
    pdf.setFont('normal');
    pdf.setTextColor('#000000');
    pdf.text(date, 98, 295);

    pdf.save('Invoice.pdf');
  };

  // Download function code ends here------
{/*
  const DeleteProduct=(billdataid)=>{
    let input = {
        key: localStorage.getItem("Key"),
      };
      const requestOptions = {
        method: "DELETE",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      };
      fetch(
        "https://www.campusinterview.in/webapi/Billing/getmybill/"+billdataid,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          getBilling(data);
          alert("Data Removed");
        });
  } 
*/}


  return (
    <div className="container">
      <div className="m-4">
                <h3 className="text-primary">Manage Bill</h3>
                <div>
                    <ul id="list">
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2018-2019</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2019-2020</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2020-2021</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2021-2022</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2022-2023</a></button></li>
                        <li><button className="btn btn-primary btn-sm"><a href="#" className="a">2023-2024</a></button></li>
                    </ul>
                </div>
            </div>

      <div className="row">
        <div className="col-lg-2">
          Show{" "}
          <select value={entry} onChange={obj=>{updateentry(obj.target.value)}}>
            {
                num.map((n, index)=>{
                    return(
                        <option key={index}>{n}</option>
                    )
                })
            }
          </select>{" "}
          entries
        </div>
        <div className="col-lg-7"></div>
        <div className="col-lg-3 text-right">
          Search:{" "}
          <input
            type="search"
            className="input"
            value={search}
            onChange={(e) => {
              updatesearch(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <table className="table table-bordered border-bottom-0">
          <thead className="bg-light">
            <tr>
              <th scope="row">#</th>
              <th scope="row">Name</th>
              <th scope="row">Mobile</th>
              <th scope="row">Email</th>
              <th scope="row">Product</th>
              <th scope="row">Fee</th>
              <th scope="row">GST</th>
              <th scope="row">Total</th>
              <th scope="row">Date</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          {
          (data.length == 0) ? (
            <tbody className="bg-white text-center">
              <tr>
                <td colSpan={10}>No data available in table</td>
              </tr>
            </tbody>
          ) : (
          <tbody className="bg-white">
            {data
              .filter((post) => {
                if (
                  post.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  post.mobile
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  post.email
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()) ||
                  post.product
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                ) {
                  return post;
                }
              })
              .slice(offset, offset + PER_PAGE)
              .map((billdata, index) => {
                return (
                  <tr key={index}>
                    <td>{billdata.id}</td>
                    <td>{billdata.name}</td>
                    <td>{billdata.mobile}</td>
                    <td>{billdata.email}</td>
                    <td>{billdata.product}</td>
                    <td>{billdata.amount}</td>
                    <td>{billdata.gst}</td>
                    <td>{billdata.total}</td>
                    <td>
                      {billdata.day}/{billdata.month}/{billdata.year}
                    </td>
                    <td className="text-center">
                        <i className="fa fa-file-arrow-down" onClick={generatePDF.bind(this, index)}></i>
                        {/*<i className="fa fa-trash" onClick={DeleteProduct.bind(this, billdata.id)}></i>*/}
                    </td>
                  </tr>
                );
              })}
          </tbody>
          )
        }
        </table>
      </div>

      <div className="row">
        <div className="col-lg-3">
          Showing {1} to {PER_PAGE} of {data.length} entries
        </div>
        <div className="col-lg-7"></div>
        <div className="col-lg-1">
          <div className="mb-4 mt-4">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination  justify-content-center"}
              pageClassName={"page-item "}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active primary"}
            />
          </div>
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <p className="text-primary">
            <strong>Total: <i className="fa fa-inr"></i>{total}</strong>
          </p>
        </div>

        <div className="col-lg-2"></div>
        <div className="col-lg-2">
          <p className="text-info">
            <strong>Total GST: <i className="fa fa-inr"></i>{gst}</strong>
          </p>
        </div>

        <div className="col-lg-2"></div>
        <div className="col-lg-2">
          <p className="text-success">
            <strong>Grand Total: <i className="fa fa-inr"></i>{grandtotal}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manage;
