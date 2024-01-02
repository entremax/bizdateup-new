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
    <div
      className="grid grid-cols-2  gap-8 items-center justify-center lg:flex py-16 lg:justify-around bg-[#F3F3FA] px-8">
      {stats.map((data) => (
        <div
          key={data.id}
          className="flex flex-col gap-1">
            <span
              className="text-3xl font-semibold">
              {data.title}
            </span>
          <span
            className="text-[#9B9BAB] text-lg font-semibold">
              {data.desc}
            </span>
        </div>
      ))}
    </div>
  )
}