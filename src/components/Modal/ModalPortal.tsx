import { useMemo } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: any;
  elementId: any;
}

const ModalPortal = ({ children, elementId }: ModalPortalProps) => {
  const rootElement: any = useMemo(() => document.getElementById(elementId), [
    elementId,
  ]);

  return ReactDOM.createPortal(children, rootElement);
};

export default ModalPortal;
