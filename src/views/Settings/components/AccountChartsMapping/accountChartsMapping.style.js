import styled from 'styled-components'

const MyDiv = styled.div`
.mapping_header{
    border-bottom: 1px solid #EAECF0;
    padding-bottom: 10px;
}
.flex_items{
    display: flex;
    align-items: center;
    column-gap: 12px;
}
.grid_container{
    grid-template-columns: 25% 1fr;
    grid-gap: 70px;
    margin-top: 16px
}
.grid_inner_container{
    grid-template-columns: 50% 1fr;
    column-gap: 30px;
}
.mapping_box{
    border-radius: 8px;
    border: 1px solid #EAECF0;
    position: relative;
}
.card_heading{
    background: #fcfcfd;
    padding: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom: 1px solid #EAECF0;
}
.mapping_card_wrapper{
    padding: 8px 8px 0px;
}
.mapping_card{
    margin-bottom: 12px;
}
.mapping_item{
    align-items: center;
    background: #F2F4F7;
    column-gap: 8px;
    padding: 6px 8px;
    border-radius: 8px;
    border: 1px solid #D0D5DD;
    margin-top: 8px;
}
.icon_size {
    width: auto;
    height: 20px;
    object-fit: contain;
}
.mapping_icon{
    width: 24px;
    height: 24px;
    object-fit: contain;
    position: absolute;
    top: 6px;
    right: -48px;
}
`
export default MyDiv
