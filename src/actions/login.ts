'use server'

import {setCookie} from "@/actions/set-cookie";

export async function login(userData: {username: string, password: string}) {
try {
    const response = await fetch(`https://api.origamid.online/conta/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-Type": "application/json"},
    })

    const data = await response.json();

    await setCookie('token', data.token);

    return data.token

}catch(error) {
    return false
}
}