"use client" // client-side component (browser sy implimentation hogi )
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card , CardContent , CardDescription , CardTitle , CardFooter , CardHeader } from "./ui/card"

const SignupForm = ()=>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setconfirmPassword] = useState("")

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt with : ', {email ,password})
    }
    return(
        <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Sign up</CardTitle>
                <CardDescription>Enter Your Details Below asked in the input ... </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div className="space-y-2">
                        <Input 
                        type="email"
                        placeholder="Email"
                        value={email} // set from used state
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="password"
                        value={email}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e)=>setconfirmPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full" onChange={()=>alert('Thanks for SignUp')}>Login</Button>
                </form>
              </CardContent>
        </Card>
    )
}

export default SignupForm;