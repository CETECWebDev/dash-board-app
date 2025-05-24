import React from "react";
import Link from "next/link";
import { useDirectionContext } from "@/context/DirectionContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { translate } from "@/language/language";

export default function Route() {
  const { dir } = useDirectionContext();

  const data = {
    rtl: [
      {
        id: 1,
        name: "تهران → رشت",
        office: "اداره راهداری تهران",
        address: "تهران، اتوبان قزوین، خروجی شمال",
        deviceId: "RD-001",
      },
      {
        id: 3,
        name: "تبریز → ارومیه",
        office: "اداره راهداری آذربایجان شرقی",
        address: "تبریز، بزرگراه شهید کسایی، غرب",
        deviceId: "RD-002",
      },
    ],
    ltr: [
      {
        id: 1,
        name: "Tehran → Rasht",
        office: "Tehran Road Maintenance Office",
        address: "Tehran, Qazvin Highway, North Exit",
        deviceId: "RD-001",
      },
      {
        id: 3,
        name: "Tabriz → Urmia",
        office: "East Azerbaijan Road Maintenance Office",
        address: "Tabriz, Shahid Kasaei Highway, West",
        deviceId: "RD-002",
      },
    ],
  };

  const bargasht = {
    rtl: [
      {
        id: 2,
        name: "رشت → تهران",
        office: "اداره راهداری گیلان",
        address: "رشت، میدان گاز، جنوب",
        deviceId: "RD-003",
      },
      {
        id: 4,
        name: "ارومیه → تبریز",
        office: "اداره راهداری آذربایجان غربی",
        address: "ارومیه، جاده شهید کلانتری",
        deviceId: "RD-004",
      },
    ],
    ltr: [
      {
        id: 2,
        name: "Rasht → Tehran",
        office: "Gilan Road Maintenance Office",
        address: "Rasht, Gas Square, South",
        deviceId: "RD-003",
      },
      {
        id: 4,
        name: "Urmia → Tabriz",
        office: "West Azerbaijan Road Maintenance Office",
        address: "Urmia, Shahid Kalantari Road",
        deviceId: "RD-004",
      },
    ],
  };

  const handleEdit = (id) =>
    alert(dir === "rtl" ? `ویرایش محور با ID ${id}` : `Edit route with ID ${id}`);
  const handleDelete = (id) =>
    alert(dir === "rtl" ? `حذف محور با ID ${id}` : `Delete route with ID ${id}`);

  const renderId = (id) =>
    dir === "rtl" ? (
      <p className="text-right font-bold mb-3 whitespace-nowrap" dir="rtl">
        {`شناسه: ${id}`}
      </p>
    ) : (
      <p className="font-bold text-sm text-[var(--colTextA)] ltr mb-3">{`ID: ${id}`}</p>
    );

  const currentData = dir === "rtl" ? data.rtl : data.ltr;
  const currentBargasht = dir === "rtl" ? bargasht.rtl : bargasht.ltr;

  return (
    <div className="p-5 space-y-8" dir={dir}>
      <div className={`mb-8 flex ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
        <Link
          href="/"
          className="border-2 rounded-full py-2 px-6 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] inline-flex items-center gap-2"
        >
          {dir === "rtl" ? "انتخاب روی نقشه" : "Select on Map"}
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-[var(--colTextA)] text-center mb-8" dir={dir}>
        {/* {dir === "rtl" ? "لیست محورها" : "Route List"}
         */}
                    {translate(dir , "Route.title")}

      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2
            className="text-xl font-semibold text-[var(--colTextA)] mb-4 text-center md:text-start"
            dir={dir}
          >
            {/* {dir === "rtl" ? "مسیر رفت" : "Outbound Route"} */}

              {translate(dir , "Route.goRoute")}
          </h2>
          <div className="space-y-6">
            {currentData.map((route) => (
              <div
                key={route.id}
                className="bg-[var(--colCard)] rounded-2xl p-5 text-[var(--colTextA)] shadow border border-[var(--colTextA)] space-y-4 flex flex-col justify-between min-h-[280px]"
                dir={dir}
              >
                <div>
                  <h3 className="text-lg font-bold mb-0">
                    {dir === "rtl" ? `نام محور: ${route.name}` : `Route Name: ${route.name}`}
                  </h3>
                  {renderId(route.id)}

                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "نام اداره کل:" : "Office Name:"}</strong> {route.office}
                  </p>
                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "آدرس کامل محور:" : "Full Address:"}</strong> {route.address}
                  </p>
                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "شماره دستگاه نصب شده:" : "Device ID:"}</strong> {route.deviceId}
                  </p>
                </div>

                <div className={`flex justify-end gap-4 mt-0 ${dir === "rtl" ? "pr-2" : "pl-2"}`}>
                  <button
                    onClick={() => handleEdit(route.id)}
                    className="border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] inline-flex items-center gap-2 transition"
                    dir="ltr"
                  >
                    <FiEdit />
                    {dir === "rtl" ? "ویرایش" : "Edit"}
                  </button>
                  <button
                    onClick={() => handleDelete(route.id)}
                    className="border-2 rounded-full py-2 px-4 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] inline-flex items-center gap-2 transition"
                    dir="ltr"
                  >
                    <FiTrash2 />
                    {dir === "rtl" ? "حذف" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2
            className="text-xl font-semibold text-[var(--colTextA)] mb-4 text-center md:text-start"
            dir={dir}
          >
            {/* {dir === "rtl" ? "مسیر برگشت" : "Return Route"} */}

             {translate(dir , "Route.backRoute")}
          </h2>
          <div className="space-y-6">
            {currentBargasht.map((route) => (
              <div
                key={route.id}
                className="bg-[var(--colCard)] rounded-2xl p-5 text-[var(--colTextA)] shadow border border-[var(--colTextA)] space-y-4 flex flex-col justify-between min-h-[280px]"
                dir={dir}
              >
                <div>
                  <h3 className="text-lg font-bold mb-0">
                    {dir === "rtl" ? `نام محور: ${route.name}` : `Route Name: ${route.name}`}
                  </h3>
                  {renderId(route.id)}

                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "نام اداره کل:" : "Office Name:"}</strong> {route.office}
                  </p>
                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "آدرس کامل محور:" : "Full Address:"}</strong> {route.address}
                  </p>
                  <p className="mb-3">
                    <strong>{dir === "rtl" ? "شماره دستگاه نصب شده:" : "Device ID:"}</strong> {route.deviceId}
                  </p>
                </div>

                <div className={`flex justify-end gap-4 mt-0 ${dir === "rtl" ? "pr-4" : "pl-4"}`}>
                  <button
                    onClick={() => handleEdit(route.id)}
                    className="border-2 rounded-full py-2 px-6 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] inline-flex items-center gap-2 transition"
                    dir="ltr"
                  >
                    <FiEdit />
                    {dir === "rtl" ? "ویرایش" : "Edit"}
                  </button>
                  <button
                    onClick={() => handleDelete(route.id)}
                    className="border-2 rounded-full py-2 px-6 border-[var(--colTextA)] hover:text-[var(--textHover)] hover:border-[var(--textHover)] inline-flex items-center gap-2 transition"
                    dir="ltr"
                  >
                    <FiTrash2 />
                    {dir === "rtl" ? "حذف" : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
