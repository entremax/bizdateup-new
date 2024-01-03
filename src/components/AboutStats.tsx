const stats = [
  {
    id: 1,
    title: '12+',
    desc: 'Startups Funded',
  },
  {
    id: 2,
    title: '4000+',
    desc: 'Strong Community',
  },
  {
    id: 3,
    title: '500+',
    desc: 'Active Investors',
  },
  {
    id: 4,
    title: '10CR+',
    desc: 'Total Funding',
  },
]

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2  items-center justify-center gap-8 bg-[#F3F3FA] px-8 py-16 lg:flex lg:justify-around">
      {stats.map((data) => (
        <div key={data.id} className="flex flex-col gap-1">
          <span className="text-3xl font-semibold">{data.title}</span>
          <span className="text-lg font-semibold text-[#9B9BAB]">
            {data.desc}
          </span>
        </div>
      ))}
    </div>
  )
}
