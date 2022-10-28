import React from 'react'
import './ProductPanel.css'

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

const ProductItem = ({title, bootstrapClass}) => {
  return (
    <div className={`${bootstrapClass} panel-item`}>
      {title}
    </div>
  )
}

const ProductTable = ({mySkills}) => {
  return (
    mySkills.map((row) => {
      return (
        <div className='row'>
          {
            row.map((item) => {
              return (<ProductItem title={item.title} bootstrapClass='col-md-4 col-sm-12' />)
            })
          }
        </div>
      )
    })
  )
}

const ProductPanel = () => {
  return (
    <div className="card panel">
      <h2 className="panel-title">Products</h2>
      <div className='container'>
        <ProductTable mySkills={skills}/>
      </div>
    </div>
  )
}

export { ProductPanel }