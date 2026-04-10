import { createClient } from "@sanity/client";
import type { Loader } from "astro/loaders";

export function sanityAlbumLoader(): Loader {
    return {
        name: "sanity-album-loader",
        load: async ({ store, logger }) => {
            const client = createClient({
                projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
                dataset: import.meta.env.PUBLIC_SANITY_DATASET,
                useCdn: false,
                apiVersion: "2026-04-01",
            });

            logger.info("Fetching albums from Sanity...");

            const albums = await client.fetch(`
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
