import styled from 'styled-components'

const MyDiv = styled.div`
.page_heading{
    // margin-bottom: 24px;
}
.breadcrumb{
    margin: 10px 0px;
}
.flex_items{
    display: flex;
    align-items: center;
    column-gap: 12px;
}
.icon_button{
    padding: 11px;
    background: #EAECF0;
    border-radius: 8px;
}
.icon_size {
    width: 20px;
    height: 20px;
    object-fit: contain;
}
.switch_box{
    column-gap: 10px;
}
.switch_check .chakra-switch__track[data-checked]{
    background: #2E90FA;
}
.m-0{
    margin: 0;
}

.table_wrapper{
    margin-top: 16px;
    border: 1px solid #EAECF0;
    box-shadow: 0px 1px 2px #D0D5DD;
    border-radius: 8px;
}
.table_wrapper table{
    table-layout: fixed;
}
.table_wrapper thead{
    background: #F9FAFB;
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper thead th {
    font-size: 14px;
    color: #667085;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    border-bottom: 0;
    text-align: center;
    border-right: 1px solid #EAECF0;
    width: 120px;
}
.table_wrapper thead th:first-child{
    width: 350px;
    transition: 0.3s;
    position: relative;
}
.table_wrapper thead th:last-child{
    border-right: 0;
}
.table_wrapper tbody tr:first-child{
    border-bottom: 0;
}
.table_wrapper tbody tr {
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper tbody tr:last-child{
    border-top: 1px solid #EAECF0;
}
.table_wrapper tbody td:first-child{
    width: 350px;
    padding: 5px 24px;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    transition: 0.3s;
}
.table_wrapper tbody td {
    border-right: 1px solid #EAECF0;
    border-bottom: 0;
    padding: 5px;
    position: relative;
}
.table_wrapper tbody td:last-child{
    border-right: 0;
}
.table_wrapper .table_footer td {
    border-right: 1px solid #EAECF0;
    font-size: 14px;
    color: #101828;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-align: right;
    padding: 10px 15px;
}
.table_wrapper .table_footer td:first-child{
    width: 350px;
    text-align: left;
    padding: 5px 24px;
    transition: 0.3s;
}
.table_wrapper .table_footer td:last-child{
    border-right: 0;
}
.input_box{
    border-radius: 8px;
    border: 1px solid #EAECF0;
    height: 32px;
    padding: 10px;
    text-align: right;
    background: #fff;
}
.table_wrapper .chakra-table__container::-webkit-scrollbar {
    height: 8px;
    border-radius: 8px;
}
.table_wrapper .chakra-table__container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
}
.table_wrapper .chakra-table__container::-webkit-scrollbar-thumb {
    height: 8px;
    background-color: #3182CE;
    border-radius: 8px;
}
.table_wrapper .chakra-table__container::-webkit-scrollbar:vertical {
    display: none;
}
.pt-5{
    padding-top: 5px;
}
.toggle_icon{
    height: auto;
    background: none;
}
.toggle_icon svg{
    width: 25px;
    height: 25px;
}
.toggle_icon svg path{
    fill: #101828;
}
.sidebar_collapse_icon{
    background: #fff;
    border: 1px solid #D0D5DD;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    right: -15px;
    height: 28px;
    min-width: 28px;
}
.sidebar_collapse_icon svg{
    width: 25px;
    height: 25px;
}
.sidebar_collapse_icon svg path{
    fill: #667085;
}
.table_wrapper .setWidth th:first-child{
    width: 100px;
    transition: 0.3s;
}
.table_wrapper .setWidth td:first-child{
    width: 100px;
    transition: 0.3s;
}
.table_wrapper .setWidth td:first-child h1{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.table_wrapper .setWidth td .toggle_icon{
    display: none;
}
.table_wrapper .setWidth .sidebar_collapse_icon {
    transform: rotate(180deg);
}
.table_wrapper .setWidth .table_footer td:first-child{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: 0.3s;
}
.budget{
    position: relative;
}
.more_btn{
    background: none;
    position: absolute;
    top: 1px;
    right: 1px;
    display: none;
}
.more_btn:hover{
    background: none;
}
.table_wrapper tbody td .budget:hover .more_btn{
    display: block;
    right: -14px;
    top: -4px;
}
.table_wrapper tfoot th {
    border-right: 1px solid #EAECF0;
    font-size: 14px;
    color: #101828;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    text-align: right;
    padding: 20px 15px;
    background: #F5FAFF;
}
.table_wrapper tfoot th:first-child{
    width: 350px;
    text-align: left;
    padding: 20px 24px;
    transition: 0.3s;
}
.table_wrapper tfoot th:last-child{
    border-right: 0;
}
.table_wrapper tfoot tr{
    border-bottom: 1px solid #EAECF0;
}
.table_wrapper tfoot.setWidth th:first-child{
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: 0.3s;
}

// when check show actual nummbers csssss
.flex-td{
    column-gap: 5px;
}
.justify-td{
    justify-content: space-between;
}
.show_actual thead th{
    width: 240px;
}
.actual_input{
    background: #EAECF0;
}
.total_cost p{
    text-align: right;
    width: 100px;
}
.thead_checked{
    margin-top: 10px;
}
.show_actual .total_cost p:first-child{
    margin-right: 19px
}
`
export default MyDiv
