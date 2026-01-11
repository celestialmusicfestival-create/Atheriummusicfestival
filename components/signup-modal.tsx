"use client"

import type React from "react"

import { useState } from "react"
import { X, Terminal } from "lucide-react"
import { useSignupModal } from "@/hooks/use-signup-modal"

export function SignupModal() {
  const { isOpen, closeModal } = useSignupModal()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [buttonText, setButtonText] = useState("Execute")

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%&@"
  const getMatrixString = (length: number) => {
    let str = ""
    for (let i = 0; i < length; i++) str += chars[Math.floor(Math.random() * chars.length)]
    return str
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Glitch effect on button
    let iterations = 0
    const interval = setInterval(() => {
      setButtonText(getMatrixString(8))
      iterations++
      if (iterations > 10) {
        clearInterval(interval)
        setButtonText("PROCESSING...")

        setTimeout(() => {
          setIsSuccess(true)
          setIsSubmitting(false)
        }, 1000)
      }
    }, 50)
  }

  const handleClose = () => {
    closeModal()
    setTimeout(() => {
      setIsSuccess(false)
      setEmail("")
      setButtonText("Execute")
    }, 400)
  }

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/90 backdrop-blur-md transition-opacity duration-400 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0" onClick={handleClose} />

      <div className="relative w-full max-w-lg">
        {/* Glitch Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-rose-500 rounded opacity-50 blur-sm animate-pulse" />

        <div className="relative bg-black border border-white/10 p-10 overflow-hidden shadow-2xl">
          {/* Terminal Header */}
          <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
            <div className="text-[10px] text-emerald-500 font-mono uppercase tracking-widest">
              Input Stream Required
            </div>
            <button onClick={handleClose} className="text-white/40 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {!isSuccess ? (
            <div className="relative z-10 flex flex-col space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-light tracking-tighter text-white mb-2">
                  INITIALIZE TICKET SEQUENCE
                </h3>
                <p className="text-xs text-white/40 tracking-wide">
                  Enter coordinates to receive encrypted entry pass.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="group relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=" "
                    className="peer w-full bg-white/5 border border-white/10 p-3 text-sm font-mono text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all placeholder-transparent"
                    id="email-input"
                  />
                  <label
                    htmlFor="email-input"
                    className="absolute left-3 top-3 text-[10px] text-white/30 tracking-widest uppercase transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-xs peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-white/60 bg-black px-1"
                  >
                    Email Address
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {buttonText}
                </button>
              </form>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="text-emerald-500 mb-4 animate-bounce">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-medium font-mono text-white mb-2">&gt; DATA UPLOADED</h3>
              <p className="text-[10px] text-white/40 font-mono tracking-widest">CHECKING NETWORK...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
