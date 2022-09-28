import styled from "styled-components";
import BodyContainer from "../../components/BodyContainer";
import BalanceBlock from "./components/BalanceBlock";
import ResentTransactionsBlock from "./components/ResentTransactionsBlock";
import YourCardsBlock from "./components/YourCardsBlock";


const OverviewPage = () => {
    return (
        <OverviewContainer>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <BalanceBlock/>
                <YourCardsBlock/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
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
