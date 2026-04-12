import { defineField, defineType } from "sanity";

export const albumType = defineType({
    name: "album",
    title: "Album",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text"
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
            validation: (rule) => rule.required()
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    type: "string",
                    title: "Alternative text",
                }
            ]
        }),
        defineField({
            name: "photos",
            title: "Photos",
            type: "array",
            of: [{
                type: "image",
                options: {
                    hotspot: true
                },
                fields: [
                    {
                        name: "alt",
                        type: "string",
                        title: "Alternative text",
                    },
                    {
                        name: "caption",
                        type: "string",
                        title: "Caption",
                    }
                ]
            }]
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "coverImage",
        },
    },
})