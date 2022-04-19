import BodyContainer from "../SharedUi/BodyContainer";
import YourCard from "./Components/YourCards";
import Balance from "./Components/Balance";
import styled from "styled-components";
import ResentTransactions from "./Components/ResentTransactions";


const OverviewPage = () =>
{
    return(
        <OverviewContainer>
            <div style={{display:'flex', flexDirection:'column'}}>
                <Balance/>
                <YourCard/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <ResentTransactions/>
            </div>
        </OverviewContainer>
    )
}

const OverviewContainer = styled(BodyContainer)`
  margin-top: 4em;
  display: grid;
  grid-template-columns: 3fr 5fr;
  gap: 30px;
  grid-column-gap: 40px;
  @media(max-width: 613px)
  {
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
`

export default OverviewPage;