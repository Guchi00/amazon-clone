import React from "react";
import { Carousel } from "antd";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import styles from "./styles.module.css";

export function FouthItems() {

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_content}>
        <Carousel
        autoplay
        arrows
        prevArrow={<ArrowBackIosIcon />}
        nextArrow={<ArrowForwardIosIcon />}
        effect="scrollx"
        pauseOnHover={true}
        dots={false}
        >
          <div>
            <img src="https://m.media-amazon.com/images/I/613PsAotA8L._AC_UF894,1000_QL80_.jpg" className={styles.product_url} />
          </div>

          <div>
            <img src="https://m.media-amazon.com/images/I/51++sBhA2AL._AC_UF1000,1000_QL80_.jpg"  className={styles.product_url}/>
          </div>

          <div>
          <img src="https://mediavine-res.cloudinary.com/image/upload/s--shMKWeI9--/ar_16:9,c_fill,f_auto,fl_lossy,q_auto/v1693490329/vz9ycg36pi7qsdiohzmf.jpg" className={styles.product_url}/>
          </div>

          <div>
          <img src="https://media.nj.com/njcom_photos/photo/2017/06/14/-53a0d0bcbde28ac5.jpg" className={styles.product_url}/>
          </div>

          <div>
          <img src="https://imgeng.jagran.com/images/2023/apr/Amazon%20Sale%20on%20Gaming%20Accessories1681620671395.jpg" className={styles.product_url}/>
          </div>

          <div>
          <img src="https://images-fe.ssl-images-amazon.com/images/G/65/Gateway_Launch/Others/NEW_IN_page/NEWINpage_Mobile_750x300_Toys.jpg" className={styles.product_url}/>
          </div>

          <div>
          <img src="https://assets.aboutamazon.com/dims4/default/b76f932/2147483647/strip/true/crop/1999x1125+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fa9%2F45%2Faf8cc1f14e448510f49ae9caf62d%2Fbeautydeal-hero-2000x11251.jpg" className={styles.product_url}/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
