import "./Gallery.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.jpg";
import img10 from "../../assets/images/10.jpg";
import img11 from "../../assets/images/11.jpg";
import img12 from "../../assets/images/12.jpg";
import img13 from "../../assets/images/13.jpg";
import img14 from "../../assets/images/14.jpg";
import img15 from "../../assets/images/15.jpg";
import img16 from "../../assets/images/16.jpg";
import img17 from "../../assets/images/17.jpg";
import img18 from "../../assets/images/18.jpg";
import img19 from "../../assets/images/19.jpg";
import img20 from "../../assets/images/20.jpg";
import img21 from "../../assets/images/21.jpg";
import img22 from "../../assets/images/22.jpg";
import img23 from "../../assets/images/23.jpg";
import img24 from "../../assets/images/24.jpg";
import img25 from "../../assets/images/25.jpg";
import img26 from "../../assets/images/26.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);

    const openLightbox = (index) => {
        setStartIndex(index);
        setOpen(true);
    };

    return (
        <section className="gallery" id="gallery">

            <h2>Fotoğraf Galerisi</h2>

            {/* THUMBNAIL SLIDER */}
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img
                            loading="lazy"
                            src={img}
                            alt={`car-${i}`}
                            className="gallery-img"
                            onClick={() => openLightbox(i)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* LIGHTBOX */}
            {open && (
                <div className="lightbox" onClick={() => setOpen(false)}>

                    <div
                        className="lightbox-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <Swiper
                            key={open ? "open" : "closed"}
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            initialSlide={startIndex}
                            spaceBetween={10}
                            slidesPerView={1}
                            observer={true}
                            observeParents={true}
                        >
                            {images.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img src={img} alt={`full-${i}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                </div>
            )}

        </section>
    );
};

export default Gallery;