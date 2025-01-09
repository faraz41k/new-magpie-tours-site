export const blogPost= {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      }, 

      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {source: 'title'}
      },
      {
        name: 'intro',
        title: 'Intro',
        type: 'string',
      },
      
      


      {
        name: 'subHeading1',
        title: 'Sub Heading 1',
        type: 'string',
      },

      {
        name: 'article1',
        title: 'Article 1',
        type: 'string',
      },
      {
        name: 'postimage1',
        title: 'Post Image1',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },

      {
        name: 'subHeading2',
        title: 'Sub Heading 2',
        type: 'string',
      },

      {
        name: 'article2',
        title: 'Article 2',
        type: 'string',
      },


      {
        name: 'postimage2',
        title: 'Post Image2',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },

      {
        name: 'subHeading3',
        title: 'Sub Heading 3',
        type: 'string',
      },

      {
        name: 'article3',
        title: 'Article 3',
        type: 'string',
      },


      {
        name: 'postimage3',
        title: 'Post Image3',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },

      {
        name: 'url',
        title: 'URL',
        type: 'string',
      },
      
    ],
  }
