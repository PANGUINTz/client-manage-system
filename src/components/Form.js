import React, { useEffect, useState } from "react";
import { Save, X } from "react-feather";
import { createData, updateData } from "../services/customerService";
import dayjs from "dayjs";
import Swal from "sweetalert2";

export const DateLongTH = (date) => {
  dayjs.locale("th");
  return dayjs(date).format("DD MMMM BBBB");
};

const Form = ({ form, clearData }) => {
  const [formData, setFormData] = useState({
    customerName: "",
    age: "",
    tel: "",
    address: "",
    diagnose: "",
    menu: "",
    Ros: "",
    CYL_R: "",
    AxR: 0,
    AddR: 0,
    Los: "",
    CYL_L: "",
    AxL: 0,
    AddL: 0,
    PDR: "",
    PDL: "",
    SHR: "",
    SHL: "",
    FType: "",
    FPrice: 0,
    LType: "",
    LPrice: 0,
    FBrand: "",
    color: "",
    PriceTotal: 0,
    Earn: 0,
    Balance: 0,
    Desc: "",
    Signature: "",
  });

  const {
    customerName,
    age,
    tel,
    address,
    diagnose,
    menu,
    Ros,
    CYL_R,
    AxR,
    AddR,
    Los,
    CYL_L,
    AxL,
    AddL,
    PDR,
    PDL,
    SHR,
    SHL,
    FType,
    FPrice,
    LType,
    LPrice,
    FBrand,
    color,
    PriceTotal,
    Earn,
    Balance,
    Desc,
    DoP,
    Signature,
  } = formData;

  const patternTel = /^(09|08|06)\d{8}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.length === 0) {
      if (formData.tel !== "") {
        if (!patternTel.test(formData?.tel)) {
          Swal.fire({
            title: "กรุณากรอกเบอร์โทรให้ถูกต้อง",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }

      if (formData.age === "") {
        Swal.fire({
          title: "กรุณากรอกอายุ",
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
        });
      }

      if (formData.customerName === "" || formData.menu === "") {
        Swal.fire({
          title: "กรุณากรอกข้อมูลลูกค้าและรายการ",
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        console.log("success");
        const { success } = await createData(formData);
        if (success) {
          Swal.fire({
            title: "เพิ่มรายชื่อเสร็จสิ้น",
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      }
    } else {
      const { success } = await updateData(
        form?.customer?.slug,
        form?.slug,
        formData
      );

      if (success) {
        Swal.fire({
          title: "อัพเดตเสร็จสิ้น",
          icon: "success",
          showConfirmButton: false,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    }
  };

  const ClearDataMain = () => {
    clearData();
    setFormData({
      customerName: "",
      age: "",
      tel: "",
      address: "",
      diagnose: "",
      menu: "",
      Ros: "",
      CYL_R: "",
      AxR: "",
      AddR: "",
      Los: "",
      CYL_L: "",
      AxL: "",
      AddL: "",
      PDR: "",
      PDL: "",
      SHR: "",
      SHL: "",
      FType: "",
      FPrice: 0,
      LType: "",
      LPrice: 0,
      FBrand: "",
      color: "",
      PriceTotal: 0,
      Earn: 0,
      Balance: 0,
      Desc: "",
      Signature: "",
      DoP: "",
    });
  };

  useEffect(() => {
    if (form.length === 0) {
    } else {
      const customerName = form?.customer?.customerName;
      const age = form?.customer?.age;
      const tel = form?.customer?.tel;
      const address = form?.customer?.address;
      const diagnose = form?.customer?.diagnose;
      const DoP = dayjs(form?.DoP).format("YYYY-MM-DD");
      setFormData({
        ...form,
        customerName: customerName,
        age: age,
        tel: tel,
        address: address,
        diagnose: diagnose,
        DoP: DoP,
      });
    }
  }, [form]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-xl mt-5 p-5">
      <div className="grid grid-cols-9 p-3 max-md:grid-cols-1 max-xl:grid-cols-4">
        <div className="relative flex col-span-2 ">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold max-md:w-36 max-md:text-start">
            ชื่อลูกค้า <span className="text-red-500">*</span> :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="customerName"
              name="customerName"
              value={customerName || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex max-xl:col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold max-md:w-36 max-md:text-start">
            อายุ <span className="text-red-500">*</span> :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded age"
              id="age"
              name="age"
              value={age || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold max-md:w-36 max-md:text-start">
            เบอร์โทร :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="tel"
              name="tel"
              value={tel || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold max-md:w-36 max-md:text-start">
            ที่อยู่ :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="address"
              name="address"
              value={address || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold max-md:w-36 max-md:text-start">
            โรคประจำตัว :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="diagnose"
              name="diagnose"
              value={diagnose || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 p-6 gap-5 max-md:grid-cols-1">
        <div className="col-span-2">
          <div className="w-1/2">
            <p className="font-bold">
              รายการ <span className="text-red-500">*</span>
            </p>
            <select
              className="p-2 border border-black w-full rounded-lg cursor-pointer"
              required
              id="menu"
              name="menu"
              value={menu || ""}
              onChange={handleInputChange}
            >
              <option value="">เลือกรายการ</option>
              <option value="FL">FL</option>
              <option value="L">L</option>
              <option value="F">F</option>
            </select>
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              R
            </span>
            <input
              type="text"
              id="Ros"
              name="Ros"
              value={Ros || ""}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              CYL
            </span>
            <input
              type="text"
              id="CYL_R"
              name="CYL_R"
              value={CYL_R || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Ax
            </span>
            <input
              type="number"
              id="AxR"
              name="AxR"
              value={AxR || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Add
            </span>
            <input
              type="number"
              id="AddR"
              name="AddR"
              value={AddR || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="text"
              id="Los"
              name="Los"
              value={Los || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              CYL
            </span>
            <input
              type="text"
              id="CYL_L"
              name="CYL_L"
              value={CYL_L || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Ax
            </span>
            <input
              type="text"
              id="AxL"
              name="AxL"
              value={AxL || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Add
            </span>
            <input
              type="text"
              id="AddL"
              name="AddL"
              value={AddL || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              PD/R
            </span>
            <input
              type="text"
              id="PDR"
              name="PDR"
              value={PDR || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="text"
              id="PDL"
              name="PDL"
              value={PDL || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              SH/R
            </span>
            <input
              type="text"
              id="SHR"
              name="SHR"
              value={SHR || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="text"
              id="SHL"
              name="SHL"
              value={SHL || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              F
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6]"
              id="FType"
              name="FType"
              value={FType || ""}
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              (
            </span>
            <input
              id="FPrice"
              name="FPrice"
              value={FPrice || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              )
            </span>
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
              id="LType"
              name="LType"
              value={LType || ""}
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              (
            </span>
            <input
              type="text"
              id="LPrice"
              name="LPrice"
              value={LPrice || ""}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto  border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border rounded-r  border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              )
            </span>
          </div>
          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              รุ่น
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
              id="FBrand"
              name="FBrand"
              value={FBrand || ""}
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              ทำสี
            </span>
            <input
              type="text"
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
              id="color"
              name="color"
              value={color || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-5 max-md:block">
          <div className="relative flex text-center">
            <span className=" w-36 rounded-tl border border-r-0 border-b-0 border-solid border-gray-500 py-3 px-6 text-center first-letter:leading-[1.6]">
              ราคา
            </span>
            <div className="relative block w-[1px] min-w-0 rounded-tr flex-auto border border-b-0 border-solid border-gray-500 bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="number"
                step="100"
                min={0}
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="PriceTotal"
                name="PriceTotal"
                value={PriceTotal || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex">
            <span className=" w-36 border border-r-0 border-b-0 border-solid border-gray-500 py-3 px-6 text-center first-letter:leading-[1.6]">
              มัดจำ
            </span>
            <div className="relative block w-[1px] min-w-0 flex-auto border border-b-0 border-solid border-gray-500 bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="number"
                step="100"
                min={0}
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="Earn"
                name="Earn"
                value={Earn || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex">
            <span className=" w-36 border border-r-0 border-b-0 border-solid border-gray-500 py-3 px-6 text-center first-letter:leading-[1.6]">
              คงเหลือ
            </span>
            <div className="relative block w-[1px] min-w-0 flex-auto border border-b-0 border-solid border-gray-500 bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="number"
                step="100"
                min={0}
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="Balance"
                name="Balance"
                value={Balance || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex">
            <span className=" w-36 border border-r-0 border-b-0 border-solid border-gray-500 py-3 px-6 text-center first-letter:leading-[1.6]">
              หมายเหตุ
            </span>
            <div className="relative block w-[1px] min-w-0 flex-auto border border-b-0 border-solid border-gray-500 bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="text"
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="desc"
                name="desc"
                value={Desc || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex">
            <span className=" w-36  border border-r-0  border-solid border-gray-500 border-b-0 py-3 px-6 text-center first-letter:leading-[1.6]">
              วันที่ซื้อสินค้า
            </span>
            <div className="relative block w-[1px] min-w-0 flex-auto border  border-solid border-b-0 border-gray-500 bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="date"
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="DoP"
                name="DoP"
                value={DoP || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="relative flex">
            <span className=" w-36  border border-r-0  border-solid border-gray-500 rounded-bl py-3 px-6 text-center first-letter:leading-[1.6]">
              ลงในนาม
            </span>
            <div className="relative block w-[1px] min-w-0 flex-auto border  border-solid border-gray-500 rounded-br bg-transparent bg-clip-padding p-2 leading-[1.6]">
              <input
                type="text"
                className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
                id="Signature"
                name="Signature"
                value={Signature || ""}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex max">
        <button
          className={`flex text-white  w-fit p-3 rounded-md transition-all duration-200 ease-in-out ${
            form.length === 0
              ? "bg-green-500 hover:bg-green-900"
              : "bg-blue-500 hover:bg-blue-900"
          } `}
          onClick={handleSubmit}
        >
          <Save size={24} className="mx-1" />
          {form.length === 0 ? "เพิ่มข้อมูล" : "บันทึกข้อมูล"}
        </button>

        <button
          className="flex text-white bg-red-500 w-fit p-3 rounded-md hover:bg-red-900 transition-all duration-200 ease-in-out mx-5"
          onClick={ClearDataMain}
        >
          <X size={24} className="mx-1" />
          ล้างข้อมูล
        </button>
      </div>
    </div>
  );
};

export default Form;
