const tours = {
    name: 'tours',
    title: 'Tours',
    type: 'document',
    fields: [
        // title
        {
            name: "name",
            title: "Name",
            type:"string",
        },

        // category
        {
          name: "category",
          title: "Category",
          type:"string",
      },

      


        // slug
        {
            name: "slug",
            title: "Slug",
            type:"slug",
            options: {source: 'name'}
        },

        // overview
        {
            name: "overview",
            title: "Overview",
            type:"string",
        },

        // destination
        {
          name: "destination",
          title: "Destination",
          type:"string",
      },

      // price
      {
        name: "price",
        title: "Price",
        type:"string",
    },

      // duration
      {
        name: "duration",
        title: "Duration",
        type:"string",
    },

    // activities
    {
      name: "activities",
      title: "Activities",
      type:"string",
  },


  

// Guidance 
{
  name: "guide",
  title: "Guide",
  type:"string",
},


// tour calender

{
  name: "calender",
  title: "Calender",
  type:"string",
},



        // itenary at glance
        {
            title: 'itenary ',
            name: 'Itenary',
            type: 'array',
            of: [{type: 'string'}]
          },

          {
            title: 'itenary object ',
            name: 'ItenaryOject',
            type: 'array',
            of: [{type: {
              title: 'string',
              desc: 'string'
            }}]
          },

          // services included
          {
            title: 'services',
            name: 'Services_Included',
            type: 'array',
            of: [{type: 'string'}]
          },

          // services not included
          {
            title: 'notincluded',
            name: 'Not_Included',
            type: 'array',
            of: [{type: 'string'}]
          },

          // Notes
          {
            title: 'notes',
            name: 'Notes',
            type: 'array',
            of: [{type: 'string'}]
          },

        // slider images

        {
          title: 'slider_images',
          name: 'Slider_Images',
          type: 'array',
          of: [
            {
              type: 'image',
              options:{
                hotspot: false
              }
             },
            ], 
        }, 

        //   image
          {
            title: 'Cardimage',
            name: 'cardimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            
          },


          // map
          {
            title: 'Map',
            name: 'map',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            
          },

        //   url

        {
            name: 'url',
            title: 'Url',
            type: 'string',

        }
    ]
}


export default tours;