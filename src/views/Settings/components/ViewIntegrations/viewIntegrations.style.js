import styled from 'styled-components'

const MyDiv = styled.div`
.main_wrapper{
    // padding-left: 18px;
}
.page_heading{
    margin-bottom: 24px;
}
.tab_list{
    column-gap: 16px;
    border-bottom: 1px solid #EAECF0;
}
.tabs{
    padding: 0 4px 16px;
}
.tabs_label{
    color: #667085;
}
.tabs_label[aria-selected=true]{
    border-color: #2E90FA;
    color: #2E90FA;
}
.tabs_label:active{
    background: none;
}
.tab_panel{
    padding: 0px;
    margin-top: 25px;
}
`
export default MyDiv
