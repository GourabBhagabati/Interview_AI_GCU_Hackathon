export default function SkillBar({ label, value }) {

  return (

  <div className="mb-4">

    <div className="flex justify-between text-xs text-slate-300 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>

    <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden">

      <div
        className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"
        style={{ width: `${value}%` }}
      />

    </div>

  </div>

  )

}

