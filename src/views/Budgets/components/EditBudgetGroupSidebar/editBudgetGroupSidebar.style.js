import styled from 'styled-components'

const MyDiv = styled.div`
.form_wrapper{
    margin-top: 32px;
}
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 40px;
    padding: 10px 14px;
}
.input_box option{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 40px;
    padding: 10px 14px;
    font-family: 'DM Sans', sans-serif;
    color: #101828;
    font-size: 14px;
    font-weight: 500;
}
.isDisable{
    background: #EAECF0;
    opacity: 1!important;
}
.flex_items{
    align-items: start;
    column-gap: 10px;
}
.rate_box{
    width: 50%;
}
.btn_default .chakra-button__icon{
    border: 2px solid #1570EF;
    border-radius: 50%;
    padding: 3px;
}
.btn_default svg{
    width: 12px;
    height: 12px;
}
.actions_group{
    display: flex;
    align-items: center;
    // column-gap: 12px;
    padding: 10px 1rem;
}
.btn_action{
    background: none;
}
.btn_action:hover{
    background: none;
}
.close{
    transform: rotate(180deg);
    border-left: 2px solid #D0D5DD;
    border-radius: 0;
}
.down{
    transform: rotate(180deg);
}
.icon_size {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
`
export default MyDiv
