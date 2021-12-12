import React from 'react';
import axios from 'axios';

interface SignupProps {
    renderLogin: () => void
}

const Signup = ({renderLogin}: SignupProps) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [disabled, setDisabled] = React.useState(false);

    const onSubmit = () =>{
        axios.post('http://localhost:5000/signup', {
            username: username,
            password: password
        }).then(res => console.log(res));
    }


    React.useEffect(() => {
        if (password === confirmPassword) setDisabled(false);
        else setDisabled(true);
    }, [password, confirmPassword])

    return (
        <div style={{height: '300px'}}>
            <h1 className="text-center text-primary font-bold">Sign Up</h1>
            <div className="mb-4">
                <label className="mb-2">username</label>
                <input onChange={(e) => setUsername(e.target.value)} className="px-3 py-2 w-full border border-gray-400 rounded-md" type="text" placeholder="username" />
            </div>
            <div className="mb-4">
                <label>password</label>
                <input onChange={(e) => setPassword(e.target.value)} className="px-3 py-2 w-full border border-gray-400 rounded-md" type="password" placeholder="password" />
            </div>
            <div className="mb-4">
                <label> confirm password</label>
                <input onChange={(e) => setConfirmPassword(e.target.value)} className="px-3 py-2 w-full border border-gray-400 rounded-md" type="password" placeholder="password" />
            </div>
            <div className="flex justify-between item-center">
                <div>
                    <p>Already a member? <span className="text-primary cursor-pointer" onClick={renderLogin} >Log in</span></p>
                </div>
                <button className={`rounded-lg px-6 py-3 font-bold text-neutral ${disabled ? "bg-secondary" : "bg-primary"}`} disabled={disabled} onClick={() => onSubmit()} >Signup</button>
            </div>
        </div>
    )
}
export default Signup;