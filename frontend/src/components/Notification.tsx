import { useEffect, useState } from "react";
import type { NotificationProps } from "../types";

const Notification = ({ message, onClose }: NotificationProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); 
      setTimeout(onClose, 300); 
    }, 1000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-25 right-10 z-[9999]">
      <div
        className={`bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 ease-out
        ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
      >
        {message}
      </div>
    </div>
  );
};

export default Notification;