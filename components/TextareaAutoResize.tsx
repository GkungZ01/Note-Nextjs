"useclient";
import { useEffect } from "react";

export default function TextareaAutoResize() {
  useEffect(() => {
    document.querySelectorAll("textarea.auto-resize").forEach((element) => {
      const textarea = element as HTMLTextAreaElement;
      const resizeTextarea = () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      textarea.addEventListener("input", resizeTextarea);
      textarea.addEventListener("change", resizeTextarea);
    });
  }, []);
  return <></>;
}
