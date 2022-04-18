import styled from "styled-components";
import React from "react";

interface IErrorBox{
    type: 'fixed' | 'outlined';
    children: React.ReactNode;
}
const ErrorContainer = (props: IErrorBox) =>
{
    const {type, children} = props;
    if (type === 'fixed')
        return(
            <ErrorWrapper>
                <ErrorMsg>
                    {children}
                </ErrorMsg>
            </ErrorWrapper>
        )
}

const ErrorWrapper = styled.div`
    height: 26px;
    display: flex;
    flex-direction: column;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    padding: 2px;
`

const ErrorMsg = styled.p`
  font-size: 12px;
  color: #d55a5a;
  bottom: 0;
`

export default ErrorContainer;
