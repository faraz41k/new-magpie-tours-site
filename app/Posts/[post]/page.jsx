import { getPost } from '@/sanity/sanity/sanity-utils'
import React from 'react'

const page = async ({params}) => {
    const slug = params.post
    const post = await getPost(slug)
  return (
    <div>{params}</div>
  )
}

export default page