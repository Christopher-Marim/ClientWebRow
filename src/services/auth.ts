import api from "./api";

interface Response {
  token: string;
  user: {
    nome: string,
    cpf: string,
  };
}
interface RequestSignIn {
  cpf: string,
}

export async function signIn({ cpf}: RequestSignIn): Promise<Response|void> {
  try {
    const { data, status } = await api.get(`/acesso?method=loginApp&pLogin=${cpf}`)
    const user = data?.data[0]
    return new Promise((resolve) => {
      resolve({
        token: `${user?.chave}`,
        user: {
          nome: `${user?.nome}`,
          cpf: `${cpf}`
        }
      });
    });   
  } catch (error) {
    alert('Usuário ou senha inválidos');
    console.error(error)
  }
}