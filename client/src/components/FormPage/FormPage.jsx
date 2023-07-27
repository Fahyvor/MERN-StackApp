import React from 'react'

const handleLogin = () => {

}

const FormPage = () => {
  return (
    <div className='container-fluid pt-3 justify-between flex h-screen'>
      <div className='left-part bg-slate-300 p-4 w-1/2 my-auto
      text-center h-screen flex flex-col justify-center align-center text-slate-950'>
        <h3>Welcome to our Home!</h3>
        <p>Please register to be part of the family</p>
      </div>
 
      <div className='right-part w-1/2 flex p-3 justify-center bg-slate-950'>
        <form onSubmit={handleLogin} className='flex flex-col gap-5 justify-center
        my-auto
        items-center'>
          <input type='text'
          placeholder='Enter full name'
          required
          className='p-4'
          />

          <input type='text'
          placeholder='Phone number'
          required
          className='p-4'
          />

          <div className='sex flex gap-3 items-center'>
          <h6 className='text-2xl'>Sex</h6>
          <input type='radio' id='Male' name="M" value="M" />
          <label for='Male'>M</label>
          <input type='radio' id='Female' name="F" value="F" />
          <label for='Female'>F</label>
          </div>

          <input type='email'
          placeholder='Email'
          required
          className='p-4'
          />

          <input type='password'
          placeholder='Password'
          required
          className='p-4'
          />

          <submit className='submit'
          className='text-white bg-green-500
          w-1/2 p-3 text-center rounded-lg'>Register</submit>
        </form>
      </div>
    </div>
  )
}

export default FormPage;