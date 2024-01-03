import MemberCard from '@/components/learn/MemberCard'
import prince from '../../../../../public/team/prince.webp'
import jeet from '../../../../../public/team/jeet.webp'
import meet from '../../../../../public/team/meet.webp'
import aakash from '../../../../../public/team/aakash.webp'
import vikas from '../../../../../public/team/vikas.webp'
import abhinav from '../../../../../public/team/abhinav.webp'
import aditya from '../../../../../public/team/aditya.webp'
import minal from '../../../../../public/team/minal.webp'

export default function OurTeam() {
  const data = [
    {
      linkImg: jeet,
      name: ' Jeet Chandan',
      linkedin: 'https://www.linkedin.com/in/jeetchandan/',
      position: ' Founder and MD',
    },
    {
      linkImg: meet,
      name: ' Meet Jain ',
      linkedin: 'https://www.linkedin.com/in/meet-jain-552153204/',
      position: ' Co-Founder & CEO',
    },
    {
      linkImg: prince,
      name: " Prince D'mello ",
      linkedin: 'https://www.linkedin.com/in/princedmello/',
      position: 'CTO ',
    },
    {
      linkImg: aakash,
      name: ' Aakash Goswami',
      linkedin: 'https://www.linkedin.com/in/aakash-goswami-70839595/',
      position: 'CGO',
    },
    {
      linkImg: abhinav,
      name: 'Abhinav Mishra',
      linkedin: 'https://www.linkedin.com/in/abhinav-mishra-b717a7147/',
      position: 'Investor Relation Head',
    },
    {
      linkImg: minal,
      name: 'Muskaan Agarwal',
      linkedin: 'https://www.linkedin.com/in/muskan1997/',
      position: 'Company Secretary ',
    },
    {
      linkImg: minal,
      name: 'Dhwani Raithatha',
      linkedin: '',
      position: ' Customer Success Manager ',
    },
    {
      linkImg: minal,
      name: 'Minal Patel',
      linkedin: 'https://www.linkedin.com/in/patel-minal/',
      position: 'Investor Relation',
    },
    {
      linkImg: aditya,
      name: 'Naveen Raikwar ',
      linkedin: 'https://www.linkedin.com/in/naveen-raikwar-352173143/',
      position: 'Investor Relation',
    },
    {
      linkImg: aditya,
      name: 'Bhargav Makwana',
      linkedin: 'https://www.linkedin.com/in/bhargav-makwana-253309197/',
      position: 'Investor Relation',
    },

    {
      linkImg: aditya,
      name: 'Aditya Narkar',
      linkedin: 'https://www.linkedin.com/in/aditya-narkar-6a7a6724a/',
      position: 'Jr Developer',
    },

    {
      linkImg: vikas,
      name: ' Vikas Pawar ',
      linkedin: 'https://www.linkedin.com/in/vikas-pawar-587821257/',
      position: ' Design Head ',
    },
    {
      linkImg: aditya,
      name: 'Mayuresh Khupte',
      linkedin: '',
      position: 'Accountant',
    },
  ]
  return (
    <section
      id="team"
      className="flex flex-col  justify-center lg:items-center xl:my-16">
      <h4 className="pl-4 text-4xl lg:p-0">Our Team</h4>
      <div className=" mx-4 my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-16 lg:w-3/4 xl:mx-32 xl:mt-16 xl:grid-cols-4">
        {data.map((item) => (
          <MemberCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  )
}
