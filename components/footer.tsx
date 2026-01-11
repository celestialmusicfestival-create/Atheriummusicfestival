import { Disc, Radio, Cpu } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        <div className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
          <div>Atherthium Core</div>
          <div>Protocol: V.2.0.4</div>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white/20 hover:text-white transition-colors">
            <Disc className="w-4 h-4" />
          </a>
          <a href="#" className="text-white/20 hover:text-white transition-colors">
            <Radio className="w-4 h-4" />
          </a>
          <a href="#" className="text-white/20 hover:text-white transition-colors">
            <Cpu className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
