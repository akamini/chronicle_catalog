"use client"
import Image from "next/image"
const Hero = () => {

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Chronicle catalog</h1>

        <p className='hero__subtitle'>商品の価格や見積もりにご利用ください</p>

      </div>
      <div className='hero__image-container'>
        <div className="hero__image">
          <Image src="/legend250brighton透過.png" alt='hero' fill className='object-contain' sizes='' />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero
