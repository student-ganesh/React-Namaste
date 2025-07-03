import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Need status presence only

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // It must in Boolean
  return onlineStatus;
};

export default useOnlineStatus;
