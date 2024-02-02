import React from "react";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./styles.module.css";

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
            <input className={styles.inputs} />

            <button className={styles.continue_btn}>Continue</button>
            <span className={styles.text_privacy_policy}>
              By continuing, you agree to Amazon's{" "}
              <Link to="" style={{ textDecoration: "none" }}>
                <span className={styles.diff_styling}>
                  Conditions of <br></br> Use{" "}
                </span>
              </Link>
              and{" "}
              <Link to="" style={{ textDecoration: "none" }}>
                <span className={styles.diff_styling}>Privacy Notice.</span>
              </Link>
            </span>

            <div className={styles.need_help_p}>
              <ArrowRightIcon className={styles.suggestion_arrow} />
              <Link to="" className={styles.need_help}>
                Need help?
              </Link>
            </div>

            <span className={styles.buying_for_work}>Buying for work?</span>
            <Link to="/login" className={styles.shop_on_amazon_link}>
              Shop on Amazon Business
            </Link>
          </div>
        </form>
      </div>

      <div className={styles.text_divide_new_to_amazon}>
        <div className={styles.divide_new_to_amazon}></div>
        <span className={styles.new_to_amazon}>New to Amazon?</span>
        <div className={styles.divide_new_to_amazon}></div>
      </div>

      <Link to="/register">
        <button className={styles.create_account_btn}>
          Create your amazon account
        </button>
      </Link>

      <div className={styles.divider}></div>
      <div className={styles.last_content}>
        <div className={styles.links}>
          <Link to="" target="_blank" className={styles.link}>
            Condition of use
          </Link>
          <Link to="" target="_blank" className={styles.link}>
            Privacy Policy
          </Link>
          <Link to="" target="_blank" className={styles.link}>
            Help
          </Link>
        </div>
        <span className={styles.inc}>
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}
