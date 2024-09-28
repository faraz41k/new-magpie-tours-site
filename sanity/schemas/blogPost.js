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
        name: 'article',
        title: 'Article',
        type: 'text',
      },
      {
        name: 'post image',
        title: 'Post Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },
      
    ],
  }
