

export const bannerSchmema= {
        name: 'banner',
        title: 'Banner',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Banner Title',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Banner Description',
            type: 'text',
          },
          {
            name: 'image',
            title: 'Banner Image',
            type: 'image',
            options: {
              hotspot: true, // Enable image cropping
            },
          },
          
        ],
      }
