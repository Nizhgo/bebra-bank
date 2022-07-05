import BodyContainer from "../../SharedUi/BodyContainer";
import YourCardsBlock from "./Components/YourCardsBlock";
import BalanceBlock from "./Components/BalanceBlock";
import styled from "styled-components";
import ResentTransactionsBlock from "./Components/ResentTransactionsBlock";


const OverviewPage = () =>
{
    return(
        <OverviewContainer>
            <div style={{display:'flex', flexDirection:'column'}}>
                <BalanceBlock/>
                <YourCardsBlock/>
            </div>
            <div style={{display:'flex', flexDirection:'column'}}>
                <ResentTransactionsBlock/>
            </div>
        </OverviewContainer>
    )
}

const OverviewContainer = styled(BodyContainer)`
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