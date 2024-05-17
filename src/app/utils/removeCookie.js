export default function RemoveCookie(){
   function removeCookie(){
    document.cookie = "id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
    alert("Usuário deslogado com sucesso!");
   }
    return(
        <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={removeCookie}>
            Logout
        </button>
        </>
    )
}