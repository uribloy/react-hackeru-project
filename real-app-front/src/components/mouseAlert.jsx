import { useState } from "react";

export const MouseAlert = ({ msg, value, btnstyle }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button
        className={`${btnstyle}`}
        onMouseOver={() => setIsShown(true)}
        onMouseOut={() => setIsShown(false)}
      >
        {value}
      </button>
      {isShown && <div className="inner-box">{msg}</div>}
    </div>
  );
};
export default MouseAlert;
