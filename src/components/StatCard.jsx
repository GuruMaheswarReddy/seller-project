const StatCard = ({ label, value, helper, accent }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-yellow-500/10 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-black px-4 py-4 shadow-lg shadow-black/60 backdrop-blur-md transition hover:-translate-y-1 hover:border-yellow-500/40 hover:shadow-yellow-500/25">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-yellow-400/10 to-yellow-600/5 blur-2xl" />
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {label}
        </p>
        {accent && (
          <span className="rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-yellow-400">
            {accent}
          </span>
        )}
      </div>
      <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
      {helper && <p className="mt-1 text-[11px] text-gray-500">{helper}</p>}
    </div>
  )
}

export default StatCard


