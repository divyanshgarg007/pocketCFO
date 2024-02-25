import styled from 'styled-components'

const MyDiv = styled.div`
.page_heading{
    margin-bottom: 40px;
}
.add{
    width: 12px;
    height: 12px;
    object-fit: contain;
}
.icon_size {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
.table_wrapper{
    border: 1px solid #EAECF0;
    box-shadow: 0px 1px 2px #D0D5DD;
    border-radius: 8px;
}
.table_wrapper thead{
    background: #F9FAFB;
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper thead th {
    font-size: 14px;
    color: #667085;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    border-bottom: 0;
}
.table_wrapper tbody tr {
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper tbody td {
    font-size: 14px;
    color: #667085;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    border-bottom: 0;
    padding-top: 0rem;
    padding-bottom: 0rem;
}
.table_wrapper tfoot td {
    padding: 0;
}
.budget_box{
    display: inline-flex;
    align-items: center;
    border-radius: 16px;
    padding: 5px 15px;
}
.budget_status_approved{
    background: #ECFDF3;
}
.budget_status_inprogress{
    background: #FFFAEB;
}
.budget_text{
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
}
.budget_approved{
    color: #027A48;
}
.budget_inprogress{
    color: #B54708;
}
.actions{
    align-items: center;
    justify-content: end;
    column-gap: 15px;
}
.actions button{
    background: transparent;
}
.btn_default .chakra-button__icon{
    border: 2px solid #1570EF;
    border-radius: 50%;
    padding: 3px;
}
`
export default MyDiv
