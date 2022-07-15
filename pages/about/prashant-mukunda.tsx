import { NextPage } from 'next'
import { sanityClient } from '../../sanity'
import { About } from '../../typing'

interface Props {
  iskcon: About
}

const GuruMaharaj: NextPage = (props) => {
  const { iskcon } = props as Props

  return (
    <section>
      <div className="flex justify-center">
        <img src={`${iskcon.image}`} className="p-2 shadow-md md:w-[600px]" />
      </div>
      <div className="py-6">
        <h4 className="text-[25px] text-purple-700 font-semibold border-b-[1.5px]">
          Prashant Mukunda Das :
        </h4>
        <div className="text-[18px] font-light">
          <p className="py-2">
            Spiritual Guide and Senior Councillor for ISKCON.
          </p>
          <p className="py-2 text-purple-600"> His Profesional Education :</p>
          <p className="py-2">
            B.Sc (Industrial Chemistry) Delhi University, MBA ( Symbiosis
            institute) DPS from london college of management.
          </p>
          <p className="py-2">
            He has worked with big multi national companies like Novartis, WNS,
            Millward Brown.
          </p>
          <p className="py-2">He is associated with ISKCON last 15 years.</p>
          <p className="py-2">
            He is Vedic Bhakti Shastri from ISKCON (MIHE - Mayapur Institute of
            Higher Education)
          </p>
          <p className="py-2">
            He is Involved into Councelling as spiritual Guide to many families
            @ India, Florida, Phillidelphia, Dubai, Muscut, Oman, Denver,
            Pakistan, Myanmar, malaysia, New Jersey, Germany, London,
            Bangladesh. He is famous vedic scripture speaker can be seen on
            YouTube and Hare Krishna TV Channel.
          </p>

          <p className="py-2">
            He has done more than 100 seminars on DYPH, Life Management, Stress
            Management , Time Management in corporates, schools, societies,
            management colleges. Like Apeejay College of Management, Delhi.
            Indian navy school, Visakhapatnam. Paras Hospital, Gurgaon. Akash
            College , Ajmer. PHD chamber of commerce , Delhi. AIims Hospital
            Delhi.
          </p>

          <p className="py-2">
            He is known for his Dham Yatra Katha done at Rameshvaram, Jagannath
            Puri, Dwarka, Vrindavan, Mayapur, Tirupati, Guruvayur, uddippi, Sri
            Rangam, Haridwar, Suktaal, Yamunotri, Simhachalam, Ahobilam.
          </p>
          <p className="py-2">
            He is regular guest speaker of srimad Bhagwatam in different iskcon
            temples globaly...
          </p>
        </div>
      </div>
    </section>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "about"]{
          _id,
          name,
          "image": image.asset->url
        }`
  const iskcon = (await sanityClient.fetch(query)) as [About]

  return {
    props: {
      iskcon: iskcon.filter((f) => f.name === 'Prashant Mukunda Das')[0],
    },
  }
}

export default GuruMaharaj
