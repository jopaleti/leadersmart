import { lea, ring, shirt, shoe } from "./assets";

// Define the type for a product item
interface ProductItem {
  id: number;
  productName: string;
  description: string;
  details: string[];
  brand: string;
  availability: string;
  sku: string;
  condition: string;
  category: string;
  tag: string;
  material: string;
  quantity: number;
  rate: number;
  productImage: string[];
  productColor: string[];
  originalPrice: string;
  price: string;
  shortDescription: string;
}


const productItems: ProductItem[] = [
  {
    id: 1,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [shirt, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
  {
    id: 2,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [ring, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
  {
    id: 3,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [ring, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
  {
    id: 4,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [ring, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
  {
    id: 5,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [ring, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
  {
    id: 6,
    productName: "Tucci Di Lusso Special Edition",
    description:
      "This cutting-edge footwear solution is designed for athletes and enthusiasts. It offers a plush, cushioned insole for unmatched comfort and features an advanced breathable mesh upper to keep your feet cool and dry during your workout. Crafted from high-quality, lightweight materials, these shoes are durable without weighing you down. The precision-fit system ensures a snug, secure feel, and the multi-surface tread pattern on the outsole guarantees top-tier traction. StrideMax combines style with function and is suitable for seasoned marathon runners, casual joggers, and anyone seeking everyday comfort. Elevate your running experience – order the StrideMax Running Shoe today!",
    details: [
      "SKU: 20156",
      "Model: NG005",
      "Production Country: Nigeria",
      "Size: EU 46",
      "Size (L x W x H cm): 25×20×25",
      "Weight (kg): 0.7",
      "Color: Black",
      "Type: Athlete shoes",
      "Use cases: Football, sports, athletics, ",
    ],
    brand: "DAM PK",
    availability: "In Stock",
    sku: "20156",
    condition: "NEW",
    category: "Shoe",
    tag: "Casual, Sport",
    material: "82% leather",
    quantity: 1,
    rate: 4.5,
    productImage: [ring, lea, lea, lea],
    productColor: [shoe, shoe, shoe],
    originalPrice: "N13,500",
    price: "#10,000",
    shortDescription:
      "This is a short description of the product posted an written by the vendor who graciously loves our platform and cherishes it.",
  },
];

export default productItems