import { useState, useCallback, useRef, useEffect } from "react";
import { NotificationContext } from "./NotificationContext";
import Toast from "../components/Toast";

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showNotification = useCallback((message, options = {}) => {
    const { duration = 3000, description, icon } = options || {};
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setNotification({
      message,
      description,
      icon,
      duration,
      id: Date.now(),
    });
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
      timeoutRef.current = null;
    }, duration);
  }, []);

  const closeNotification = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
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
          description={notification.description}
          icon={notification.icon}
          onClose={closeNotification}
          duration={notification.duration}
        />
      )}
    </NotificationContext.Provider>
  );
}
