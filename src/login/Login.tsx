import React, {useState} from 'react'
import axios from 'axios';
import { useAuth } from './login-context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (!email || !password) {
        setError(true);
        setLoading(false)
        return
      }
      const res = await axios.post("http://65.18.112.78:44010/rems/api/v1/Signin", {email, password});
      
      auth.login(res.data.data.tokens);

      const userRole = JSON.parse(atob(res.data.data.tokens.accessToken.split('.')[1])).role;

      const decodededToken = jwtDecode(res.data.data.tokens.accessToken);

      console.log(decodededToken)
      

      if (userRole.toLowerCase() === 'admin') {
        navigate('/admin');
      } else if (userRole.toLowerCase() === 'agent') {
        navigate('/agent');
      }else if (userRole.toLowerCase() === "client") {
        navigate('/client');
      } else {
        navigate('/');
      }

      setLoading(false);

    } catch (error) {
      console.log("Login failed", error);
      setError(true);
      setLoading(false)
      setEmail('')
      setPassword('')
      
    }
  };

  if(loading) return <p>Loading...</p>

  return (
    <form className=' w-[80%] md:w-[40%] lg:w-[30%] xl:w-[20%] border-2 flex flex-col justify-center items-center mx-auto mt-[8rem] rounded-md shadow-md py-5'>

      <h1 className='text-[1.2rem] font-bold text-blue-400'>REMS Login</h1>

      <div className='flex flex-col w-[100%] p-5'>
        <input 
          type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`w-[90%] focus:outline-none border-b-2 mt-5 pb-2 ${error ? "border-red-200": ""}`}
          placeholder='email....'
        />

        <input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`w-[90%] focus:outline-none border-b-2 mt-5 pb-2 ${error ? "border-red-200" : ""}`}
          placeholder='password....'
        />
      </div>

      {error && <p className='text-[0.9rem] my-5 text-red-500'>Wrong password or email</p>}

      <button 
        onClick={handleSubmit} 
        className='bg-blue-400 active:bg-blue-700 hover:bg-blue-500 text-white text-[0.9rem] font-bold px-5 py-2 rounded-xl'
      >
        Login
      </button>

      <div className='text-center mt-5'>
        <p className='mb-2 classname text-gray-600'>If you don't have an account?</p>
        <p>
          <span className='font-bold text-gray-500'>Sign Up</span>
          <Link to={'/register'}>
              <span className='font-bold hover:text-blue-600'> here.</span>
          </Link>
        </p>
      </div>
    </form>
  )
}

export default Login