import {NextRequest} from "next/server";
import {cookies} from "next/headers";

interface userForm{
    username: string;
    password: string;
}
export async function POST(request: NextRequest){
    const body: userForm = await request.json();

    const response = await fetch("https://api.origamid.online/conta/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })

    if(!response.ok) {
        return Response.json({message: "Não autorizado"}, {status: 401});
    }
    const data = await response.json()
    const appCoookies = await cookies()
    appCoookies.set("token", data.token, {
        secure: true,
        httpOnly: true,
        sameSite: "lax"
    })


    return Response.json({message: 'Autorizado'}, {status: 200});
}