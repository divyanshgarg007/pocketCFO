import styled from 'styled-components'

const MyDiv = styled.div`
.budget_input{
    border: 0;
    padding: 0px;
    font-size: 20px;
    color: #98A2B3;
    width: 90%;
}
.budget_input:focus-visible{
    border: 0;
    box-shadow: none;
}
.close{
    position: absolute;
    top: 20px;
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
    align-items: center;
    column-gap: 10px;
}
.pb-5{
    padding-bottom: 5px
}
.icon_size {
    width: 20px;
    height: 20px;
    object-fit: contain;
    position: absolute;
    right: 12px;
    top: 9px;
}
.date_picker{
    position: relative;
}
.date_picker input{
    font-size: 14px;
    color: #101828;
    font-weight: 500;
    font-family: 'DM Sans', sans-serif;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    height: 40px;
    padding: 0px 8px 0 12px;
    width: 100%;
}
.date_picker input:focus-visible{
    outline: none;
}
.date_picker .react-datepicker-popper{
    width: 100%;
}
.date_picker .react-datepicker{
    font-family: 'DM Sans', sans-serif;
    border: 0;
    box-shadow: 0px 1px 5px #ccc;
    border-radius: 8px;
    width: 100%;
}
.date_picker .react-datepicker__month-container{
    float: none;
}
.date_picker .react-datepicker__month-wrapper {
    display: flex;
    column-gap: 20px;
    align-items: center;
}
.date_picker .react-datepicker__navigation-icon::before{
    border-width: 2px 2px 0 0;
    border-color: #667085;
    top: 16px;
    width: 7px;
    height: 7px;
}
.date_picker .react-datepicker__header{
    background-color: transparent;
    border-bottom: 0;
    color: #344054;
    font-size: 20px;
    font-weight: 700;
    padding: 15px 0 10px;
}
.date_picker .react-datepicker__navigation{
    top: 10px;
}
.date_picker .react-datepicker__navigation--next{
    right: 14px;
}
.date_picker .react-datepicker__navigation--previous{
    left: 16px;
}
.date_picker .react-datepicker__month .react-datepicker__month-text{
    color: #101828;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 16px;
    border-radius: 15px;
    margin-bottom: 8px;
    width: 100%;
}
.date_picker .react-datepicker__month-text--keyboard-selected{
    background-color: #2E90FA;
    color: #fff!important;
}
.date_picker .react-datepicker__month-text:hover{
    background-color: #EFF8FF;
    color: #2E90FA;
}
.date_picker .react-datepicker__month-text.react-datepicker__month--selected:hover{
    background-color: #2E90FA;
    color: #fff;
}
.date_picker .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after{
    display: none;
}
.date_picker .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before{
    display: none;
}
`
export default MyDiv
