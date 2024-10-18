
export interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: "smartphones" |
    "laptops" |
    "fragrances" |
    "skincare" |
    "groceries" |
    "home-decoration" |
    "furniture" |
    "tops" |
    "womens-dresses" |
    "womens-shoes" |
    "mens-shirts" |
    "mens-shoes" |
    "mens-watches" |
    "womens-watches" |
    "womens-bags" |
    "womens-jewellery" |
    "sunglasses" |
    "automotive" |
    "motorcycle" |
    "lighting";
    thumbnail: string;
    images: string[];
    count?:number
}

export type ProductVeiw = {
    title: string,
    price: number,
    thumbnail: string,
    id: number
}

export type CategoryVeiw = {
    title: string,
    products: number,
    thumbnail: string,
    id: number
}


export type addProductType = {
    [properti in keyof ProductType]?: ProductType[properti]
}


export type initialValuesTypes = {
    title: string,
    price: number | string
    description: string
    brand: string;
    phone: string;
}

export interface User {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: "female" | "male" | "other"
    image: string
    token: string
}