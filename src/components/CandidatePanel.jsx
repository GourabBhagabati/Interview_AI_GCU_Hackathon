import SkillBar from "./SkillBar"

export default function CandidatePanel(){

return(

<div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 shadow-[0_22px_55px_rgba(15,23,42,0.9)] hover:border-teal-400/40 hover:shadow-[0_28px_70px_rgba(15,23,42,1)] hover:-translate-y-0.5 transition-all duration-200 animate-soft-glow">

  <div className="flex items-center justify-between mb-4">

    <div>
      <h2 className="text-xl font-semibold tracking-tight">
        Arjun Sharma
      </h2>
      <p className="text-xs text-slate-400 mt-1">
        Senior Frontend Developer · 6 yrs
      </p>
    </div>

    <div className="flex flex-col items-end gap-2">
      <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
        Strong hire
      </span>
      <span className="text-[10px] uppercase tracking-wide text-slate-500">
        AI Fit Score
      </span>
    </div>

  </div>

  <div className="flex items-center gap-6 mb-6">

    <div className="relative">
      <div className="w-20 h-20 rounded-full border border-teal-400/40 bg-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(45,212,191,0.25)] animate-slow-pulse">
        <span className="text-3xl font-semibold text-teal-300">
          91
        </span>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wide text-slate-400">
        Excellent match
      </div>
    </div>

    <div className="space-y-1 text-xs text-slate-400">
      <p>Role: <span className="text-slate-200">Senior Frontend · React / TypeScript</span></p>
      <p>Location: <span className="text-slate-200">Remote · India</span></p>
      <p>Last interview: <span className="text-slate-200">Today · 34 min</span></p>
    </div>

  </div>

  <div className="space-y-2 mb-4 text-[11px] text-slate-400">
    <p>
      The candidate demonstrates strong frontend fundamentals, thoughtful trade‑offs,
      and clear communication. Particularly strong in system design and debugging.
    </p>
  </div>

  <div className="mt-6">
    <SkillBar label="Technical depth" value={88}/>
    <SkillBar label="Communication" value={74}/>
    <SkillBar label="Problem solving" value={81}/>
    <SkillBar label="Culture add" value={92}/>
    <SkillBar label="Experience match" value={78}/>
  </div>

</div>

)

}
