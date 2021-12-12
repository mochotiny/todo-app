import React from 'react'

interface LoginProps {
    renderSignup: () => void
}

const Login = ({renderSignup}: LoginProps) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    

    return (
        <div style={{height: '300px'}}>
            <h1 className="text-center text-primary font-bold">Login</h1>
            <div className="mb-4">
                <label className="mb-2">username</label>
                <input onChange={(e) => setUsername(e.target.value)} className="px-3 py-2 w-full border border-gray-400 rounded-md" type="text" placeholder="username" />
            </div>
            <div className="mb-4">
                <label>password</label>
                <input onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 w-full border border-gray-400 rounded-md" type="password" placeholder="password" />
            </div>
            <div className="flex justify-between item-center">
                <div>
                    <p>No account? <span className="text-primary cursor-pointer" onClick={renderSignup} >Sign up now</span></p>
                </div>
                <button className="rounded-lg px-6 py-3 font-bold bg-primary">Login</button>
            </div>
        </div>
    )
}
export default Login;