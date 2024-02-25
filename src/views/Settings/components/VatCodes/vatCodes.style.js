import styled from 'styled-components'

const MyDiv = styled.div`
.flex_items{
    display: flex;
    justify-content: end;
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
.actions{
    align-items: center;
    justify-content: end;
    column-gap: 15px;
}
.actions button{
    background: transparent;
}
`
export default MyDiv
