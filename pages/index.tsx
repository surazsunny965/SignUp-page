import type { NextPage } from 'next'
import { useState, useEffect } from 'react';

import KM_Input from '../components/input-field'

import Button from '../components/Button';
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
            <KM_Input name="Work Email" typ="email" />
            <KM_Input name="Company name" typ="text" />
            <KM_Input name="Password" typ="password" />
            <KM_Input name="Confirm Password" typ="password" />
            <KM_Input name="Mobile Number" typ="tel" />
            <Button className = "sButton" onClick="function" buttonText="Submit"/>
            <div>
              <h2 className={styles.termsAndConditions}>Please read the <span className={styles.termsAndConditionsMiddle}>BrokenTusk Terms Of Service</span> before signing up.</h2>
              <input id="checkbox" type="checkbox" />
              <label htmlFor="checkbox"> Yes,I have read and agreed to terms</label>
              <div className={styles.thankyouCardContainer}>
                <p className={styles.thankyouCardPara}><span className={styles.thankyouCardParaFirst}>Thank you for signing up!</span><br />Complete your verification by clicking the link and Please check your e-mail as well as spam folder!</p>
              </div>
              <hr />
              <p>Already have an Account?<span className={styles.loginLine}> Login here!</span></p>
            </div>
            
            </div></div>
      </div>
    </>
  )
}

export default Home
