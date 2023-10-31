import React from 'react'
import {Button, Modal } from 'antd';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {LocationModal} from "../Modals/LocationModal";
import styles from "./styles.module.css"

export const AddressButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <button className={styles.btn} onClick={openModal}>
      <span className={styles.deliver_to}>Deliver to</span>
      <div className={styles.a}>
        <LocationOnOutlinedIcon className={styles.customer_icon_location}/>
        <span className={styles.customer_location}>Czech Republic</span>
      </div>
      </button>
      <LocationModal open={isModalOpen} handleClose={openModal} />
    </>
  )
}
