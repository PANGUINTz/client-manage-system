import { useState, useEffect } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

function App() {
  const [time, setTime] = useState("00:00:00");
  const date = dayjs();

  dayjs.extend(buddhistEra);

  useEffect(() => {
    setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between my-5">
        <h5 className="text-3xl">{DateLongTH(date)}</h5>
        <p className="text-3xl">{time}</p>
      </div>
      <Form />

      <Table />
    </div>
  );
}

export default App;

export const DateLongTH = (date) => {
  dayjs.locale("th");
  return dayjs(date).format("DD MMMM BBBB");
};
