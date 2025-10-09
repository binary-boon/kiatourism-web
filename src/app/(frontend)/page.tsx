"use client"
import { useEffect, useRef } from 'react'
import Landing from '@/components/Landing'
import Description from '@/components/Description'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import CallToAction from '@/components/CtaComp'

export default function Home() {
  const scrollRef = useRef(null)

  useEffect(() => {
    // Set styles immediately
    document.body.style.cursor = 'default'
    document.body.style.overflow = 'visible'
    
    // Initialize Locomotive Scroll
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      scrollRef.current = new LocomotiveScroll()
    }
    
    initLocomotiveScroll()
    window.scrollTo(0, 0)

    // Cleanup function to destroy Locomotive Scroll on unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy()
        scrollRef.current = null
      }
      // Reset body styles
      document.body.style.overflow = 'auto'
      document.body.style.cursor = 'default'
    }
  }, [])

  return (
    <main>
      <Landing />
      <Description />
      <Services />
      <Testimonials />
      <CallToAction />
      <Contact />
    </main>
  )
}