import React from "react";

const Alert = ({ type = "success", message, display } : {type : "success" | "danger", message : string, display : boolean}) => {
  const alertStyles : any = {
    success: "bg-green-100 border-green-500 text-green-700",
    danger: "bg-red-100 border-red-500 text-red-700",
  };

  return (
    <div
      className={`${display ? "block" : "hidden"} border-l-4 p-4 rounded-md mb-4 fixed top-0 transform w-full transition-transform duration-500 ${
        alertStyles[type] || alertStyles.success
      } scale-95 opacity-0 animate-pop`}
      role="alert"
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default Alert;

// Tailwind CSS animation setup:
// Add this to your Tailwind CSS configuration or global styles:
