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

`
export default MyDiv
