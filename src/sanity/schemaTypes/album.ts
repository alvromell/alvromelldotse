import { defineField, defineType } from "sanity";

export const albumType = defineType({
    name: "album",
    title: "Album",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "text"
        }),
        defineField({
            name: "date",
            type: "date"
        }),
        defineField({
            name: "coverImage",
            type: "image"
        }),
        defineField({
            name: "photos",
            type: "array",
            of: [{ 
                type: "image",
                options: {
                    hotspot: true
                },
                fields: [
                    {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                    },
                    {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                    }
                ]
            }]
        })
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
})