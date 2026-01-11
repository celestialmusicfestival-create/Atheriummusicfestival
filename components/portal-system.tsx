"use client"

import { useEffect, useState } from "react"

export function PortalSystem() {
  const [leftMatrix, setLeftMatrix] = useState({ line1: "0X_99", line2: "DATA_NULL" })
  const [rightMatrix, setRightMatrix] = useState("ERROR_404")
  const [centerMatrix, setCenterMatrix] = useState("LOADING...")

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&@"

  const getRandomChar = () => chars[Math.floor(Math.random() * chars.length)]
  const getMatrixString = (length: number) => {
    let str = ""
    for (let i = 0; i < length; i++) str += getRandomChar()
    return str
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftMatrix({
        line1: `${getMatrixString(2)}_${getMatrixString(2)}`,
        line2: getMatrixString(4),
      })
      setRightMatrix(`ERR_${getMatrixString(3)}`)

      if (Math.random() > 0.9) {
        const centerText = ["ATHERTHIUM", "LOADING...", "SYSTEM_FAIL", "2028_LIVE"]
        setCenterMatrix(centerText[Math.floor(Math.random() * centerText.length)])
      }
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* LEFT PORTAL: Glitching Data */}
      <div className="fixed left-[5vw] top-[20vh] w-[25vw] h-[25vw] max-w-[300px] max-h-[300px] z-0 animate-glitch-portal">
        <div className="absolute inset-0 rounded-full border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
          <div className="absolute -inset-[2px] rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="w-full h-[1px] bg-cyan-500 rotate-45" />
          <div className="w-full h-[1px] bg-cyan-500 -rotate-45 absolute" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-mono text-[10px] text-cyan-400 font-bold tracking-widest text-center leading-none">
            {leftMatrix.line1}
            <br />
            {leftMatrix.line2}
          </div>
        </div>
      </div>

      {/* CENTER PORTAL: The Core */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] z-[1] pointer-events-none animate-glitch-portal"
        style={{ animationDuration: "6s" }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/10 shadow-[0_0_60px_rgba(252,211,77,0.1),inset_0_0_40px_rgba(0,0,0,0.9)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-white/15 border-t-amber-300 animate-spin-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full border border-dashed border-white/30 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 mix-blend-screen">
          <div className="text-[9px] text-amber-100 font-mono tracking-[0.3em] text-center blur-[0.5px]">
            {centerMatrix}
          </div>
        </div>
      </div>

      {/* RIGHT PORTAL: The Void */}
      <div className="fixed right-[5vw] bottom-[10vh] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] z-0 animate-glitch-aggressive">
        <div className="absolute inset-0 rounded-full border-2 border-rose-900/40 shadow-[inset_0_0_40px_rgba(0,0,0,1)]" />
        <div
          className="absolute inset-[5px] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(159, 18, 57, 0.1), #000 70%)",
          }}
        >
          <div className="absolute bottom-8 right-10 text-right z-10">
            <div className="text-[8px] text-rose-800 font-mono uppercase tracking-widest mb-1">Decay Rate</div>
            <div className="text-[10px] text-rose-600 font-mono tracking-widest">{rightMatrix}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
