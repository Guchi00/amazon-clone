import React, { useMemo, useState } from "react";
import { Button, Divider, Popover, Segmented } from "antd";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LanguageIcon from '@mui/icons-material/Language';
import styles from "./styles.module.css";


const text = (
  <div className={styles.p}>
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

  </div>
);


export function ActionButtons() {
  const [showArrow, setShowArrow] = React.useState(true);
  const [arrowAtCenter, setArrowAtCenter] = React.useState(false);

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);

  return (
    <>
      <div className={styles.actionbtns_parent}>
        <a href="#top">
          <img
            className={styles.amazon_img}
            src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
            alt="amazonlogo"
          />
        </a>

        <Popover
        placement="bottomRight"
        title={text}
        content={content}
        arrow={mergedArrow}
      >
        <button className={styles.language_option}>
          <LanguageIcon className={styles.globe_icon} />
          <span className={styles.en}>English</span>
          <ArrowDropUpIcon className={styles.arrow_up_icon} />
        </button>
      </Popover>

      <button className={styles.dollar_btn}><span style={{color: "white", fontWeight: "600", fontSize: "14px", marginRight: "7px"}}>$</span> USD - U.S. Dollar</button>
      <button className={styles.united_state_btn}><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/800px-Flag_of_the_United_States_%281912-1959%29.svg.png"
            alt="usa-flag"
            className={styles.us_flag}
          />United State</button>
      </div>
    </>
  );
}
