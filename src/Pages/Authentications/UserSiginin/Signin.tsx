import React from 'react';
import { Link } from "react-router-dom";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import styles from "./styles.module.css"

export function Signin() {
  return (
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
            <span className={styles.text_sign_in}>Sign in</span>
            <label className={styles.label}>Email or mobile phone number</label>
            <input className={styles.inputs}/>
           
            <button className={styles.continue_btn}>Continue</button>
            <span className={styles.text_privacy_policy}>By continuing, you agree to Amazon's <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088" style={{textDecoration: "none"}}><span className={styles.diff_styling}>Conditions of <br></br> Use </span></Link>and <Link to="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496" style={{textDecoration: "none"}}><span className={styles.diff_styling}>Privacy Notice.</span></Link></span>

            <div className={styles.need_help_p}>
            <ArrowRightIcon className={styles.suggestion_arrow}/>
            <span  className={styles.need_help}>Need help?</span>
            </div>

            <span className={styles.buying_for_work}>Buying for work?</span>
            <Link to="/login" className={styles.shop_on_amazon_link}>Shop on Amazon Business</Link>

          </div>
        </form>
      </div>

      <div className={styles.text_divide_new_to_amazon}>
        <div className={styles.divide_new_to_amazon}></div>
        <span className={styles.new_to_amazon}>New to Amazon?</span>
        <div className={styles.divide_new_to_amazon}></div>
      </div>

      <button className={styles.create_account_btn}>Create your amazon account</button>

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
  )
}
