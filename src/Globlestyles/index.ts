import styled from "styled-components";

export const Ui_Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Ui_FlexBox = styled.div`
  display: flex;

 
&.gap{
 gap: 30px;}
  & .flex-wrap{
   flex-wrap: wrap;
  }
  & .justify-between {
    justify-content: space-between;
  }
    & .align-center {
    align-items: center;
  }
    &.justify-center {
    justify-content: center;
  }
`;

export const Container=styled.div`

margin-left:6%;
`