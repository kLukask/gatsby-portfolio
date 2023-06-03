import * as React from 'react'
import Layout from '../components/layout/layout'
import '../styles/index.scss';
import { HeadProps } from 'gatsby';
import { SEO } from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout>
      <div className='home-page-wrapper'>
        <h1>Father, Web developer & runner</h1>
        <StaticImage className='home-page-wrapper__image' src='../images/home_image.svg' alt='Developer' />
      </div>
    </Layout>
  )
}

export default IndexPage

export function Head(props: HeadProps) {
  return (
    <SEO />
  )
}
