"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CountUpNumberProps {
  targetValue: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  icon?: React.ElementType // For Lucide React icons
  iconClassName?: string
  description?: string
  subDescription?: string
  bgColor?: string
  textColor?: string
}

export default function CountUpNumber({
  targetValue,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  icon: Icon,
  iconClassName = "",
  description = "",
  subDescription = "",
  bgColor = "bg-white",
  textColor = "text-gray-900",
}: CountUpNumberProps) {
  const numberRef = useRef<HTMLSpanElement>(null)
  const componentRef = useRef<HTMLDivElement>(null)
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!numberRef.current || !componentRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: componentRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    tl.to(
      { value: 0 },
      {
        value: targetValue,
        duration: duration,
        ease: "power1.out",
        roundProps: "value",
        onUpdate: function () {
          setCurrentValue(Math.floor(this.targets()[0].value))
        },
      },
    )

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === componentRef.current) {
          st.kill()
        }
      })
    }
  }, [targetValue, duration])

  return (
    <div
      ref={componentRef}
      className={`${bgColor} p-6 rounded-xl shadow-lg flex items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      {Icon && (
        <div className={`flex items-center justify-center w-14 h-14 rounded-full ${iconClassName} shadow-lg`}>
          <Icon className="h-8 w-8" />
        </div>
      )}
      <div className="flex-1">
        <p className={`text-3xl font-bold ${textColor} mb-1`}>
          {prefix}
          <span ref={numberRef}>{currentValue}</span>
          {suffix}
        </p>
        {description && <p className={`${textColor.includes('white') ? 'text-gray-200' : 'text-gray-700'} font-medium`}>{description}</p>}
        {subDescription && <p className={`text-sm ${textColor.includes('white') ? 'text-gray-400' : 'text-gray-500'}`}>{subDescription}</p>}
      </div>
    </div>
  )
}
