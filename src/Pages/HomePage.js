import { useState, useEffect } from "react";
import Form from "../components/Form";
import Table from "../components/Table";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import { deleteData, getData, getEditData } from "../services/customerService";
import { useMount } from "../hooks";
import Swal from "sweetalert2";
import CardInfo from "../components/CardInfo";

function App() {
  dayjs.extend(buddhistEra);

  const [initialData, setInitialData] = useState({});
  const [editData, setEditData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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

  const fetchData = async (slug) => {
    try {
      const initData = await getEditData(slug);
      setViewData({ ...initData.data });
    } catch (error) {}
  };

  const clearData = () => {
    setEditData([]);
  };
  useMount(() => void fetchDataDefault());

  const handleClickIcon = (icon, slugTrans) => {
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
    if (icon === "view") {
      setIsOpen(true);
      return fetchData(slugTrans);
    }
  };

  const handleClosed = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto relative">
      <div className={isOpen ? "blur-sm" : ""}>
        <Form form={editData} clearData={clearData} />
        <Table initialData={initialData} handleClickIcon={handleClickIcon} />
      </div>
      {isOpen && (
        <CardInfo initialData={viewData} handleClosed={handleClosed} />
      )}
    </div>
  );
}

export default App;
