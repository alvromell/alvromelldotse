import { sanityClient } from "sanity:client";
import type { Loader } from "astro/loaders";

export function sanityAlbumLoader(): Loader {
    return {
        name: "sanity-album-loader",
        load: async ({ store, logger }) => {

            logger.info("Fetching albums from Sanity...");

            const albums = await sanityClient.fetch(`
                *[_type == "album"]{
                    title,
                    slug,
                    description,
                    date,
                    coverImage{
                        asset->{url},
                        alt
                    },
                    photos[]{
                        asset->{url},
                        alt,
                        caption
                    }
                }
            `);

            store.clear();
            for (const album of albums) {
                store.set({ id: album.slug.current, data: album });
            }

            logger.info(`Loaded ${albums.length} albums from Sanity.`);
        },
    };
}
