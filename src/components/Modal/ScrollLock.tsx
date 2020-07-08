import { useLayoutEffect } from "react";

declare global {
  interface window {
    window: any;
  }
}

const ScrollLock = async () => {
  await useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return async () => await (document.body.style.overflow = originalStyle);
  }, []);
};

export default ScrollLock;
