import styled from 'styled-components'

const MyDiv = styled.div`
.grid_container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    @media(max-width: 767px){
        grid-template-columns: repeat(1, 1fr);
    }
}
.dashboard_card{
    border: 1px solid #E7E8F2;
    border-radius: 9px;
    padding: 25px 20px;
}
.subtitle{
    color: #33343D;
    margin-bottom: 20px;
}
.card_heading{
    align-items: center;
    padding-bottom: 10px;
}
.profit path{
    fill: #3DD598;
}
.loss path{
    fill: #FC5A5A;
}
.font_profit{
   color: #3DD598; 
}
.font_loss{
    color: #FC5A5A; 
 }
`
export default MyDiv
