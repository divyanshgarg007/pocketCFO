import styled from 'styled-components'

const MyDiv = styled.div`
.logo{
    max-width: 125px;
}
.sidebar_box{
    @media(max-width:767px){
        padding: 0px;
        margin-top: 0px;
    }
}
.icon_box{
    top: 1px;
    left: 5px;
}
.icon_size{
    width: 20px;
    height: 20px;
    object-fit: contain;
}
.menu_box{
    margin-top: 24px;
    // padding: 0px 16px;
}
.menu_item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    cursor: pointer;
}
.menu_item svg{
    width: 25px;
    height: 25px;
    cursor: pointer;
}
.menu_item svg path{
    fill: #98a2b3
}
.menu_item a{
    display: flex;
    align-items: center;
    column-gap: 12px;
    font-size: 16px;
    line-height: 24px;
    height: 30px;
}
.active_menu{
    background-color: #eaecf0;
    border-radius: 6px;
    transition: 0.2s;
}
.hide_Submenu{
    display: none;
}
.submenu_item {
    padding: 8px 18px 8px 48px;
    margin: 8px 0px;
}
.submenu_item a{
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 44px;
    padding: 10px 15px 10px 44px;
    font-size: 16px;
    box-shadow: 0px 1px 4px #D0D5DD;
    background: #fff;
}
`
export default MyDiv
