'use client'

import React, { useEffect } from 'react'
import CategoryFilter from '../../_components/CategoryFilter'
import { getCourseList } from '../../../_services/index'

function Browse() {
  useEffect(() => {
    getCourses()
  }, [])

  const getCourses = () => {
    getCourseList().then(resp => {
      console.log(resp)
    })
  }

  return (
    <div>
      <CategoryFilter />
    </div>
  )
}

export default Browse