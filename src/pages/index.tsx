import React from 'react'
import { Link, navigate, withPrefix } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/header'
import Blogs from '../components/blogs'
import Layout from '../components/layout'

const TwoColumnWrapper = styled.div`
  @media screen and (min-width: 40rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`

const ProjectWrapper = styled.div`
  position: relative;
  & > * {
    margin-left: 80px;
  }
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    margin-left: 0;
  }
`

const Project = ({ title, path, body, img }) =>
  <ProjectWrapper onClick={ () => navigate('/' + path) } role="link" tabIndex={0}>
    <img src={ img }/>
    <h3 className='accent'>{ title }</h3>
    <p>{ body }</p>
  </ProjectWrapper>

const OpenSource = () =>
  <>
    <h2>Open Source</h2>
    <TwoColumnWrapper>
    <Project
      img={ withPrefix('/viewanimator.svg') }
      path=''
      title='View Animator'
      body='Animate an entire view hierarchy with just one line of code.'/>
    <Project
      img={ withPrefix('/sizes.svg') }
      path=''
      title='Sizes'
      body='Drastically reduce effort on testing your app on different sizes'/>
    <Project
      img={ withPrefix('/easytransition.svg') }
      path=''
      title='Easy Transitions'
      body='Most common interactions that drive transitions on one-line'/>
    <Project
      img={ withPrefix('/swipetabbar.svg') }
      path=''
      title='Swipeable Tab Bar Controller'
      body="Tab Bar that let's you swipe interactively with different transitions"/>
    </TwoColumnWrapper>
  </>

const Talks = () =>
  <div>
    <h2>Talks</h2>
    <ul>
      <li><a>Exploring interactive transitions, 2018 (Spanish)</a></li>
      <li><a>Evolving with Swift, 2018 (Spanish)</a></li>
    </ul>
  </div>

const Podcasts = () =>
  <div>
    <h2>Podcasts</h2>
    <ul>
      <li><a>Swift Coders, episode 59</a></li>
      <li><a>iPhreaks, episode 224</a></li>
    </ul>
    <p>I’ve been invited as a guest to a few different podscasts and I loved each and everyone of them. I’m open to this type of collaboration so hit me up if you have an episode idea which I can participate in.</p>
  </div>

const HireMe = () =>
  <>
    <h2>Hire Me</h2>
    <p>I’m always interested in new projects, consulting or doing code review. I mostly work via <a href='https://www.toptal.com/#expect-just-trusted-coders'>Toptal</a>.</p>
  </>

const IconizedList = styled.ul`
  & > li > img {
    margin-bottom: -2px;
    margin-right: 8px;
  }
`

const IndexPage = () =>
  <>
  <Header/>
  <Layout>
    <IconizedList>
      <li><img src='/Twitter.svg'/>@marcosgriselli</li>
      <li><img src='/Swift.svg'/>iOS Developer</li>
      <li><img src='/Location.svg'/>Buenos Aires, Argentina (GMT-3)</li>
    </IconizedList>
    <h2>Blogs</h2>
    <TwoColumnWrapper>
      <Blogs/>
    </TwoColumnWrapper>
    <OpenSource/>
    <TwoColumnWrapper>
      <Talks/>
      <Podcasts/>
    </TwoColumnWrapper>
    <HireMe/>
  </Layout>
  </>

export default IndexPage
