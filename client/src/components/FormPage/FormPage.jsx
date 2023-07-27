import {useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/BoloForms.png';

axios.defaults.baseURL = 'https://mern-stack-app-delta.vercel.app/';
// axios.defaults.baseURL = 'http://localhost:9000';

const FormPage = () => {
  const [registerFormData, setRegisterFormData] = useState({
    fullname: '',
    phone: '',
    sex: '',
    email: '',
    password: '',
  });

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(registerFormData)

    try {
      const response = await axios.post('/api/v1/auth/register', registerFormData);
      console.log(response);
      console.log('Registration Successful');
    } catch (error) {
      console.error('Error Registering:', error);
    }
  };

  return (
    <div className='container-fluid pt-3 justify-between flex h-screen max-sm:flex-col'>
      <div className='left-part bg-slate-300 p-4 w-1/2 my-auto text-center h-screen flex flex-col justify-center align-center text-slate-950'>
        <img src={Logo} alt='logo' />
        <h3 className='text-3xl my-5'>Welcome to our Home!</h3>
        <p>Please register to be part of the family</p>
      </div>

      <div className='right-part w-1/2 flex p-3 justify-center bg-slate-950'>
        <form
          onSubmit={handleRegister}
          className='flex flex-col gap-5 justify-center my-auto items-center'
        >
          <input
            type='text'
            placeholder='Enter full name'
            name='fullname'
            value={registerFormData.fullname}
            onChange={handleRegisterInputChange}
            required
            className='p-4 max-sm:w-3/4'
          />

          <input
            type='text'
            placeholder='Phone number'
            name='phone'
            value={registerFormData.phone}
            required
            className='p-4 max-sm:w-3/4'
            onChange={handleRegisterInputChange}
          />

          <div className='sex flex gap-3 items-center'>
            <h6 className='text-2xl'>Sex</h6>
            <input
              type='radio'
              id='Male'
              name='sex'
              value='M'
              checked={registerFormData.sex === 'M'}
              onChange={handleRegisterInputChange}
            />
            <label htmlFor='Male'>M</label>
            <input
              type='radio'
              id='Female'
              name='sex'
              value='F'
              checked={registerFormData.sex === 'F'}
              onChange={handleRegisterInputChange}
            />
            <label htmlFor='Female'>F</label>
          </div>

          <input
            type='email'
            placeholder='Email'
            name='email'
            value={registerFormData.email}
            required
            className='p-4 max-sm:w-3/4'
            onChange={handleRegisterInputChange}
          />

          <input
            type='password'
            placeholder='Password'
            name='password'
            value={registerFormData.password}
            required
            className='p-4 max-sm:w-3/4'
            onChange={handleRegisterInputChange}
          />

          <input
            type='submit'
            value='Register'
            className='text-white bg-green-500 w-1/2 p-3 text-center rounded-lg'
          />
        </form>
      </div>
    </div>
  );
};

export default FormPage;
