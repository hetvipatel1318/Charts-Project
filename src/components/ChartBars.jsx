import { useState } from "react";

function ChartBars({ amount, text, height, isCurrentDay }) {

  const [opacity, setOpacity] = useState(0);


  const cyan = "hsl(186, 34%, 60%)";
  const LightCyan = "hsl(186, 34%, 70%)";


  function showAmount() {
    setOpacity(1);
  }

  function hideAmount() {
    setOpacity(0);
  }

  return (
    <tr className="expenses-bar">
      <td className="bar-holder">
        <div
          onMouseEnter={showAmount}
          onMouseLeave={hideAmount}
          className="bar"
          style={{
            height: height + "%",
          }}
        >
          <div className="amount" style={{ opacity: opacity }}>
            ${amount}
          </div>
        </div>
      </td>
      <th className="text" scope="row">
        {text}
      </th>
    </tr>
  );
}


ChartBars.defaultProps = {
  currentDay: false,
};

export default ChartBars;
