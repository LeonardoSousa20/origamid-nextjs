'use server'

import {cookies} from "next/headers";

export async function getCookie(key: string) {
    const cookieHandler = await cookies()
    const token =  cookieHandler.get(key)
    return token?.value
}