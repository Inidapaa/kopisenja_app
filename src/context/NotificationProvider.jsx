import { useState, useCallback } from "react";
import { NotificationContext } from "./NotificationContext";
import Toast from "../components/Toast";

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message, duration = 3000) => {
    setNotification({ message, id: Date.now() });
    setTimeout(() => {
      setNotification(null);
    }, duration);
  }, []);

  const closeNotification = useCallback(() => {
    setNotification(null);
  }, []);

  return (
    <NotificationContext.Provider
      value={{ showNotification, closeNotification }}
    >
      {children}
      {notification && (
        <Toast
          key={notification.id}
          message={notification.message}
          onClose={closeNotification}
        />
      )}
    </NotificationContext.Provider>
  );
}
