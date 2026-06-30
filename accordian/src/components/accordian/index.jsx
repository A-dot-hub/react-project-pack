import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelceted] = useState(null);
  const [enableMultiselection, setenableMultiselection] = useState(false);
  const [multiple, setmultiple] = useState([]);

  function handleSingleSelection(getcurrentId) {
    // console.log(getcurrentId);
    setSelceted(getcurrentId === selected ? null : getcurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexofCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexofCurrentId, 1);
    }
    setmultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => setenableMultiselection(!enableMultiselection)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              onClick={
                enableMultiselection
                  ? () => handleMultipleSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
              }
              className="item"
            >
              <div className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content"> {dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
}
