import BodyContainer from "../SharedUi/BodyContainer";
import YourCard from "./Components/YourCards";
import Balance from "./Components/Balance";
import styled from "styled-components";
import ResentTransactions from "./Components/ResentTransactions";


const OverviewPage = () =>
{
    return(
        <OverviewContainer>
            <Balance/>
            <YourCard/>
            <ResentTransactions/>
        </OverviewContainer>
    )
}

const OverviewContainer = styled(BodyContainer)`
  margin-top: 4em;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: fit-content();
  gap: 30px;
  grid-column-gap: 40px;
  @media(max-width: 512px)
  {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`

export default OverviewPage;