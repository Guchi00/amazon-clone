import React, { ChangeEvent, useState } from "react";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "./styles.module.css";
import useLocalStorageState from "use-local-storage-state";

const InitialRegisterState = {
  userName: "",
  email: "",
  password: "",
  reEnterPassword: "",
};

export type InitialStateTypes = {
  userName: string;
  email: string;
  password: string;
  reEnterPassword: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] =
    useState<InitialStateTypes>(InitialRegisterState);
  const [existingUsers, setExistingUsers] = useLocalStorageState<string[]>(
    "existingUsers",
    { defaultValue: [] }
  );

  const handleRegister = () => {
    console.log(userInput, "userInput");
    if (
      userInput.userName === "" ||
      userInput.email === "" ||
      userInput.password === "" ||
      userInput.reEnterPassword === ""
    ) {
      return message.error("All input is required");
    }

    if (existingUsers.includes(userInput.email)) {
      return message.error("Sign in! user already exist");
    }

    if (userInput.password !== userInput.reEnterPassword) {
      return message.error("Password mismatch");
    }

    // set existingn users existing users + userInput.email
    setExistingUsers((current) => [...current, userInput.email]);
    message.success("Registration done successfully");
    navigate("/");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
            <span className={styles.text_create_account}>Create account</span>
            <label className={styles.label}>Your name</label>
            <input
              placeholder="First and last name"
              className={styles.inputs}
              type="text"
              name="userName"
              onChange={handleChange}
            />
            <label className={styles.label}>Mobile Number or Email </label>
            <input
              className={styles.inputs}
              type="text"
              name="email"
              onChange={handleChange}
            />
            <label className={styles.label}>Password</label>
            <input
              placeholder="At least 6 characters"
              className={styles.inputs}
              type="password"
              name="password"
              onChange={handleChange}
            />
            <span className={styles.text_password_instructions}>
              <span className={styles.i}>i</span> Passwords must be atleast six
              characters.
            </span>
            <label className={styles.label}>Re-enter password</label>
            <input
              className={styles.inputs}
              type="password"
              name="reEnterPassword"
              onChange={handleChange}
            />
            <button
              className={styles.continue_btn}
              type="button"
              onClick={handleRegister}
            >
              Continue
            </button>
            <span className={styles.text_privacy_policy}>
              By creating account, you agree to Amazon's <br></br>{" "}
              <Link to="" style={{ textDecoration: "none" }}>
                <span className={styles.diff_styling}>Conditions of Use </span>
              </Link>
              and{" "}
              <Link to="" style={{ textDecoration: "none" }}>
                <span className={styles.diff_styling}>Privacy Notice.</span>
              </Link>
            </span>

            <div className={styles.form_last_wrap}>
              <span className={styles.text_already_have_account}>
                Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <span className={styles.sign_in}>
                    Sign in
                    <ArrowRightIcon className={styles.direction_arrow} />
                  </span>
                </Link>
              </span>
              <span className={styles.text_already_have_account}>
                Buying for work?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span className={styles.sign_in}>
                    Create a free business account
                    <ArrowRightIcon className={styles.direction_arrow} />
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
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
