import { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { deleteData, getData, getEditData } from "../services/customerService";
import { useMount } from "../hooks";
import Swal from "sweetalert2";

function App() {
  dayjs.extend(buddhistEra);

  const [initialData, setInitialData] = useState({});
  const [editData, setEditData] = useState([]);

  const fetchDataForm = async (slug) => {
    try {
      const initData = await getEditData(slug);
      setEditData({ ...initData.data });
    } catch (error) {}
  };

  const fetchDataDefault = async () => {
    try {
      const initData = await getData();
      setInitialData({ ...initData });
    } catch (error) {}
  };

  const clearData = () => {
    setEditData([]);
  };
  useMount(() => void fetchDataDefault());

  const handleClickIcon = (icon, slugCustomer, slugTrans) => {
    if (icon === "edit") {
      return fetchDataForm(slugTrans);
    }
    if (icon === "delete") {
      try {
        Swal.fire({
          title: "คุณต้องการจะลบข้อมูลนี้ใช่ไหม?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ตกลง",
          cancelButtonText: "ยกเลิก",
          confirmButtonColor: "#2DC137",
          cancelButtonColor: "#FF0000",
          iconColor: "#FF0000",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const delData = await deleteData(slugTrans);
            if (delData) {
              Swal.fire({
                title: "ลบข้อมูลนี้เสร็จสิ้น",
                icon: "success",
                showConfirmButton: false,
              });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          }
        });
      } catch (error) {}
    }
  };

  return (
    <div className="container mx-auto">
      <Form form={editData} clearData={clearData} />
      <Table initialData={initialData} handleClickIcon={handleClickIcon} />
    </div>
  );
}

export default App;

export const DateLongTH = (date) => {
  dayjs.locale("th");
  return dayjs(date).format("DD MMMM BBBB");
};
