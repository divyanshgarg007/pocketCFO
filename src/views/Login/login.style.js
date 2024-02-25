import styled from 'styled-components'

const MyDiv = styled.div`
.grid_container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    background: #F9FAFB;
    @media(max-width: 767px){
        grid-template-columns: repeat(1, 1fr);
        background: #fff;
    }
}
.form_container{
    padding: 0px 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    @media(max-width: 767px){
        padding: 0px 20px;
    }
}
.flex_items{
    display: flex;
    align-items: center;
    justify-content: center;
}
.d-none{
    @media(max-width: 767px){
       display: none;
    }
}
.main_heading{
    margin-bottom: 12px;
}
.check .chakra-checkbox__control{
    border: 1px solid #D0D5DD;
    border-radius: 4px;
}
.check .chakra-checkbox__control[data-checked]{
    border: 0!important;
}
.check .chakra-checkbox__label{
    color: #344054;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Inter', sans-serif!important;
}
.google_image{
    width: 24px;
    height: 24px;
}
.ml-1{
    margin-left: 5px;
}
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 44px;
    padding: 10px 14px;
    font-size: 16px;
}
`
export default MyDiv
