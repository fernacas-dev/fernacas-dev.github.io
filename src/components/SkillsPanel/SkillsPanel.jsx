import React from 'react'
import './SkillsPanel.css'

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

const SkillItem = ({title, bootstrapClass}) => {
  return (
    <div className={`${bootstrapClass} panel-item`}>
      {title}
    </div>
  )
}

const SkillTable = ({mySkills}) => {
  return (
    mySkills.map((row) => {
      return (
        <div className='row'>
          {
            row.map((item) => {
              return (<SkillItem title={item.title} bootstrapClass='col-md-4 col-sm-12' />)
            })
          }
        </div>
      )
    })
  )
}

const SkillsPanel = () => {
  return (
    <div className="card panel">
      <h2 className="panel-title">Skills</h2>
      <div className='container'>
        <SkillTable mySkills={skills}/>
      </div>
    </div>
  )
}

export { SkillsPanel }