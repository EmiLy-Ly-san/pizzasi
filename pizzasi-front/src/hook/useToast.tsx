import { useState } from "react";

export function useToast(duration = 300) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  const show = (msg: string) => {
    setMessage(msg);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, duration);
  };

  return { visible, message, show };
}
