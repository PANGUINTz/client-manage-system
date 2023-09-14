import React, { useState } from "react";

export const FormTest = () => {
  const [edit, setEdit] = useState("");
  return (
    <div>
      <input
        type="text"
        defaultValue={data[0].username}
        onChange={(e) => setEdit(e.target.value)}
      ></input>
    </div>
  );
};
