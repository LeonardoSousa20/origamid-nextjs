'use client'
import { setCookie } from "@/actions/set-cookie";
import {useState} from "react";
import {getCookie} from "@/actions/get-cookie";

export default function Home() {
  const [cookieValue, setCookieValue] = useState('')

  async function handleClick(){
    const response = await setCookie('segredo', '123456')
  }

  async function handleGetCookie(){
    const response = await getCookie('token');
    if(response) setCookieValue(response)
  }
  return (
     <main>
       <h1>Home</h1>
       <button onClick={handleClick}>Definir Cookie!</button>
         <button onClick={handleGetCookie}>Recuperar Cookie!</button>
         {cookieValue ? (<p>{cookieValue}</p>) : null}
     </main>
  );
}
