import React from "react";

interface props {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

const Headerbox = ({ type, title, subtext, user }: props) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp; {user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default Headerbox;
