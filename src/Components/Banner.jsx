import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"



const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )

    return (
        <div className="wrapper">
            <div className="scene">

                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide"><img className='w-full h-[800px]' src="https://img.freepik.com/free-photo/neurologist-with-ppe-suit-working-vaccine-development-equipped-laboratory-typing-pc-team-examining-virus-evolution-using-high-tech-research-treatment-development-against-covid19_482257-13514.jpg?w=1480&t=st=1701619492~exp=1701620092~hmac=1867a474195971e65e5ac5e8dc3a60a435bdfcc4e7e50a86c577ab0149b471ff" alt="" /></div>
                    <div className="keen-slider__slide"><img className='w-full h-[800px]' src="https://img.freepik.com/free-psd/interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2137.jpg?w=1480&t=st=1701617679~exp=1701618279~hmac=cea791ea823fce283eb37b76debdd819d8424bd13e8e7346e6f97ee5c4584cc9" alt="" /></div>
                    <div className="keen-slider__slide"><img className='w-full h-[800px]' src="https://img.freepik.com/free-photo/medical-lab-worker-analyzing-blood-serum-conducting-virus-test-modern-equipped-lab-late-night-team-specialists-examining-vaccine-evolution-using-high-tech-treatment-against-covid19_482257-13621.jpg?w=1480&t=st=1701619456~exp=1701620056~hmac=b868e1539c9d00e88a6c0ca9996cdf80631af749b573599f3eee510ab64f6e1e" alt="" /></div>

                </div>



            </div>
        </div>
    )
};

export default Banner;