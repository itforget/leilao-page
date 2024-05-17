import axios from "axios";

export async function auth() {
  try {
    const id = document.cookie
      .split("; ")
      .find((item) => item.startsWith("id="))
      .split("=")[1];
    const token = document.cookie
      .split("; ")
      .find((item) => item.startsWith("token="))
      .split("=")[1];

    const response = await axios.get(
      `https://leilao-server.vercel.app/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const userAuth = true
    const nameUser = response.data.user.name;
    console.log(nameUser)
    return userAuth, nameUser 
  } catch (error) {
    console.error("Usuário não autenticado!");
    return null;
  }
}