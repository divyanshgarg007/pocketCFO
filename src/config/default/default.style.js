import styled from 'styled-components'

const MyDiv = styled.div`
.sidebar_grid{
//   @media(max-width:767px){
//     display: none;
// }
}
.parent_grid{
  display: grid;
  grid-template-columns: 300px 1fr;
  transition: 0.5s;
  @media(max-width:767px){
    display: block;
}
}
.children_grid{
  padding: 16px 32px;
  overflow: hidden;
  clear: both;
  @media(max-width:767px){
    padding: 6rem 15px 15px;
}
}
.parent_grid_toggle{
  display: grid;
  grid-template-columns: 100px 1fr;
  transition: 0.5s;
}
`
export default MyDiv
