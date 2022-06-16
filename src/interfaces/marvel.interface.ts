export type CategoriesT = "characters" | "comics" | "stories" | "series";


export interface StateI {
    loading: boolean,
    data: any[],
    category: CategoriesT,
    searchText: string
}


export interface ParamsI {
    name: string;
    category: CategoriesT
}
