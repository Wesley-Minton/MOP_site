export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ImageWithOverlay from '@/components/ImageWithOverlay'

const LandingImageUrl = '../../public/images/SoundBoardCpy.jpg'; // Adjust the path as needed

export default function Home() {

  return (
    <>
      <ImageWithOverlay
        imageUrl={LandingImageUrl}
        overlayText="Make Out Party"
      />
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
    </>
  )
}
