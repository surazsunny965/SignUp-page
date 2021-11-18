import { useRouter } from 'next/router'
import React, {useState, useEffect } from 'react';
import  {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';
//import { handler } from './api/signup';
import "yup-phone";
import styles from '../styles/Home.module.css'

export default function login(){
    const [screenWidth, setscreenWidth] = useState(600);
  useEffect(() => {
    setscreenWidth(window.innerWidth);
  }, [])

  useEffect(() => {
    function handleResize() {
      setscreenWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});
const formOptions = { resolver:yupResolver(validationSchema) };

const { register, handleSubmit, formState } = useForm(formOptions);
const { errors } = formState;
const router = useRouter()

function aboutPage(){
  router.push("/");
}

function onSubmit(data:any) {
  console.log(data)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false
}

  return (
    <>
      <div className={styles.totalSIgnUpContainer}>
        {
          screenWidth > 600 ? <div className={styles.rootFiContainer}>
            <p className={styles.RootFiText}>RootFi</p>
            <h1 className={styles.RootFiDEscription}>Empowering Tech Companies to offer Lending</h1>
          </div> : <div></div>
        }

      <div className={styles.RootFISignUpcontainer}>
        <div className={styles.innerSignupCOntainer}>
            <h1 className={styles.RootFiSignUpHeading}>RootFi</h1>
            <h1 className={styles.signUpDashboardText}>Login to Your Dashboard!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Work Email</b></label>
          <input type="email" {...register('email')} placeholder="Enter your Work Email" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.email?.message}</p></div>
          <p className={styles.invalidfeedback}>{errors.workCompany?.message}</p><div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Password</b></label>
          <input type="password" {...register('password')} placeholder="Enter your Password" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.password?.message}</p>
          </div>
          <button type="submit" className={styles.sButton}>Login</button>
              <p>Didn't have an Account?<span onClick={aboutPage} className={styles.loginLine}> SignUp here!</span></p>
        </form>           
               </div>
            </div>
          </div>
    </>
  )

}