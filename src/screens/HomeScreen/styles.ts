import  styled  from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding:50px 20px;
    width:100%;
    height:100vh;

    span{
        position: absolute;
        bottom: 30px;
        text-decoration: underline;
        letter-spacing: 1px;
        cursor: pointer;
    }
   
`;

export const WrapperLogin = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    max-width: 600px;

    input{
        width: 100%;
        padding:18px;
        border-radius: 12px;
        border:none;
        background-color: white;
        color:black;
        margin-bottom: 20px;
        font-size: 20px;
        letter-spacing: 2px;
        ::placeholder{
            color:gray;
        }
    }

    h5{
        color:white;
        margin-bottom: 25px;      
        font-size: 22px;
        text-align: center;
        letter-spacing: 2px;
    }

    button{
        width: 100%;
        padding:18px;
        border-radius: 12px;
        border:2px solid white;
        background-color: transparent;
        color:white;
        font-size: 20px;
        text-transform:uppercase ;
        letter-spacing: 2px;
        font-weight: bold;
        cursor:pointer;
    }
`;

