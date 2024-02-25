import styled from 'styled-components'

const MyDiv = styled.div`
.main_wrapper{
    // padding-left: 18px;
}
.page_heading{
    margin-bottom: 24px;
}
.menu_list{
    margin: 0;
}
.tab_list{
    column-gap: 20px;
    border-bottom: 1px solid #EAECF0;
    margin-top: 24px;
    flex-direction: row;
    @media(max-width:767px){
        overflow-y: hidden;
    }
}
.tabs{
    padding: 0 4px 16px;
}
.tabs_label{
    color: #667085;
}
.tab_panel{
    margin-top: 25px;
}
.menu_item a{
    display: flex;
    margin-bottom: -1px;
}
.active_menu a{
    border-bottom: 2px solid #2E90FA;
    color: #2E90FA;
}
`
export default MyDiv
