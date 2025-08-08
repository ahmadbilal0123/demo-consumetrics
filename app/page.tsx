"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navbar from "../components/navbar"
import Iridescence from "../components/Iridescence"
import BlurText from "../components/BlurText"
import Button from "../components/Button" // Import Button component
import { Globe, Users, MapPin, BarChart, Lightbulb, Target } from 'lucide-react' // Import all necessary icons
import CountUpNumber from "../components/CountUpNumber" // Import CountUpNumber component
import SpotlightCard from "../components/SpotlightCard" // Import SpotlightCard component
import RollingGallery from '../components/RollingGallery' // Import RollingGallery
import "../app/Iridescence.css"
import "../components/SpotlightCard.css" // Import SpotlightCard CSS
import "../components/RollingGallery.css" // Import RollingGallery CSS
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa'
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function Page() {
// Refs for scroll animations
const globalReachRef = useRef<HTMLElement>(null)
const researchSolutionsRef = useRef<HTMLElement>(null)
const portfolioRef = useRef<HTMLElement>(null) // Ref for the new portfolio section
const extensiveFieldNetworkRef = useRef<HTMLElement>(null) // Ref for Extensive Field Network section

// Refs for hero section animations
const heroBadgeRef = useRef<HTMLDivElement>(null)
const heroHeadingRef = useRef<HTMLDivElement>(null)
const heroSubtitleRef = useRef<HTMLDivElement>(null)
const heroButtonsRef = useRef<HTMLDivElement>(null)
const heroTrustRef = useRef<HTMLDivElement>(null)

// State for scroll-to-top button visibility
const [showScrollToTop, setShowScrollToTop] = useState(false)

const handleAnimationComplete = () => {
  console.log("Welcome text animation completed!")
}

// Scroll animations setup
useEffect(() => {
  // Scroll-to-top button visibility logic
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight
    const halfScreenHeight = windowHeight / 2
    
    if (scrollPosition > halfScreenHeight) {
      setShowScrollToTop(true)
    } else {
      setShowScrollToTop(false)
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll)
  
  // Initial check
  handleScroll()

  const ctx = gsap.context(() => {
    // Hero Section Animation - Page Load Transform Effect
    const heroTl = gsap.timeline({ delay: 0.5 })
    
    // Badge animation
    heroTl.fromTo(heroBadgeRef.current,
      { opacity: 0, y: -30, scale: 0.8, rotationX: -90 },
      { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1, ease: "back.out(1.7)" }
    )
    
    // Heading animation
    .fromTo(heroHeadingRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    
    // Subtitle animation
    .fromTo(heroSubtitleRef.current,
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.6"
    )
    
    // Buttons animation
    .fromTo(heroButtonsRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    
    // Trust indicators animation
    .fromTo(heroTrustRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    )
    
    // Additional staggered animations for child elements
    if (heroHeadingRef.current) {
      const headingSpans = heroHeadingRef.current.querySelectorAll('span')
      if (headingSpans.length > 0) {
        gsap.fromTo(headingSpans,
          { opacity: 0, y: 30, scale: 0.8, rotationY: 15 },
          { opacity: 1, y: 0, scale: 1, rotationY: 0, duration: 0.8, stagger: 0.2, ease: "back.out(1.4)", delay: 1.7 }
        )
      }
    }
    
    if (heroSubtitleRef.current) {
      const subtitleSpans = heroSubtitleRef.current.querySelectorAll('span')
      if (subtitleSpans.length > 0) {
        gsap.fromTo(subtitleSpans,
          { opacity: 0, scale: 0.8, rotationY: -10 },
          { opacity: 1, scale: 1, rotationY: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)", delay: 2.1 }
        )
      }
    }
    
    if (heroButtonsRef.current) {
      const buttons = heroButtonsRef.current.querySelectorAll('button')
      if (buttons.length > 0) {
        gsap.fromTo(buttons,
          { opacity: 0, x: -50, scale: 0.8, rotationY: -20 },
          { opacity: 1, x: 0, scale: 1, rotationY: 0, duration: 0.7, stagger: 0.2, ease: "back.out(1.3)", delay: 2.5 }
        )
      }
    }
    
    if (heroTrustRef.current) {
      const trustDivs = heroTrustRef.current.querySelectorAll('div')
      if (trustDivs.length > 0) {
        gsap.fromTo(trustDivs,
          { opacity: 0, x: 30, scale: 0.8 },
          { opacity: 1, x: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.1)", delay: 2.8 }
        )
      }
    }

    // Global Reach Section Animation
    if (globalReachRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: globalReachRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl.fromTo(".global-reach-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".global-reach-image", 
        { opacity: 0, scale: 0.9, x: -50 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4"
      )
      .fromTo(".global-reach-stats", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }, "-=0.6"
      )
      .fromTo(".global-reach-info", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3"
      )
      .fromTo(".global-reach-cta", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2"
      )
    }

    // Research Solutions Section Animation
    if (researchSolutionsRef.current) {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: researchSolutionsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl2.fromTo(".research-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".research-card", 
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.4"
      )
      .fromTo(".research-cta", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2"
      )
    }

    // Portfolio Section Animation
    if (portfolioRef.current) {
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl3.fromTo(".portfolio-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".portfolio-gallery", 
        { opacity: 0, y: 60, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }, "-=0.4"
      )
    }

    // Extensive Field Network Section Animation
    if (extensiveFieldNetworkRef.current) {
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: extensiveFieldNetworkRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      tl4.fromTo(".extensive-field-network-header", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(".extensive-field-network-image", 
        { opacity: 0, scale: 0.9, x: -50 },
        { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "power2.out" }, "-=0.4"
      )
      .fromTo(".extensive-field-network-info", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3"
      )
      .fromTo(".extensive-field-network-cta", 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2"
      )
    }
  })

  // Cleanup function for scroll event listener
  return () => {
    window.removeEventListener('scroll', handleScroll)
    ctx.revert() // Cleanup GSAP context
  }
}, [])

return (
  <div className="relative min-h-screen w-full overflow-hidden">
    {/* Iridescence background */}
    <div className="fixed inset-0 -z-20">
      <Iridescence color={[0.5, 0.2, 0.8]} mouseReact={false} amplitude={0.1} speed={0.5} />
    </div>

    {/* Fixed Navbar */}
    <Navbar />

    <main className="relative z-0 flex min-h-screen flex-col items-center justify-center text-white px-4 py-16 pt-20">
      {/* Professional Badge */}
   
      {/* Main Heading with Enhanced Typography */}
      <div ref={heroHeadingRef} className="text-center max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Transforming
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-200 bg-clip-text text-transparent">
              Business Decisions
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Through Deep Market Insights
            </span>
          </h1>
        </div>
        
        {/* Subtitle with Professional Styling */}
        <div ref={heroSubtitleRef} className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
            We provide comprehensive 
            <span className="font-semibold text-white mx-2">Retail & Consumer Research Solutions</span>
            , generating in-depth insights into market performance that add 
            <span className="font-semibold text-cyan-400 mx-1">real value</span>
            to your business decision-making process.
          </p>
        </div>
      </div>

      {/* Enhanced Call-to-Action Section */}
      <div ref={heroButtonsRef} className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
        <Button 
          onClick={() => {
            globalReachRef.current?.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            })
          }}
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Explore Our Solutions</span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        <Button className="group relative overflow-hidden rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-white font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105">
          <span className="relative z-10">View Case Studies</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>

      {/* Trust Indicators */}
      <div ref={heroTrustRef} className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
          <span className="text-sm text-gray-300">ISO 27001 Certified</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
          <span className="text-sm text-gray-300">GDPR Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-emerald-400 rounded-full"></div>
          <span className="text-sm text-gray-300">15+ Years Experience</span>
        </div>
      </div>
    </main>


    {/* Our Global Reach Section - Redesigned with White Background */}
    <section ref={globalReachRef} className="relative z-0 bg-white py-20 px-4 text-gray-900">
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="global-reach-header text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Our Global Reach
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Extensive field network spanning across South Asia, delivering comprehensive market insights with unmatched local expertise.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Hero Image */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <div className="global-reach-image relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <img
                  src="/placeholder-global.jpg"
                  alt="Global Research Network"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Professional Research Network</h3>
                  <p className="text-gray-300">Experienced teams across Pakistan and Afghanistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Statistics */}
          <div className="xl:col-span-2 order-1 xl:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Stat Card 1 */}
              <div className="global-reach-stats md:col-span-2">
                <CountUpNumber
                  targetValue={1000}
                  suffix="+"
                  icon={Users}
                  iconClassName="bg-gradient-to-br from-blue-400 to-blue-600 text-white"
                  description="Trained Surveyors"
                  subDescription="Ready for immediate deployment across the region"
                  bgColor="bg-white border border-gray-200 shadow-lg"
                  textColor="text-gray-900"
                />
              </div>

              {/* Stat Card 2 */}
              <div className="global-reach-stats">
                <CountUpNumber
                  targetValue={70}
                  suffix="+"
                  icon={MapPin}
                  iconClassName="bg-gradient-to-br from-red-400 to-red-600 text-white"
                  description="Districts in Pakistan"
                  subDescription="Comprehensive national coverage"
                  bgColor="bg-white border border-gray-200 shadow-lg"
                  textColor="text-gray-900"
                />
              </div>

              {/* Stat Card 3 */}
              <div className="global-reach-stats">
                <CountUpNumber
                  targetValue={11}
                  icon={Globe}
                  iconClassName="bg-gradient-to-br from-purple-400 to-purple-600 text-white"
                  description="Districts in Afghanistan"
                  subDescription="Cross-border intelligence"
                  bgColor="bg-white border border-gray-200 shadow-lg"
                  textColor="text-gray-900"
                />
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="global-reach-info bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold">Active Operations</span>
                </div>
                <p className="text-gray-600 text-sm">Real-time data collection and analysis across all regions</p>
              </div>
              
              <div className="global-reach-info bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-yellow-600 font-semibold">Quality Assurance</span>
                </div>
                <p className="text-gray-600 text-sm">Rigorous quality control and validation processes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="global-reach-cta text-center mt-16">
          <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Our Network
          </Button>
        </div>
      </div>
    </section>

    {/* Our Research Solutions Section - White Background */}
    <section ref={researchSolutionsRef} className="relative z-0 bg-white py-20 px-4 text-gray-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="research-header text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Our Research Solutions
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed">
            Comprehensive research methodologies designed to unlock market potential and drive strategic business growth across diverse industries.
          </p>
        </div>

        {/* SpotlightCard Grid - 3 cards in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Market Analysis */}
          <div className="research-card">
            <SpotlightCard 
              className="custom-spotlight-card" 
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-6">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Analysis</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  In-depth analysis of market trends, competitive landscapes, and consumer behavior patterns to identify opportunities and threats in your target markets.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm text-blue-600 font-medium">Strategic Insights</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: Consumer Research */}
          <div className="research-card">
            <SpotlightCard 
              className="custom-spotlight-card" 
              spotlightColor="rgba(255, 0, 150, 0.2)"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-6">
                  <Lightbulb className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consumer Research</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Deep dive into consumer preferences, purchasing behaviors, and decision-making processes to understand what drives your target audience.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm text-pink-600 font-medium">Behavioral Insights</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Strategic Consulting */}
          <div className="research-card">
            <SpotlightCard 
              className="custom-spotlight-card" 
              spotlightColor="rgba(0, 255, 100, 0.2)"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-6">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Consulting</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  Transform research findings into actionable strategies and recommendations that drive measurable business growth and competitive advantage.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="text-sm text-green-600 font-medium">Growth Solutions</span>
                </div>
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="research-cta text-center mt-16">
          <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Discover Our Methodologies
          </Button>
        </div>
      </div>
    </section>

   
   <section ref={extensiveFieldNetworkRef} className="bg-gradient-to-b from-white to-blue-50 py-20 px-4 md:px-10 font-sans">
    <div className="max-w-4xl mx-auto text-center mb-16 px-4 extensive-field-network-header">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
    Extensive Field Network
  </h1>
  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
    Strategic presence across Pakistan and Afghanistan with local expertise and
    comprehensive market coverage.
  </p>
</div>

      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        {/* Card 1: Text Left, Image Right */}
        <div className="extensive-field-network-info backdrop-blur-lg bg-white/70 border border-white/30 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10  duration-300">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🌍 Pakistan Coverage</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Operational control across more than 70+ districts, ensuring comprehensive market
              reach and localized insights throughout the country. Our deep understanding of
              regional markets enables precise data collection.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Punjab", "Sindh", "KPK", "Balochistan"].map((region) => (
                <span key={region} className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium shadow">
                  {region}
                </span>
              ))}
            </div>
              <button className="extensive-field-network-cta bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 shadow-md transition">
              Learn More
            </button>
          </div>
          <div className="flex-1 extensive-field-network-image">
            <img
              src="pak.jpg"
              alt="Pakistan Coverage"
              className="rounded-2xl w-full h-72 object-cover shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        {/* Card 2: Image Left, Text Right */}
        <div className="extensive-field-network-info backdrop-blur-lg bg-white/70 border border-white/30 shadow-2xl rounded-3xl p-10 flex flex-col md:flex-row-reverse items-center gap-10  duration-300">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🌐 Afghanistan Presence</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Strategic operations in 11 key districts of Afghanistan, providing cross-border market
              intelligence and regional insights that help businesses understand this emerging market.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {["Kabul", "Herat", "Kandahar"].map((region) => (
                <span key={region} className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium shadow">
                  {region}
                </span>
              ))}
            </div>
            <button className="extensive-field-network-cta bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 shadow-md transition">
              Learn More
            </button>
          </div>
          <div className="flex-1 extensive-field-network-image">
            <img
              src="afgan.jpg"
              alt="Afghanistan Presence"
              className="rounded-2xl w-full h-72 object-cover shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
      
    </section>
 {/* Our Work Portfolio Section */}
    <section ref={portfolioRef} className="relative z-0 bg-white py-20 px-4 text-gray-900">
      <div className="w-full"> {/* Changed to w-full to allow full width */}
        {/* Header */}
        <div className="portfolio-header text-center mb-16">
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Our Work Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Explore a selection of our diverse projects and the impactful insights we've delivered for our clients.
          </p>
        </div>

        {/* RollingGallery Component */}
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>
    </section>

    {/* Why Choose Our Network Section */}
    <section className="relative z-0 bg-white py-20 px-4 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Why Choose Our Network?
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Unmatched coverage, local expertise, and rapid deployment capabilities across South Asia.
          </p>
        </div>

        {/* Three Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1: Unmatched Coverage */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Main Box */}
            <div className="relative bg-white border border-gray-200 shadow-xl rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mb-6 mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Unmatched Coverage</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Extensive network spanning 70+ districts in Pakistan and 11 districts in Afghanistan, providing comprehensive market access and local insights across South Asia.
              </p>
              
              {/* Stats */}
              <div className="mt-6 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-600">70+</div>
                  <div className="text-sm text-gray-500">Pakistan Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">11</div>
                  <div className="text-sm text-gray-500">Afghanistan Districts</div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 2: Local Expertise */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Main Box */}
            <div className="relative bg-white border border-gray-200 shadow-xl rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-6 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Local Expertise</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Deep-rooted understanding of regional markets, cultural nuances, and local business practices with 15+ years of experience in the region.
              </p>
              
              {/* Stats */}
              <div className="mt-6 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">1000+</div>
                  <div className="text-sm text-gray-500">Trained Surveyors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Box 3: Rapid Deployment */}
          <div className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Main Box */}
            <div className="relative bg-white border border-gray-200 shadow-xl rounded-2xl p-8 h-full hover:shadow-2xl transition-all duration-300">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mb-6 mx-auto">
                <Target className="h-8 w-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Rapid Deployment</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                Ready-to-deploy teams with immediate response capabilities, ensuring quick project initiation and timely delivery of insights.
              </p>
              
              {/* Stats */}
              <div className="mt-6 flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">24h</div>
                  <div className="text-sm text-gray-500">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">48h</div>
                  <div className="text-sm text-gray-500">Deployment</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>


      <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="/download.png" alt="Access Consumetrics Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-white">Access Consumetrics</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Since 2009, we’ve delivered retail and consumer research solutions to power intelligent business decisions.
          </p>

          <div className="mt-4 flex space-x-4 text-white">
            <a href="/" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="/" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="/" className="hover:text-blue-300 transition"><FaLinkedinIn /></a>
            <a href="mailto:info@access.com" className="hover:text-red-400 transition"><FaEnvelope /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Market Analysis</li>
            <li className="hover:text-white transition">Consumer Research</li>
            <li className="hover:text-white transition">Retail Intelligence</li>
            <li className="hover:text-white transition">Data Collection</li>
          </ul>
        </div>

        {/* Coverage */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Coverage</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Pakistan (70+ Districts)</li>
            <li className="hover:text-white transition">Afghanistan (11 Districts)</li>
            <li className="hover:text-white transition">1,000+ Surveyors</li>
            <li className="hover:text-white transition">Regional Expertise</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to receive the latest insights and updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
            />
            <button
              type="submit"
              className="bg-red-600  text-white px-4 py-2 rounded font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Access Consumetrics. All rights reserved.
      </div>

      {/* Scroll-to-top - Professional 3D Button */}
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group fixed bottom-8 right-8 z-50 transform transition-all duration-300 hover:scale-105"
          aria-label="Scroll to top"
        >
          {/* Professional Container */}
          <div className="relative bg-black/50 backdrop-blur-md p-3 rounded-full border border-black/20 shadow-xl hover:shadow-6xl transition-all duration-300">
            {/* Clean Arrow Icon */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Arrow Triangle */}
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[6px] border-b-white border-r-[8px] border-r-transparent"></div>
              
              {/* Subtle 3D Effect */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[6px] border-l-transparent border-b-[4px] border-b-gray-300 border-r-[6px] border-r-transparent opacity-50"></div>
            </div>
            
            {/* Subtle Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Professional Shadow */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-black/10 blur-sm rounded-full"></div>
        </button>
      )}
    </footer>

    
  </div>
)
}
