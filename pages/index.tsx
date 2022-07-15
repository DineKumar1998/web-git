import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { sanityClient } from '../sanity'
import { Authors } from '../typing'

interface Props {
  authors: [Authors]
}

const Home: NextPage = (props: Props) => {
  console.log(props.authors)

  return (
    <div>
      {/* {props.authors.map((author) => {
        return <img src={author.image} alt={'Images'} />
      })} */}
      <img src={'https://cdn.sanity.io/images/88vxczhn/production/e69468f0e1d5c42a339ef8a03c03fc8c7d8f18f9-640x639.jpg'} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "author"]{
    _id,
    name,
    slug,
    image,
    bio
  }`

  const authors = await sanityClient.fetch(query)

  return {
    props: {
      authors,
    },
  }
}

export default Home
