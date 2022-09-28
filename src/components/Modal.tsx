import React, {useEffect} from "react";
import styled from "styled-components";

interface IModal {
    isOpen: boolean
    children: React.ReactNode;
}
const Modal = (props: IModal) =>{
    const {isOpen, children} = props
    useEffect(() => {
        if (isOpen)
        {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);
    return(
        <ModalWrapper>
            {children}
        </ModalWrapper>
    )
}

export default Modal;
const ModalWrapper = styled.div`
  text-align: center;
  z-index: 1000000;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.642);
    `
