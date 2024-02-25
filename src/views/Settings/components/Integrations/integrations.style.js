import styled from 'styled-components'

const MyDiv = styled.div`
.grid_container{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    @media(max-width:767px){
        grid-template-columns: repeat(1, 1fr);
    }
}
.integration_wrapper{
    border: 1px solid #EAECF0;
    border-radius: 8px;
}
.integration_card{
    padding: 16px;
}
.integration_card img{
    margin-bottom: 5px;
    height: 40px;
    max-width: 100%;
    object-fit: cover;
}
.link_color{
    color: #175CD3;
}
.link_color:hover{
    text-decoration: none;
}
.integration_actions{
    border-top: 1px solid #EAECF0;
    padding: 16px;
}
.switch_check .chakra-switch__track[data-checked]{
    background: #2E90FA;
}
`
export default MyDiv
