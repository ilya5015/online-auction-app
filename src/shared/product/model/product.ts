export type Product = {
    id: number;
    name: string;
    info: string;
    imgs: Array<typeof Image> | null;
};

export const product: Product = {
    id: 23,
    name: 'Good',
    info: "This is good",
    imgs: null
};
