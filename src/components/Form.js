import React, { useState } from "react";
import { Save } from "react-feather";
import { createData } from "../services/customerService";

const Form = () => {
  const [formData, setFormData] = useState({
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
    FPrice: "",
    LType: "",
    LPrice: "",
    FBrand: "",
    color: "",
    PriceTotal: "",
    Earn: "",
    Balance: "",
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

  const [changeButton, setChangeButton] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success } = await createData(formData);
    if (success) {
      window.location.reload();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto bg-white rounded-lg shadow-xl mt-5 p-5">
      <div className="grid grid-cols-9 p-3">
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold">
            ชื่อลูกค้า :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="customerName"
              name="customerName"
              value={customerName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold">
            อายุ :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="age"
              name="age"
              value={age}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold">
            เบอร์โทร :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              pattern="/(0)\d{9}/"
              id="tel"
              name="tel"
              value={tel}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold">
            ที่อยู่ :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="address"
              name="address"
              value={address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="relative flex col-span-2">
          <span className=" py-3 px-6  text-center first-letter:leading-[1.6] font-bold">
            โรคประจำตัว :
          </span>
          <div className="relative block w-[1px] min-w-0 flex-auto  bg-transparent bg-clip-padding p-2 leading-[1.6]">
            <input
              type="text"
              className="w-full border border-solid border-gray-500 bg-transparent px-3 py-[0.25rem] rounded"
              id="diagnose"
              name="diagnose"
              value={diagnose}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className=" grid grid-cols-3 p-6 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="font-bold">รายการ</p>
              <select
                className="p-2 border border-black w-full rounded-lg cursor-pointer"
                required
                id="menu"
                name="menu"
                value={menu}
                onChange={handleInputChange}
              >
                <option value="">เลือกรายการ</option>
                <option value="FL">FL</option>
                <option value="L">L</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              R
            </span>
            <input
              type="number"
              step="0.25"
              max={10}
              min={-10}
              id="Ros"
              name="Ros"
              value={Ros}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              CYL
            </span>
            <input
              type="number"
              step="0.25"
              max={10}
              min={-10}
              id="CYL_R"
              name="CYL_R"
              value={CYL_R}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Ax
            </span>
            <input
              type="number"
              step="10"
              min={0}
              id="AxR"
              name="AxR"
              value={AxR}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Add
            </span>
            <input
              type="number"
              step="0.25"
              min={0}
              id="AddR"
              name="AddR"
              value={AddR}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="number"
              step="0.25"
              max={10}
              min={-10}
              id="Los"
              name="Los"
              value={Los}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              CYL
            </span>
            <input
              type="number"
              step="0.25"
              max={10}
              min={-10}
              id="CYL_L"
              name="CYL_L"
              value={CYL_L}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Ax
            </span>
            <input
              type="number"
              step="10"
              min={0}
              id="AxL"
              name="AxL"
              value={AxL}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              Add
            </span>
            <input
              type="number"
              step="0.25"
              min={0}
              id="AddL"
              name="AddL"
              value={AddL}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
          </div>

          <div className="relative flex my-5">
            <span className="flex items-center rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              PD/R
            </span>
            <input
              type="number"
              min={0}
              max={40}
              step={1}
              id="PDR"
              name="PDR"
              value={PDR}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="number"
              min={0}
              max={40}
              step={1}
              id="PDL"
              name="PDL"
              value={PDL}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              SH/R
            </span>
            <input
              type="number"
              min={0}
              max={40}
              step={1}
              id="SHR"
              name="SHR"
              value={SHR}
              onChange={handleInputChange}
              className="relative m-0 block w-[1px] min-w-0 flex-auto border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] leading-[1.6] "
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              L
            </span>
            <input
              type="number"
              min={0}
              max={40}
              step={1}
              id="SHL"
              name="SHL"
              value={SHL}
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
              value={FType}
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              (
            </span>
            <input
              min={0}
              max={40}
              step={1}
              id="FPrice"
              name="FPrice"
              value={FPrice}
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
              value={LType}
              onChange={handleInputChange}
            />
            <span className="flex items-center whitespace-nowrap border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center first-letter:leading-[1.6] bg-gray-200">
              (
            </span>
            <input
              type="number"
              min={0}
              max={40}
              step={1}
              id="LPrice"
              name="LPrice"
              value={LPrice}
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
              value={FBrand}
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
              value={color}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-5">
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
                value={PriceTotal}
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
                value={Earn}
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
                value={Balance}
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
                value={Desc}
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
                value={DoP}
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
                value={Signature}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className="flex text-white bg-green-500 w-fit p-3 rounded-md hover:bg-green-900 transition-all duration-200 ease-in-out"
            onClick={handleSubmit}
          >
            <Save size={24} className="mx-1" />
            {changeButton ? "เพิ่มข้อมูล" : "บันทึกข้อมูล"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
