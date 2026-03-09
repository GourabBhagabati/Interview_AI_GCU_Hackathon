export default function StatCard({title,value,sub}){

return(

<div className="group relative overflow-hidden bg-slate-950/60 border border-slate-800 px-5 py-4 rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.75)] hover:border-teal-400/40 hover:shadow-[0_22px_55px_rgba(15,23,42,0.95)] hover:-translate-y-0.5 transition-all duration-200 animate-soft-glow">

  <div className="pointer-events-none absolute inset-px rounded-2xl bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

  <div className="relative">
    <p className="text-slate-400 text-xs font-medium tracking-wide uppercase">
      {title}
    </p>

    <div className="flex items-end justify-between mt-3">
      <h2 className="text-3xl font-semibold tracking-tight text-slate-50">
        {value}
      </h2>
      <span className="text-[11px] text-teal-300 bg-teal-500/10 border border-teal-500/25 rounded-full px-2 py-0.5">
        {sub}
      </span>
    </div>
  </div>

</div>

)

}
