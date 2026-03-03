const stats = [
  { label: 'Clients Satisfaction', value: '98%', highlight: true },
  { label: 'Countries Served', value: '150+', highlight: false },
  { label: 'Years of experience', value: '05+', highlight: false },
  { label: 'Websites Created', value: '200+', highlight: false },
]

export default function StatsSection() {
  return (
    <section className="bg-[#041436] py-16 md:py-20">
      <div className="app-px">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-[40px] md:text-[56px] font-extrabold leading-tight text-white">
            Every feature we ship is tied to impact,{' '}
            <span className="text-[#38D6C4]">faster performance</span>{' '}
            <span className="text-[#38D6C4]">&amp;</span>{' '}
            scalable growth
          </h2>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0C1B3C] rounded-2xl px-6 py-5 flex flex-col items-center justify-center gap-2 text-center"
              >
                <span
                  className={`font-[family-name:var(--font-inter)] text-[40px] md:text-[48px] font-bold leading-tight ${
                    stat.highlight ? 'text-[#38D6C4]' : 'text-white'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-inter)] text-[16px] font-normal text-[#E0E0E0]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
