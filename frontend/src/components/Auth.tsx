import { SignupInput } from '@100xdevs/medium-common';
import axios from 'axios';
import { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../../config'
function Auth({ type }: { type: 'signup' | 'signin' }) {
    const navigate = useNavigate()
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: "",
    })

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'signin'}`, postInputs)
            const jwt = response.data.jwt
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (e) {
            
        }
    } 
    
    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className="flex justify-center">
                <div>
                    <div className='px-10'>
                        <div className='text-4xl font-extrabold mt-4 text-center mb-4'>
                           {type === 'signup' ?  'Create an account' : 'Log in'}
                        </div>
                        <div className='text-slate-400'>
                            {type === 'signup' ? "Already have an account?" : "Don't have account? "}  
                            <Link to={type === 'signup' ? '/signin' : '/signup'} className='underline pl-2'>{type === 'signup' ? 'Login' : 'Signup'}</Link>
                        </div>
                    </div>
                    <div className='pt-6'>
                        {type === 'signup' ? <LabelledInput label='Name' placeholder='John Doe...' type='text' onchange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                name: e.target.value
                            })
                        }} /> : null}
                        <LabelledInput label='Email' placeholder='Doe@gmail.com' type='text' onchange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            })
                        }} />
                        <LabelledInput label='Password' placeholder='******' type='password' onchange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            })
                        }} />
                        <button onClick={sendRequest} type="button" className="mt-4 text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Signup" : "Signin" }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

function LabelledInput({ label, placeholder, onchange, type }: LabelledInputType) {
    return <>
        <div className='pb-5'>
            <label className="block mb-2 text-sm font-semibold font-medium text-black ">{label}</label>
            <input type={type || 'text'} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} onChange={onchange} required />
        </div>
    </>
}

export default Auth