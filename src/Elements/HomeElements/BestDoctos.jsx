import React from 'react';
import Heading from './Heading/Heading';
import useBestDoc from '../../Hook/useBestDoc';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import AllBestDocCard from './AllBestDocCard';
import Loader from '../../Components/Loader/Loader';



const BestDoctos = () => {

    const [AllBestDoctors, , isPending] = useBestDoc()
    console.log(AllBestDoctors);

    return (
        <>
            <Heading heading={"Our Best"}></Heading>
            {isPending?<Loader></Loader>:
            <Swiper

                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >

                {
                    AllBestDoctors?.map(doctor =>
                        <SwiperSlide key={doctor?._id}>
                            <AllBestDocCard doctor={doctor}></AllBestDocCard>
                        </SwiperSlide>)
                }


            </Swiper>}
        </>
    );
};

export default BestDoctos;