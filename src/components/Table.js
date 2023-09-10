import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Trash2, Edit, Eye, Search } from "react-feather";
import { getData } from "../services/customerService";
import { useMount } from "./hooks";

const Table = () => {
  const [pending, setPending] = useState(true);
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const fetchDataDefault = async () => {
    try {
      const initData = await getData();
      setInitialData({
        ...initData,
      });
    } catch (error) {}
  };

  useMount(() => void fetchDataDefault());

  const columns = [
    {
      name: "วันที่ซื้อสินค้า",
      selector: (row) => row.DoP,
      sortable: true,
    },
    {
      name: "ชื่อ-นามสกุล",
      selector: (row) => row.customer.customerName,
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
      selector: () => (
        <div className="flex items-end">
          <Eye className="text-blue-500 mx-3 cursor-pointer hover:text-blue-900" />
          <Edit className="text-yellow-500 mx-3 cursor-pointer hover:text-yellow-900" />
          <Trash2 className="text-red-500 mx-3 cursor-pointer hover:text-red-900" />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-5 shadow-xl">
      <DataTable
        title="รายชื่อลูกค้า"
        columns={columns}
        data={initialData.data}
        pagination
        paginationRowsPerPageOptions={[5, 10]}
        progressPending={pending}
        subHeader
        subHeaderAlign="right"
        subHeaderWrap
        subHeaderComponent={
          <div>
            <input
              placeholder="Search"
              className="border border-black p-2 w-full rounded relative"
            />
            <Search className="absolute top-3.5 right-5 text-gray-500" />
          </div>
        }
      />
    </div>
  );
};

export default Table;
