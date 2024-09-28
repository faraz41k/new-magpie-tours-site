export const blogPost= {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Post Title',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'article',
        title: 'Article',
        type: 'text',
      },
      {
        name: 'postimage',
        title: 'Post Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      
    ],
  }
