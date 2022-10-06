import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const onChange = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email)
            toast.success('Reset link has been sent to your email')
        } catch (error) {
            toast.error('could not send reset email')
        }
    }
    return (
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>Forgot Password</p>
            </header>

            <main>
                <form onSubmit={onSubmit}>
                    <input type="email" className='emailInput' placeholder='Email' id='email' value={email} onChange={onChange} />
                    <Link className='forgotPasswordLink' to='/sign-in'>Sign In</Link>
                    <div className='signInBar'>
                        <div className='signInText'>Send Reset Link</div>
                        <button className='signInButton' type='submit'>
                            <ArrowRightIcon fill='#fff' width='34px' height='34px' />
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default ForgotPassword