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
.textarea{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    padding: 10px 14px;
    resize: none;
}
.flex_items{
    align-items: center;
    column-gap: 10px;
}
.flex_items input{
    width: 120px;
}
.pb-5{
    padding-bottom: 5px
}
.text_rate{
    font-size: 16px;
}
`
export default MyDiv
