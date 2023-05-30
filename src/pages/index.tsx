// Step 1: Import React
import * as React from 'react'
import HomeImage from '../images/home_image.svg';
import Layout from '../components/layout/layout'
import '../styles/index.scss';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout>
      <div className='home-page-wrapper'>
        <h1>Father, Web developer & runner</h1>
        <img src={HomeImage} alt='Github activity' />
      </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>

// Step 3: Export your component
export default IndexPage