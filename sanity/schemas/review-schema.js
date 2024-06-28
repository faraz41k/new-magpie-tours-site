import React from 'react'

export const reviewSchema = {
        name: 'review',
        title: 'Review',
        type: 'document',
        fields:[
            {
                name: "user_name",
                title: "Username",
                type:"string",
            },

            {
              name: "category",
              title: "Category",
              type:"string",
          },
    
            // remarks
            {
              name: "remarks",
              title: "Remarks",
              type:"string",
          },
            
          {
            name: "country",
            title: "Country",
            type:"string",
          },

          {
                    
            title: 'user_image',
            name: 'Userimage',
            type: 'image',
            options: {
              hotspot: true // <-- Defaults to false
            },
            
          },
        ]
    }



