import React from 'react'
import './form.css'

const handleLogin = () => {

}

const FormPage = () => {
  return (
    <div className='container-fluid pt-3 justify-between flex px-8 h-max'>
      <div className='left-part bg-red-500 p-4 w-1/2 my-auto
      text-center'>
        <h3>Welcome to our Home!</h3>
        <p>Please register to be part of the family</p>
      </div>
 
      <div className='right-part w-1/2 flex p-3 justify-center bg-white-500'>
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

          <div className='sex'>
          <h6>Sex</h6>
          <label id='Male'>M</label>
          <label id='Female'>F</label>
          </div>

          <input type='email'
          placeholder='Email'
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