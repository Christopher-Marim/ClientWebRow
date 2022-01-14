import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const WrapperCam = styled.div`
  width:95%;
  height:80%;
  border-radius:20px;
  margin-bottom:40px;

  @media (min-width: 1500px) {
    width:50%;
    margin-bottom:20px;
  }
`;