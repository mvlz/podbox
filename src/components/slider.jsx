import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton } from './SliderButton'

export const EmblaCarousel = ({sliders }) => {
  const [emblaRef,embla] = useEmblaCarousel({ loop: true })

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {sliders?.map(item =>{
          return <div className="embla__slide" key={item?.id}>
            <div className="embla__slide__inner">
                <img
                  className="embla__slide__img"
                  src={item?.imageUrl}
                  alt=''
                />
              </div>
          </div>
        })}
      </div>
      <div className='embla__button__container'>
        <PrevButton onClick={()=> embla?.scrollPrev(true)} enabled style={{width: "20px"}} />
        <NextButton onClick={()=> embla?.scrollNext(true)} enabled style={{width: "20px"}} />
      </div>
    </div>
  )
}