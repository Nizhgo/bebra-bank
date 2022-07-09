import styled from "styled-components";

interface IInput{
    title: string,
    type: 'text' | 'email' | 'password' | 'date';
    valueName?: string,
    value: any,
    onChange?: any,
    onKeyPress?: any,
    onBlur?: any,
    error?: string,
}
const Input = (props: IInput) =>
{
    const {title, type, value, onChange, onKeyPress, onBlur, error, valueName} = props;
    return(
        <>
            {error !== undefined &&
                <ErrorBox>
                <p>{error}</p>
            </ErrorBox>}
        <InputWrapper>
            <div style={{alignItems:'center'}}>
                <UpperText>
                    {title}
                </UpperText>
            </div>
            <input style={{textAlign:'start', width:'100%',}} type={type} name={valueName} value={value} onChange={onChange} onKeyPress={onKeyPress} onBlur={onBlur}/>
        </InputWrapper>
        </>
    )
}
const InputWrapper = styled.label`
  //margin: auto;
  font-family: 'Space Grotesk', sans-serif;
  display: block;
  width: auto;
  background-color: #333333;
  border-radius: 8px;
  font-weight: 400;
  line-height: 1.21176;
  padding: 8px 12px;
  cursor: auto;
  color: #d3d3d3;
  
  input:focus {
    color: #f5f5f5;
  }
`

const ErrorBox = styled.div`
    height: 26px;
    display: flex;
    flex-direction: column;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    padding: 2px;
  
  p {
    font-size: 12px;
    color: #d55a5a;
    bottom: 0;
  }
`

const UpperText = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-size: 13px;
  text-align: start;
  color: #7a7a7a;
  padding-bottom: 2px;
`

export default Input;