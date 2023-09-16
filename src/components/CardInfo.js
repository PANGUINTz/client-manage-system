import React, { useState } from "react";
import { X } from "react-feather";
import dayjs from "dayjs";
const CardInfo = ({ initialData, handleClosed }) => {
  const [loading, setLoading] = useState(true);
  if (initialData) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <div className="card">
      <div className=" bg-white rounded border border-black max-md:w-screen">
        <div className="p-4">
          <div className="flex justify-between">
            {loading ? (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 animate-pulse"></div>
            ) : (
              <p className="text-2xl">รายละเอียดคำสั่งซื้อ</p>
            )}
            <X size={28} className="cursor-pointer" onClick={handleClosed} />
          </div>

          <div className="border border-b border-black my-2" />

          <div className="text-lg">
            {loading ? (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 animate-pulse mb-1"></div>
            ) : (
              <div>
                <p>
                  <span className="font-bold">วันที่ซื้อสินค้า </span>
                  {DateLongTH(initialData?.DoP)}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2">
              <div>
                <div>
                  {loading ? (
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 animate-pulse mb-1"></div>
                  ) : (
                    <div>
                      <p>
                        <span className="font-bold">ชื่อลูกค้า </span>
                        {initialData?.customer?.customerName}
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  {loading ? (
                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 animate-pulse"></div>
                  ) : (
                    <div>
                      <p>
                        <span className="font-bold">ที่อยู่ </span>
                        {initialData?.customer?.address}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div>
                {loading ? (
                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse mb-1"></div>
                ) : (
                  <div>
                    <p>
                      <span className="font-bold">เบอร์โทรศัพท์ </span>
                      {initialData?.customer?.tel}
                    </p>
                  </div>
                )}
                {loading ? (
                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse mb-3.5"></div>
                ) : (
                  <div>
                    <p>
                      <span className="font-bold">โรคประจำตัว </span>
                      {initialData?.customer?.diagnose
                        ? initialData?.customer?.diagnose
                        : "ไม่มี"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="text-lg">
            {loading ? (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-2/5 animate-pulse mb-1"></div>
            ) : (
              <p>
                <span className="font-bold">รายการสินค้า </span>
                {initialData?.menu}
              </p>
            )}

            {loading ? (
              <div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-2/4 animate-pulse mb-1"></div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] animate-pulse mb-1"></div>
              </div>
            ) : (
              <div>
                <p className="font-bold">ค่าสายตาทางขวา</p>
                <div className="grid grid-cols-4">
                  <p>
                    <span className="font-bold">R </span>
                    {initialData?.Ros ? initialData?.Ros : 0.0}
                  </p>
                  <p>
                    <span className="font-bold">CYL </span>
                    {initialData?.CYL ? initialData?.CYLR : 0.0}
                  </p>
                  <p>
                    <span className="font-bold">Ax </span>
                    {initialData?.AxR}
                  </p>
                  <p>
                    <span className="font-bold">ADD </span>
                    {initialData?.AddR}
                  </p>
                </div>
              </div>
            )}

            {loading ? (
              <div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/3 animate-pulse mb-1"></div>
                <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] animate-pulse mb-1"></div>
              </div>
            ) : (
              <div>
                <p className="font-bold">ค่าสายตาทางซ้าย</p>
                <div className="grid grid-cols-4">
                  <p>
                    <span className="font-bold">L </span>
                    {initialData?.Ros ? initialData?.Ros : 0.0}
                  </p>
                  <p>
                    <span className="font-bold">CYL </span>
                    {initialData?.CYL ? initialData?.CYLL : 0.0}
                  </p>
                  <p>
                    <span className="font-bold">Ax </span>
                    {initialData?.AxL ? initialData?.AxL : 0.0}
                  </p>
                  <p>
                    <span className="font-bold">ADD </span>
                    {initialData?.AddL ? initialData?.AddL : 0.0}
                  </p>
                </div>
              </div>
            )}
            {loading ? (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 animate-pulse mb-1"></div>
            ) : (
              <div className="grid grid-cols-2">
                <p>
                  <span className="font-bold">ชื่อกรอบแว่น </span>
                  {initialData?.FType}
                </p>
                <p>
                  <span className="font-bold">ชื่อเลนส์ </span>
                  {initialData?.LType}
                </p>
              </div>
            )}

            {loading ? (
              <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-[360px] animate-pulse"></div>
            ) : (
              <div className="grid grid-cols-3">
                <p>
                  <span className="font-bold">ราคากรอบ </span>
                  {initialData?.FPrice}
                </p>
                <p>
                  <span className="font-bold">ราคาเลนส์ </span>
                  {initialData?.LPrice}
                </p>
                <p>
                  <span className="font-bold">ราคาทั้งหมด </span>
                  {initialData?.PriceTotal}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;

export const DateLongTH = (date) => {
  dayjs.locale("th");
  return dayjs(date).format("DD MMMM BBBB");
};
