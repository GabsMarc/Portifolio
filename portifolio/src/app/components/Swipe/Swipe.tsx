import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Image from "next/image"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


interface SwipeProps {
    content: Array<any>
    delay?: number
}



export function Swipe({ content, delay = 4000 }: SwipeProps) {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: delay,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
        >

            {content.map((item) => (
                <SwiperSlide key={item.id}>
                    {/* <div className="hover:opacity-60"> */}
                        <Image src={item.image} alt="" className="hover:opacity-60" onClick={() => {console.log('clicou' + item.id)}}/>
                    {/* </div> */}
                </SwiperSlide>
            ))}

        </Swiper>

    )
}

