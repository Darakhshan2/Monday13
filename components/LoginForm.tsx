"use client" // client-side component (browser sy implimentation hogi )
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card , CardContent , CardDescription , CardTitle , CardFooter , CardHeader } from "./ui/card"
import { Sign } from "crypto"

const LoginForm = ()=>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt with : ', {email ,password })
    }
    return(
        <Card className="w-[350px] text-white">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Enter your Credentrials to access your account </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div className="space-y-2 text-black">
                        <Input 
                        type="email"
                        placeholder="Email"
                        value={email} // set from used state
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2 text-black">
                        <Input 
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full border-2 border-white shadow-lg hover:shadow-white" onChange={()=>alert('Thanks for your response')}>Login</Button>
                </form>
              </CardContent>
        </Card>
    )
}

export default LoginForm;

