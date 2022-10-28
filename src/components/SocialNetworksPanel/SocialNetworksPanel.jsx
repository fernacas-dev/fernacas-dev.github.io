import React from 'react'
import './SocialNetworksPanel.css'

const skills = [
  [
    {
      title: 'Twitter',
    },
    {
      title: 'Linkedin',
    },
    {
      title: 'Github',
    },
  ],
  [
    {
      title: 'Javascript',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'Javascript',
    },
  ],
  [
    {
      title: 'Javascript',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'Javascript',
    },
  ],
]

const SocialNetworkItem = ({title, bootstrapClass}) => {
  return (
    <div className={`${bootstrapClass} panel-item`}>
      {title}
    </div>
  )
}

const SocialNetworksTable = ({mySkills}) => {
  return (
    mySkills.map((row) => {
      return (
        <div className='row'>
          {
            row.map((item) => {
              return (<SocialNetworkItem title={item.title} bootstrapClass='col-md-4 col-sm-12' />)
            })
          }
        </div>
      )
    })
  )
}

const SocialNetworksPanel = () => {
  return (
    <div className="card panel">
      <h2 className="panel-title">Social Networks</h2>
      <div className='container'>
        <SocialNetworksTable mySkills={skills}/>
      </div>
    </div>
  )
}

export { SocialNetworksPanel }