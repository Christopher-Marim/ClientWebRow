import  styled  from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding:50px 20px;
    width:100%;
    height:100vh;

    .imgUser {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    object-fit:cover;
    margin:10px;
    border: solid 3px white;
  
  }

  h3 {
    width:55%;
    margin:30px 10px;
    font-size: 18px;
    text-align:center;
    letter-spacing:2px;

    strong{
      color:#F09C9C;
    }
  }
   
`;


