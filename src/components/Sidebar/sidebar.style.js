import styled from 'styled-components'

const MyDiv = styled.div`
.sidebar_wrapper{
    background-color: #f9fafb;
    height: 100%;
    position: fixed;
    width: 300px;
    // overflow: hidden;
    z-index: 1;
    display: block;
    transition: 0.5s;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.logo{
    max-width: 125px;
}
.collapse_logo{
    max-width: 24px;
}
.top_header{
    align-items: center;
    padding: 10px 14px 10px 24px;
}
.collpase_icon{
    background: transparent;
    height: 25px;
    width: 25px;
    min-width: 25px;
    transition: 0.5s;
}
.collpase_icon img {
    width: 15px;
    height: 15px;
    object-fit: contain;
}
.sidebar_box{
    padding: 0px 12px;
    margin-top: 24px;
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
.input_box{
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 44px;
    padding: 10px 15px 10px 44px;
    font-size: 16px;
    box-shadow: 0px 1px 4px #D0D5DD;
    background: #fff;
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
.profile_menu{
    border-top: 1px solid #D0D5DD;
    position: absolute;
    bottom: 24px;
    padding: 8px 10px 0px;
    width: 100%;
    @media(max-width:767px){
        border-top: 0;
        position: relative;
        bottom: 0;
        padding: 0;
        width: auto;
        display: block;
    }
}
.profile_menu button {
    background: transparent;
    padding: 0;
}
.profile_menu button:hover{
    background: transparent;
}
.profile_image{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 0px;
    @media(max-width:767px){
        margin-right: 0px;
    }
}
.lh-20{
    line-height: 20px;
}
.logout_icon{
    position: absolute;
    right: 0;
}
.dropdown_list{
    padding: 0;
    border: 0;
    box-shadow: 0px 1px 15px #D0D5DD;
    width: 280px;
    border-radius: 8px;
}
.logout_user{
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.dropdown_list button, .dropdown_list .username {
    padding: 10px 16px;
}
.username{
    align-items: center;
}
.username button {
    background: transparent;
    padding: 0!important;
    justify-content: end;
}
.username button:hover{
    background: transparent;
}
.divider{
    border-color: #EAECF0;
    opacity: 1;
}
.company_info{
    width: 140px;
    margin-right: 25px;
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
.badge{
    background: #eceff3;
    padding: 2px 10px;
    width: 29px;
    height: 24px;
    line-height: 20px;
    border-radius: 16px;
}

// css when sidebar collapse

.sidebar_collapse{
    background-color: #f9fafb;
    height: 100%;
    position: fixed;
    width: 100px;
    // overflow: hidden;
    z-index: 1;
    display: block;
    transition: 0.5s;
    @media(max-width:767px){
        display: none;
    }
    @media(min-width:768px) and (max-width:1023px){
        display: none;
    }
}
.sidebar_collapse .collpase_icon{
    transform: rotate(180deg);
    transition: 0.5s;
}
.sidebar_box_collapse{
    padding: 0px 12px;
    margin-top: 24px;
}
.sidebar_box_collapse .icon_box{
    left: 16px;
}
.sidebar_box_collapse .input_box{
    padding: 10px 15px 10px 59px;
}
.sidebar_box_collapse .menu_box .menu_item{
    justify-content: center;
}
.sidebar_box_collapse .menu_box .menu_item svg{
    display: none;
}
.sidebar_collapse .logout_icon{
    display: none;
}
.sidebar_collapse .profile_menu{
    justify-content: center;
}
.sidebar_collapse .profile_menu .profile_image{
    margin-right: 0;
}
.sidebar_collapse .profile_menu button .chakra-button__icon{
    margin-inline-end: 0;
}
.sidebar_collapse .profile_menu button .collapse_hide{
    display: none;
}
.link_nav{
    display: block;
    width: 100%;
}

// csss for mobile sidebar
.mobile_sidebar {
    @media(max-width:767px){
        padding: 10px 15px;
        position: fixed;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #eee;
        z-index: 11;
    }
}
.mobile_header{
    @media(max-width:767px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.profile_menu button span.chakra-button__icon{
    @media(max-width:767px){
        margin-inline-end: 0;
    }
}
.mobile_sidebar{
    display: none;
    @media(max-width:767px){
        display: block;
    }
}
`
export default MyDiv
