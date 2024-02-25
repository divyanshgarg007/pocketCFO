import styled from 'styled-components'

const MyDiv = styled.div`
.grid_container{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 70px;
    @media(max-width:767px){
        grid-template-columns: repeat(1, 1fr);
        gap: 35px;
    }
}
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 40px;
    padding: 10px 14px;
}
.isDisable{
    background: #EAECF0;
    opacity: 1!important;
}
.icon_box{
    right: 5px;
}
.icon_size{
    width: 20px;
    height: 20px;
    object-fit: contain;
} 
.flex_items{
    display: flex;
    justify-content: end;
    margin-top: 30px;
}
.upload_box{
    border: 1px dashed #475467;
    border-radius: 8px;
    padding: 24px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.upload_button{
    background-color: transparent;
    color: #1570EF;
    padding: 0;
}
.upload_button:hover{
    background-color: transparent;
    color: #1570EF;
}
.uploaded_image{
    width: 130px;
    height: 130px;
    border-radius: 50%;
}
`
export default MyDiv
