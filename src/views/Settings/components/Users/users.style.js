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
.table_wrapper tbody tr:last-child{
    border-bottom: 0;
}
.table_wrapper tbody td {
    font-size: 14px;
    color: #667085;
    font-weight: 400;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    border-bottom: 0;
}
.user_box{
    display: inline-flex;
    align-items: center;
    border-radius: 16px;
    padding: 5px 15px;
}
.user_status_active{
    background: #ECFDF3;
}
.user_status_inactive{
    background: #FEF3F2;
}
.rounded{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    margin-right: 7px;
}
.rounded_active{
    background: #12B76A;
}
.rounded_inactive{
    background: #B42318;
}
.user_text{
    font-size: 14px;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
}
.user_active{
    color: #027A48;
}
.user_inactive{
    color: #B42318;
}
.actions{
    align-items: center;
    justify-content: end;
    column-gap: 15px;
}
.actions button{
    background: transparent;
}
.user_profile{
    align-items: center;
}
.profile_image{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 12px;
}
`
export default MyDiv
