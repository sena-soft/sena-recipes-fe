import {z} from "zod";

export const CategoriesAPIResponseSchema = z.object({
    categories: z.array(
        z.object({
            idCategory: z.string(),
            strCategory: z.string(),
            strCategoryThumb: z.string(),
            strCategoryDescription: z.string(),
        })
    )
});

export const SearchFilresSchema = z.object({
    query: z.string(),
    category: z.string(),
})