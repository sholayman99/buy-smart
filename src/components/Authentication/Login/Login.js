import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';


const Login = () => {


 const handleLogin = e =>{
    e.preventDefault()
 }


    return (
        <div className='login-bg flex justify-center items-center  '>

            <div className='login-form lg:m-12 m-16 p-6 lg:py-12 lg:px-20 rounded '>
              <h1 className='lg:text-4xl text-2xl font-bold text-white mb-5'>LOG IN</h1>
              <form onSubmit={handleLogin} className=' flex flex-col'>

                <input type={'email'} className='auth-input mb-3' placeholder='Your Email..' />
                <input type={'password'} className='auth-input ' placeholder='Your Password..' />
                <input type={'submit'} className='auth-submit text-xl font-bold py-2 mt-4 rounded' value='Sign In' />

              </form>
            
            <p className='text-white mt-2'>Not a member?
              <span className='font-bold ml-1 text-black register'>
              <Link to={'/register'} >Register Now</Link>
                </span> </p>

                <div className='flex items-center justify-center'>
                    <div style={{ height: "2px" }} className='bg-white w-24  ' ></div>
                    <p className='text-white font-bold m-2'>OR</p>
                    <div style={{ height: "2px" }} className='bg-white w-24 ' ></div>
                </div>

                <div className='auth-submit font-bold py-2 mt-4 flex items-center justify-around rounded'>
                <p className='text-2xl'>
                    <BsGoogle  />
                    </p>
                    <p className='text-lg '>
                    <input type={'submit'}  value='Sign in with Google' />
                    </p>
                   
                   
                    
                </div>

            </div>
            
        </div>
    );
};

export default Login;