import styled from 'styled-components'

const MyDiv = styled.div`
.popup_container .chakra-modal__content{
    @media(max-width:767px){
        margin: 15px;
    }
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
.input_email_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 40px;
    padding: 10px 15px 10px 38px;
}
.flex_items{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.switch_box{
    column-gap: 10px;
    width: 50%;
    margin-bottom: 10px;
}
.switch_check .chakra-switch__track[data-checked]{
    background: #2E90FA;
}
.pb-5{
    padding-bottom: 5px
}
.icon_size{
    width: 20px;
    height: 20px;
    object-fit: contain;
} 
`
export default MyDiv
