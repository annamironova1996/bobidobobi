import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default function SimpleSwiper() {
    return (
        <Swiper
            className="swiper-wrapper"
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className="swiper-slide">
                <img
                    src="img/banner-01.webp"
                    alt="баннер 1"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img
                    src="img/banner-02.webp"
                    alt="баннер 2"
                />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <img
                    src="img/banner-03.webp"
                    alt="баннер 3"
                />
            </SwiperSlide>
        </Swiper>
    );
}
