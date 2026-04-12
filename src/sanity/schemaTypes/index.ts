import type { SchemaTypeDefinition } from "sanity";

import { albumType } from "./album";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [albumType]
};