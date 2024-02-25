import styled from 'styled-components'

const MyDiv = styled.div`
.main_wrapper{
  // padding-left: 18px;
}
.page_heading{
  margin-bottom: 24px;
}
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
.flex_items{
  display: flex;
  justify-content: end;
  margin-top: 30px;
}
.upload_box{
  border: 1px dashed #475467;
  border-radius: 8px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.rounded{
  width: 18px;
  height: 18px;
  border: 2px solid #1570EF;
  border-radius: 50%;
}
.upload_box .upload_button{
  background-color: transparent;
  color: #1570EF;
}
.uploaded_image{
  width: 60px;
  border-radius: 8px;
  position: absolute;
  left: 10px;
  height: 60px;
  object-fit: cover;
}

`
export default MyDiv
