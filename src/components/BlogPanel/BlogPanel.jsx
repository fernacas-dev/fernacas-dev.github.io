import React from 'react'
import './BlogPanel.css'

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

const BlogItem = ({title, bootstrapClass}) => {
  return (
    <div className={`${bootstrapClass} panel-item`}>
      {title}
    </div>
  )
}

const BlogTable = ({mySkills}) => {
  return (
    mySkills.map((row) => {
      return (
        <div className='row'>
          {
            row.map((item) => {
              return (<BlogItem title={item.title} bootstrapClass='col-md-4 col-sm-12' />)
            })
          }
        </div>
      )
    })
  )
}

const BlogPanel = () => {
  return (
    <div className="card panel">
      <h2 className="panel-title">Blog</h2>
      <div className='container'>
        <BlogTable mySkills={skills}/>
      </div>
    </div>
  )
}

export { BlogPanel }