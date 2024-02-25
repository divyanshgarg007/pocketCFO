import styled from 'styled-components'

const MyDiv = styled.div`
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 44px;
    padding: 10px 15px 10px 44px;
    width: 400px;
    // color: #98A2B3;
    box-shadow: 0px 1px 4px #D0D5DD;
    background: #fff;
    @media(max-width:767px){
        width: 100%;
    }
}
.icon_box{
    top: 1px;
    left: 5px;
}
.flex_items{
    display: flex;
    align-items: center;
    column-gap: 12px;
}
.icon_button{
    padding: 11px;
    background: #EAECF0;
    border-radius: 8px;
}
.icon_size{
    width: 20px;
    height: 20px;
    object-fit: contain;
}  
.table_wrapper{
    margin-bottom: 20px;
}
.table_wrapper thead{
    background: #F9FAFB;
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper thead th {
    font-size: 14px;
    color: #667085;
    font-weight: 700;
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
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    padding-top: 0rem;
    padding-bottom: 0rem;
    border-bottom: 0;
}
.table_wrapper tfoot{
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper tfoot th {
    font-size: 14px;
    color: #667085;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
}
.table_wrapper tfoot th:first-child{
    color: #101828;
}
.actions{
    align-items: center;
    justify-content: end;
    column-gap: 15px;
}
.actions button{
    background: transparent;
}
.w-8{
    width: 8%;
}
.w-25{
    width: 25%;
}
.w-12{
    width: 12%;
}
.w-42{
    width: 42%;
}
.w-10{
    width: 10%;
}
.mobile_flex{
    @media(max-width:767px){
        flex-direction: column-reverse;
        row-gap: 10px;
        align-items: end;
    }
}
`
export default MyDiv
