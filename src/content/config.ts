import { defineCollection, z } from 'astro:content';

const albumCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        heroImage: image(),
        images: z.array(z.object({
            img: image(),
            alt: z.string()
        })),
    })
});

export const collections = {
    albums: albumCollection, 
}