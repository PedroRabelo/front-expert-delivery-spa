export type TypePageProps = {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    deliveryFee: string;
    rate: number;
    reviews: number;
    category: string;
    deliveryTime: string;
  };
};

export type TypeParams = {
  params: {
    id: string;
  };
};
