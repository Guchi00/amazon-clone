import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Divider, Drawer, Radio, Space } from "antd";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styles from "./styles.module.css";
import { UserAccount } from "./UserAccount";
import { ResponsiveWrapper } from "../ResponsiveWrapper/ResponsiveWrapper";

export const DrawerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        {/* <Radio.Group value={placement} onChange={onChange}>
          <Radio value="top">top</Radio>
          <Radio value="right">right</Radio>
          <Radio value="bottom">bottom</Radio>
          <Radio value="left">left</Radio>
        </Radio.Group> */}
        <Button
          type="primary"
          onClick={showDrawer}
          className={styles.drawer_btn}
        >
          <DensityMediumIcon className={styles.drawer_btn_icon} />
          <span className={styles.drawer_all} id={styles.all_drawer_menu}>
            {" "}
            All
          </span>
        </Button>
      </Space>
      <Drawer
        // title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        className={styles.drawer_parent}
      >
        <ResponsiveWrapper.Desktop>
          <div className={styles.drawer_header}>
            <UserAccount />
          </div>
        </ResponsiveWrapper.Desktop>

        <div className={styles.wrapper_menu_contents}>
          <h3 className={styles.menu_title}>Shop by Department</h3>
          <Link to="/homes" className={styles.products}>
            Home Decor
          </Link>
          <Link to="/fashion" className={styles.products}>
            Female Clothing
          </Link>
          <Link to="/beauty" className={styles.products}>
            Health and Beauty
          </Link>
          <Link to="/kitchen" className={styles.products}>
            Kitchen Decor
          </Link>

          <Link to="/shoes" className={styles.products}>
            Men and Female Shoes
          </Link>

          <Link to="/watches" className={styles.products}>
            Watches and time trackers
          </Link>

          <Link to="/toys" className={styles.products}>
            Children's toy 3 months to 10 years
          </Link>

          <Link to="/dining" className={styles.products}>
            Dining chairs and dining decor
          </Link>

          <h3 className={styles.menu_title_games}>Essential for Gamers</h3>
          <Link to="/games" className={styles.products}>
            Games Essentials
          </Link>
          <Link to="/mices" className={styles.products}>
            Gaming Mouses
          </Link>
          <Link to="/chairs" className={styles.products}>
            Gaming Chairs
          </Link>
          <Link to="/headsets" className={styles.products}>
            Headsets
          </Link>
          <Link to="/keyboards" className={styles.products}>
            Keyboards
          </Link>
          <Link to="/laptops" className={styles.products}>
            Laptops
          </Link>
          <Link to="/pcs" className={styles.products}>
            Pcs
          </Link>
          <Link to="/products" className={styles.products}>
            See more products
          </Link>
        </div>
      </Drawer>
    </>
  );
};
