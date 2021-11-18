import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react';
import  {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';
import "yup-phone";
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {

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
    workCompany: Yup.string()
        .required('Work Company is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    mobileNumber:Yup.string().phone('IN',true)
        .required('Enter valid Mobile Number'),
    acceptTerms: Yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
});
const formOptions = { resolver:yupResolver(validationSchema) };

const { register, handleSubmit, formState } = useForm(formOptions);
const { errors } = formState;
const [isSubmit,setIsSubmit] = useState(false)
const router = useRouter()

function aboutPage(){
  router.push("/login");
}

function onSubmit(data:any) {
  console.log(data)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    setIsSubmit(isSubmit => !isSubmit)
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
            <h1 className={styles.signUpDashboardText}>SignUp for Our Dashboard!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Work Email</b></label>
          <input type="email" {...register('email')} placeholder="work Email" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.email?.message}</p></div>
          <div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Work Company</b></label>
          <input type="text"{...register('workCompany')} placeholder="work Company" className={styles.myInput}/></div>
          <p className={styles.invalidfeedback}>{errors.workCompany?.message}</p><div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Password</b></label>
          <input type="password" {...register('password')} placeholder="Enter your Password" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.password?.message}</p>
          </div>
          <div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Confirm Password</b></label>
          <input type="password" {...register('confirmPassword')} placeholder="Re-Enter Your Password" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.confirmPassword?.message}</p>
          </div>
          <div>
          <label className={styles.inputDescription}><span className={styles.starSignUp}>* </span><b>Mobile Number</b></label>
          <input type="text" {...register('mobileNumber')} placeholder="Enter Your Number" className={styles.myInput}/>
          <p className={styles.invalidfeedback}>{errors.mobileNumber?.message}</p>
          </div>
          <button type="submit" className={styles.sButton}>Register</button>
       {/* <button type="button" onClick={() => reset()} className={styles.sButton}>Reset</button> */}
          <h2 className={styles.termsAndConditions}>Please read the <span className={styles.termsAndConditionsMiddle}>BrokenTusk Terms Of Service</span> before signing up.</h2>
           <div> <input id="checkbox" type="checkbox" {...register('acceptTerms')} />
              <label htmlFor="checkbox"> Yes,I have read and agreed to terms</label>
              <p className={styles.invalidfeedback}>{errors.acceptTerms?.message}</p></div>
              {isSubmit && <div className={styles.thankyouCardContainer}>
                <p className={styles.thankyouCardPara}><span className={styles.thankyouCardParaFirst}>Thank you for signing up!</span><br />Complete your verification by clicking the link and Please check your e-mail as well as spam folder!</p>
              </div>}
              <p>Already have an Account?<span onClick={aboutPage} className={styles.loginLine}> Login here!</span></p>
    </form>           
               </div>
            </div>
          </div>
    </>
  )
}

export default Home;