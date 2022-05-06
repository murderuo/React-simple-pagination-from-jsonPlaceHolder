import React, { useState } from "react";

function PerPageSetup({ data, setData }) {
  const [input, setInput] = useState({ value: null, msg: "" });
  console.log(input);
  return (
    <>
      {input.msg !== "" && <div className="alert">{input.msg}</div>}
      <div className="perpage-div">
        <label htmlFor="">
          Post per page ?:
          <input
            size={25}
            type="text"
            name="perpage"
            onChange={(e) => {
              if (
                e.target.value === null ||
                Number(e.target.value) > 100 ||
                Number(e.target.value) < 1 ||
                e.target.value.match(/^[a-zA-Z]+$/)
              ) {
                setInput({
                  ...input,
                  msg: "Please enter a number between 1 and 100",
                });
                console.log(input.msg);
              } else {
                setInput({ ...input, value: e.target.value, msg: "" });
              }
            }}
            placeholder="Default is 5 post per page .."
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              if (input.value === null || input.value.match(/^[a-zA-Z]+$/)) {
                setInput({ ...input, msg: "Please enter a number " });
              } else {
                setData({ ...data, postPerPage: Number(input.value) });
              }
            }}
          >
            Change!
          </button>
        </label>
      </div>
    </>
  );
}

export default PerPageSetup;
