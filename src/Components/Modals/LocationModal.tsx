import React from "react";
import styles from "./styles.module.css";

interface INewLocationModalProps {
  open: boolean;
  handleClose: () => void;
}
//This component(LocationModal) is a child components to AddressButton. Note that props are definitions not the 
//actual values. (Just like the way you defined a variable, and pass a value to it) or 
//More like function definition with a parameter, then this parameters are used in the parent component with the
//actual value pass to it. So you can call props parameters in it's component which the parent pass value to in 
//her own component. That's why you here the term, props is a way of passing data from a parent component to a
//child component.  Note that this props can also be used in it's own component if need be by passing the value 
//inside the component as a "destructuring" values of the props.
export const LocationModal = (props: INewLocationModalProps) => {
  const { open, handleClose } = props;
  //meaning, if I don't click on opening the modal let nothing appear/Let it return nothing/null.
  if (!open) return null;

  const onClickOutside = (e: any) => {
    e.stopPropagation();
   
  }
  
  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={onClickOutside}>
        <div className={styles.choose_location_parent}>
          <p className={styles.choose_location}>Choose your location</p>
        </div>
        <p className={styles.contents}>
          Delivery options and delivery speeds may vary for different locations
        </p>
        <button className={styles.update_location_btn}>
          Sign in to update your location
        </button>

        <button className={styles.done} onClick={handleClose}>Done</button>
      </div>
    </div>
  );
}
