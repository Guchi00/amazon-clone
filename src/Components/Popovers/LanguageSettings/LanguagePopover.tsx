import React, { useMemo, useState } from "react";
import { Button, Divider, Popover, Segmented } from "antd";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import styles from "./styles.module.css";

const text = (
  <div className={styles.parent}>
    <span className={styles.change_language}>Change Language</span>
    <a href="https://www.amazon.com/hz/cs/help?ref_=icp_language_help&nodeId=GARKQZZYZ542RGWK" className={styles.learn_more}>Learn more</a>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label>English - EN </label>
    </div>

  </div>
);

const content = (
  <div>
    <div className={styles.content}>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>espanol - ES </label>
    </div>
    
    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>arabic - AR </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>Deutsch - DE </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>jsdajkdj - HE </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>hjdasmnsd - KO </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>portugies - PT </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>jkdwqjk - ZH </label>
    </div>

    <div>
    <input type="radio" id="english" name="english_language" value="english" className={styles.input_button}/>
    <label className={styles.language_labels}>jkdwqjk - ZH </label>
    </div>

    <div className={styles.third_content}>
    <div className={styles.change_currency}>Change Currency</div>
    <a href="https://www.amazon.com/hz/cs/help?ref_=icp_currency_help&nodeId=GDX4RY8D2M85FHLD" className={styles.learn_more} id={styles.learn_more_2nd}>Learn more</a>
    </div>

    <div className={styles.change_dollar}>
    <div className={styles.usd}>$ - USD - US Dollar</div>
    <a href="https://www.amazon.com/customer-preferences/edit?ref_=icp_cop_flyout_change&preferencesReturnUrl=%2F%3Flanguage%3Den_US" className={styles.change}>Change</a>
    </div>

    <div className={styles.shop_on_amazon}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/800px-Flag_of_the_United_States_%281912-1959%29.svg.png" alt="usa-flag"
        className={styles.us_flag_2nd} />
      <span className={styles.shopping_text}>You are shopping on <br></br>Amazon.com</span>
    </div>

    <div className={styles.change_country_region}>
    <a href="https://www.amazon.com/customer-preferences/country?ref_=icp_lop_mop_chg_ais&preferencesReturnUrl=/" className={styles.region}>Change country/region.</a>
    </div>

  </div>
);

export const LanguagePopover: React.FC = () => {
  const [showArrow, setShowArrow] = React.useState(true);
  const [arrowAtCenter, setArrowAtCenter] = React.useState(false);

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  return (
    <>
      <Popover
        placement="bottomRight"
        title={text}
        content={content}
        arrow={mergedArrow}
      >
        <div className={styles.language_option}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/800px-Flag_of_the_United_States_%281912-1959%29.svg.png"
            alt="usa-flag"
            className={styles.us_flag}
          />
          <span className={styles.en}>EN</span>
          {/* <ArrowDropDownOutlinedIcon className={styles.arrowdownIcon} /> */}
        </div>
      </Popover>
    </>
  );
};
