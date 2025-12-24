'use client'
import Link from 'next/link'
import SocialSignUp from '../SocialSignUp'
import Logo from '../../layout/header/logo'
import Loader from '../../shared/Loader'
const SignUp = () => {
  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignUp />

      <span className='my-8 flex items-center justify-center text-center'>
        <span className='flex-grow border-t border-white/20'></span>
        <span className='mx-4 text-base text-white'>OR</span>
        <span className='flex-grow border-t border-white/20'></span>
      </span>

      <form>
        <div className='mb-[22px]'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            required
            className='w-full rounded-md border border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Email'
            name='email'
            required
            className='w-full rounded-md border border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            required
            className='w-full rounded-md border border-white/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center text-lg text-white font-medium justify-center rounded-md bg-primary px-5 py-3 transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border cursor-pointer'>
            Sign Up
          </button>
        </div>
      </form>

      <p className='text-body-secondary mb-4 text-white text-base'>
        By creating an account you are agree with our{' '}
        <a href='/#' className='text-primary hover:underline'>
          Privacy
        </a>{' '}
        and{' '}
        <a href='/#' className='text-primary hover:underline'>
          Policy
        </a>
      </p>

      <p className='text-body-secondary text-white text-base'>
        Already have an account?
        <Link href='/' className='pl-2 text-primary hover:underline'>
          Sign In
        </Link>
      </p>
    </>
  )
}

export default SignUp
