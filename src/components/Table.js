import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Trash2, Edit, Eye, Search } from "react-feather";
import dayjs from "dayjs";

const Table = ({ initialData, handleClickIcon }) => {
  const [pending, setPending] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const filterData = (data) => {
    try {
      const filter = initialData.data.filter((item) =>
        item.customer.customerName.includes(data.toLowerCase())
      );
      if (filter) {
        return filter;
      }
    } catch (error) {}
  };

  const columns = [
    {
      name: "วันที่ซื้อสินค้า",
      selector: (row) => DateLongTH(row.DoP),
      sortable: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) => row.customer?.customerName,
      sortable: true,
    },
    {
      name: "รายการสินค้า",
      selector: (row) => row.menu,
      sortable: true,
    },
    {
      name: "ชื่อเลนส์",
      selector: (row) => row.FType,
      sortable: true,
    },
    {
      name: "ราคาเลนส์",
      selector: (row) => row.LPrice,
      sortable: true,
    },
    {
      name: "ราคากรอบแว่น",
      selector: (row) => row.FPrice,
      sortable: true,
    },
    {
      name: "ราคารวมทั้งหมด",
      selector: (row) => row.PriceTotal,
      sortable: true,
    },
    {
      name: "",
      selector: (row) => (
        <div className="grid-cols-3 grid items-start">
          <Eye
            className="text-blue-500 mx-3 cursor-pointer hover:text-blue-900"
            onClick={() => handleClickIcon("view", row.slug)}
            size={20}
          />
          <Edit
            className="text-yellow-500 mx-3 cursor-pointer hover:text-yellow-900"
            onClick={() => handleClickIcon("edit", row.slug)}
            size={20}
          />
          <Trash2
            className="text-red-500 mx-3 cursor-pointer hover:text-red-900"
            onClick={() => handleClickIcon("delete", row.slug)}
            size={20}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5 shadow-xl">
      <DataTable
        title="รายชื่อลูกค้า"
        columns={columns}
        data={search ? filterData(search) : initialData.data}
        pagination
        paginationRowsPerPageOptions={[5, 10]}
        progressPending={pending}
        // responsive
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        subHeaderComponent={
          <div>
            <input
              placeholder="Search"
              className="border border-black p-2 w-full rounded relative"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute top-3.5 right-5 text-gray-500" />
          </div>
        }
      />
    </div>
  );
};

export default Table;

export const DateLongTH = (date) => {
  dayjs.locale("th");
  return dayjs(date).format("DD MMMM BBBB");
};
