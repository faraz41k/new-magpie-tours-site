import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import tours from './sanity/schemas/tours-schema'
import { reviewSchema } from './sanity/schemas/review-schema'
import { bannerSchmema } from './sanity/schemas/banner-schema'
import { blogPost } from './sanity/schemas/blogPost'


const config =defineConfig({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    title: "magpietours",
    apiVersion: '2024-01-08',
    basePath: '/admin',
    useCdn: false,
    plugins: [deskTool()],
    schema: {types: [tours,reviewSchema,bannerSchmema,blogPost]}
})


export default config