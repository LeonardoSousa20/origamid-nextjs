'use client'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useState} from "react";


export default function Form() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        if(response.ok) window.location.href= '/'
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 items-center justify-center h-screen'>
                <div className='flex flex-col items-start gap-1'>
                    <Label htmlFor='username'>Username</Label>
                    <Input id='username' type='text' placeholder='Username' onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>
                <div className='flex flex-col items-start gap-1'>
                    <Label htmlFor='password'>Password</Label>
                    <Input id='password' type='password' placeholder='´Password' onChange={(e) => setUser({...user, [e.target.id]: e.target.value})}/>
                </div>
                <div>
                    <Button className='cursor-pointer' >Entrar</Button>
                </div>
            </div>
        </form>

    );
}
