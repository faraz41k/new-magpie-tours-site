export const blogPost= {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'postTitle',
        title: 'Post Title',
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
        options: {source: 'postTitle'}
      },
      {
        name: 'intro',
        title: 'Intro',
        type: 'text',
      },
      
      {
        name: 'introimage',
        title: 'Intro Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image cropping
        },
      },


      {
        name: 'subHeading1',
        title: 'Sub Heading 1',
        type: 'text',
      },

      {
        name: 'article1',
        title: 'Article 1',
        type: 'text',
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
        type: 'text',
      },

      {
        name: 'article2',
        title: 'Article 2',
        type: 'text',
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
        type: 'text',
      },

      {
        name: 'article3',
        title: 'Article 3',
        type: 'text',
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
        type: 'text',
      },
      
    ],
  }
