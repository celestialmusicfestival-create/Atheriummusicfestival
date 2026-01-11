"use client"

import { useEffect, useState } from "react"
import { Zap } from "lucide-react"
import { useSignupModal } from "@/hooks/use-signup-modal"

export function HeroSection() {
  const [countdown, setCountdown] = useState({ days: "00", hours: "00", mins: "00", secs: "00" })
  const { openModal } = useSignupModal()

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&@"

  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)]
  const getMatrixString = (length: number) => {
    let str = ""
    for (let i = 0; i < length; i++) str += getRandomChar()
    return str
  }

  useEffect(() => {
    const targetDate = new Date("October 31, 2028 00:00:00").getTime()
    const glitchChance = 0.15

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      const d = Math.floor(distance / (1000 * 60 * 60 * 24))
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({
        days: Math.random() < glitchChance ? getMatrixString(2) : d.toString().padStart(2, "0"),
        hours: Math.random() < glitchChance ? getMatrixString(2) : h.toString().padStart(2, "0"),
        mins: Math.random() < glitchChance ? getMatrixString(2) : m.toString().padStart(2, "0"),
        secs: Math.random() < glitchChance ? getMatrixString(2) : s.toString().padStart(2, "0"),
      })
    }

    const interval = setInterval(updateCountdown, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative px-6">
      {/* Logo Symbol */}
      <div className="mb-12 opacity-80 animate-pulse animate-reveal-up">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M24 4L44 14V34L24 44L4 34V14L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M24 12L34 24L24 36L14 24L24 12Z" fill="currentColor" fillOpacity="0.1" />
          <circle cx="24" cy="24" r="2" fill="currentColor" />
        </svg>
      </div>

      {/* Header & Matrix Countdown */}
      <div className="flex flex-col items-center gap-6 mix-blend-difference z-20">
        <h1 className="text-center">
          <div className="text-xs md:text-sm font-medium tracking-[0.8em] text-white/50 mb-4 uppercase animate-reveal-up">
            Welcome to
          </div>
          <div
            className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 animate-reveal-up"
            style={{ animationDelay: "0.2s" }}
          >
            ATHERTHIUM
          </div>
          <div
            className="text-xs md:text-sm font-medium tracking-[1em] text-white/60 mt-4 uppercase animate-reveal-up"
            style={{ animationDelay: "0.3s" }}
          >
            Music Festival
          </div>
        </h1>

        {/* Alphanumeric Matrix Countdown */}
        <div
          className="mt-8 p-4 border border-white/10 bg-black/40 backdrop-blur-sm rounded-sm animate-reveal-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="font-mono text-xl md:text-3xl text-white/90 tracking-[0.2em] md:tracking-[0.4em] flex gap-4 md:gap-8 shadow-lg">
            <div className="flex flex-col items-center">
              <span className="w-12 text-center">{countdown.days}</span>
              <span className="text-[8px] text-white/30 tracking-widest mt-1">CYCLE</span>
            </div>
            <span className="opacity-30">:</span>
            <div className="flex flex-col items-center">
              <span className="w-12 text-center">{countdown.hours}</span>
              <span className="text-[8px] text-white/30 tracking-widest mt-1">SEQ</span>
            </div>
            <span className="opacity-30">:</span>
            <div className="flex flex-col items-center">
              <span className="w-12 text-center">{countdown.mins}</span>
              <span className="text-[8px] text-white/30 tracking-widest mt-1">MOD</span>
            </div>
            <span className="opacity-30 hidden md:block">:</span>
            <div className="hidden md:flex flex-col items-center">
              <span className="w-12 text-center">{countdown.secs}</span>
              <span className="text-[8px] text-white/30 tracking-widest mt-1">TICK</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="absolute bottom-16 animate-reveal-up" style={{ animationDelay: "0.8s" }}>
        <button
          onClick={openModal}
          className="group relative px-10 py-4 bg-transparent overflow-hidden border border-white/20 hover:border-white/60 transition-colors duration-300"
        >
          <div className="absolute inset-0 w-full h-full bg-white/5 group-hover:bg-white/10 transition-colors duration-500 skew-x-12 scale-110 origin-left" />
          <span className="relative text-[10px] font-bold tracking-[0.3em] uppercase text-white flex items-center gap-3">
            <Zap className="w-3 h-3 text-yellow-400 group-hover:text-white transition-colors" />
            Join The Signal
          </span>
        </button>
      </div>

      {/* Location Data */}
      <div className="absolute right-6 bottom-16 hidden lg:block text-right">
        <div className="text-[9px] text-white/30 font-mono flex flex-col gap-1">
          <span>SYS_ID: 994-A</span>
          <span className="text-emerald-500/60">CONNECTED</span>
          <span className="animate-pulse">_CURSOR_ACTIVE</span>
        </div>
      </div>
    </section>
  )
}
