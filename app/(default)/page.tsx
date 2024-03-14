// use client

export const metadata = {
  title: 'Home - MakeoutParty Landing Page',
  description: 'Holy Shit. "Were so back department? I would like to make a claim"',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ImageWithOverlay from '@/components/ImageWithOverlay'
import VinylGraphic from '@/components/VinylGraphic'
import SectionSeparator from '@/components/sectionSeparator'
import ScrollingWindow from '@/components/scrollingWindow'
import ParallaxScroll from '@/components/parallaxScroll'

const LandingImageUrl = '../../public/images/SoundBoardCpy.jpg'; // Adjust the path as needed

export default function Home() {

  return (
    <>
      <ImageWithOverlay
        imageUrl={LandingImageUrl}
        overlayText="MAKEOUT PARTY"
      />
      <Hero />
      {/* <SectionSeparator/> */}
      <SectionSeparator/>
      <VinylGraphic/>
      
      {/* <ScrollingWindow backgroundImage='/images/BackShots.jpeg'/> */}
      {/* <ParallaxScroll/> */}
      <SectionSeparator/>
      {/* <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter /> */}
    </>
  )
}
