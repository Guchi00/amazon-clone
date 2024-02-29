import { message } from "antd";
import React, { ChangeEvent, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { InitialStateTypes } from "../UserRegister/Register";
import styles from "./styles.module.css";

const InitialRegisterState = {
  userName: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

export const Signin = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] =
    useState<InitialStateTypes>(InitialRegisterState);
  const [existingUsers] = useLocalStorageState<string[]>("existingUsers", {
    defaultValue: [],
  });

  const handleSignIn = () => {
    if (userInput.email === "") {
      return message.error("Input is required");
    }
    if (!existingUsers.includes(userInput.email)) {
      return message.error("Unexisting user! Please create an account");
    } else {
      navigate("/");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((userInputs) => ({
      ...userInputs,
      [event.target.name]: event.target.value,
    }));
  };
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
            <input
              className={styles.inputs}
              type="text"
              name="email"
              onChange={handleChange}
            />

            <button
              className={styles.continue_btn}
              type="button"
              onClick={handleSignIn}
            >
              Continue
            </button>
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
};
