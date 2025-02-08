import React from 'react'
import login from '../../assets/images/login.png'
import logo from '../../assets/images/logo.png'

const SignIn = () => {
    return (
        <div className='flex justify-center font-manrope'>
            <div className='max-w-[1800px] mx-auto w-full h-screen min-h-screen flex justify-between items-center sm:p-8 p-6'>
                {/* left side */}
                <div className='lg:w-1/2 w-full flex flex-col items-center justify-center'>
                    <div className='bg-white w-full sm:p-8 p-4 rounded-lg flex flex-col sm:gap-6 gap-4 items-center'>
                        <div className='w-full flex justify-center'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='text-center'>
                            <div className='font-bold md:text-2xl text-xl'>Sign In</div>
                            <div className='text-other'>Please enter your information to continue</div>
                        </div>

                        <form className='w-full flex flex-col md:gap-6 gap-4 '>
                            {/* Email */}
                            <div className='w-full flex flex-col gap-2'>
                                <label className='text-other'> Email Address</label>
                                <input type="text" placeholder='Please Enter your Email Address' className='border outline-none border-border rounded-lg px-3 py-3.5' />
                            </div>

                            {/* Password */}
                            <div className='flex flex-col gap-3'>
                                <div className='w-full flex flex-col gap-2'>
                                    <label className='text-other'> Password</label>
                                    <input type="password" placeholder='Please Enter your password' className='border outline-none border-border rounded-lg px-3 py-3.5' />
                                </div>
                                <div className='flex items-center flex-wrap justify-between px-1 gap-2 w-full'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-5 h-5' />
                                        <p>Remember me!</p>
                                    </div>
                                    <div className='text-btnBg'>Forget Password?</div>
                                </div>
                            </div>

                            <button className='w-full py-2.5 bg-btnBg px-4 text-white rounded-md whitespace-nowrap '>Sign In</button>
                        </form>
                    </div>
                </div>

                {/* right side */}
                <div className='flex-1 h-full lg:block hidden'>
                    <div className='flex flex-col items-center xl:pb-[20%] lg:pb-[30%] pb-[60%] justify-between gap-8  px-6 py-12 rounded-xl w-full h-full bg-gradient-to-b from-[#8979FF] to-[#6186CC]'>
                        <div className='text-white xl:text-4xl lg:text-3xl  font-bold w-[90%] text-center'>
                            <h1>Welcome Back</h1>
                            <h1>Please Sign in to your Denka Account</h1>
                        </div>
                        <div className='w-full flex justify-center'>
                            <img src={login} alt="login" className='w-[70%] ' />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
