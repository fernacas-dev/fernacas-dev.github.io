import React from 'react'
import './PortfolioPanel.css'

const skills = [
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

const PortfolioItem = ({title, bootstrapClass}) => {
  return (
    <div className={`${bootstrapClass} panel-item`}>
      {title}
    </div>
  )
}

const PortfolioTable = ({mySkills}) => {
  return (
    mySkills.map((row) => {
      return (
        <div className='row'>
          {
            row.map((item) => {
              return (<PortfolioItem title={item.title} bootstrapClass='col-md-4 col-sm-12' />)
            })
          }
        </div>
      )
    })
  )
}

const PortfolioPanel = () => {
  return (
    <div className="card panel">
      <h2 className="panel-title">Portfolio</h2>
      <div className='container'>
        <PortfolioTable mySkills={skills}/>
      </div>
    </div>
  )
}

export { PortfolioPanel }