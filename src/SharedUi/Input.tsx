import styled from "styled-components";

interface IInput{
    title: string,
    type: 'text' | 'email' | 'password' | 'date';
    value: any,
    onChange: any,
    onKeyPress?: any,
    onBlur?: any,
}
const Input = (props: IInput) =>
{
    return(
        <InputWrapper>
            <div style={{alignItems:'center'}}>
                <UpperText>
                    {props.title}
                </UpperText>
            </div>
            <input style={{textAlign:'start', width:'100%',}} type={props.type} name={props.title} value={props.value} onChange={props.onChange} onKeyPress={props.onKeyPress} onBlur={props.onBlur}/>
        </InputWrapper>
    )
}
const InputWrapper = styled.label`
  margin: auto;
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