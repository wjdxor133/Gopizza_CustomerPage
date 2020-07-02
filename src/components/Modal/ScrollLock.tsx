import { useLayoutEffect } from "react";
export default function ScrollLock() {
  const originalStyle = window.getComputedStyle(document.body).overflow;
  document.body.style.overflow = "hidden";
  return () => (document.body.style.overflow = originalStyle);

  // useLayoutEffect(() => {
  //   doStuff();
  // }, []);
}
