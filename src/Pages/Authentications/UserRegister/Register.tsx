import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from "./styles.module.css";

export function Register() {
  return (
    <>
    <div className={styles.parent}>
      <div className={styles.amazon_logo_parent}>
        <img
          src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
          alt="amazon-logo"
          className={styles.create_account_amazon_logo}
        />
      </div>
      <div className={styles.form_parent}>
        <form>
          <div className={styles.wrap}>
            <span className={styles.text_create_account}>Create account</span>
            <label className={styles.label}>Your name</label>
            <input placeholder="First and last name" className={styles.inputs}/>
            <label className={styles.label}>Mobile Number or Email </label>
            <input className={styles.inputs}/>
            <label className={styles.label}>Password</label>
            <input placeholder="At least 6 characters" className={styles.inputs}/>
            <span className={styles.text_password_instructions}><span className={styles.i}>i</span> Passwords must be atleast six characters.</span>
            <label className={styles.label}>Re-enter password</label>
            <input className={styles.inputs}/>
            <button className={styles.continue_btn}>Continue</button>
            <span className={styles.text_privacy_policy}>By creating account, you agree to Amazon's <br></br> <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088" style={{textDecoration: "none"}}><span className={styles.diff_styling}>Conditions of Use </span></Link>and <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496" style={{textDecoration: "none"}}><span className={styles.diff_styling}>Privacy Notice.</span></Link></span>

            <div className={styles.form_last_wrap}>
            <span className={styles.text_already_have_account}>Already have an account?<Link to="/login" style={{ textDecoration: 'none' }}> <span className={styles.sign_in}>Sign in<ArrowRightIcon className={styles.arrows}/></span></Link></span>
            <span className={styles.text_already_have_account}>Buying for work? <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.sign_in}>Create a free business account<ArrowRightIcon className={styles.arrows}/></span></Link></span>
            </div>
           
          </div>
        </form>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.last_content}>
        <div className={styles.links}>
        <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088" target="_blank" className={styles.link}>Condition of use</Link>
        <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496" target="_blank"  className={styles.link}>Privacy Policy</Link>
        <Link to="https://www.amazon.com/gp/help/customer/display.html" target="_blank"  className={styles.link}>Help</Link>
        </div>
        <span className={styles.inc}>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
    </>
  );
}
