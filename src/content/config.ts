import { defineCollection, z } from 'astro:content';
import { sanityAlbumLoader } from '../sanity/albumLoader';

const albumCollection = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        heroImage: z.object({
            img: image(),
            alt: z.string()
        }),
        images: z.array(z.object({
            img: image(),
            alt: z.string()
        })),
    })
});

const sanityAlbumCollection = defineCollection({
    loader: sanityAlbumLoader(),
    schema: z.object({
        title: z.string(),
        slug: z.object({ _type: z.literal("slug"), current: z.string() }),
        description: z.string().optional(),
        date: z.string(),
        coverImage: z.object({
            asset: z.object({ url: z.string() }),
            alt: z.string().optional(),
        }).optional(),
        photos: z.array(z.object({
            asset: z.object({ url: z.string() }),
            alt: z.string().optional(),
            caption: z.string().optional(),
        })).optional(),
    }),
});

export const collections = {
    albums: albumCollection,
    sanityAlbums: sanityAlbumCollection,
}