export class CfgProductList {
    userId: string;
    listTitle: string;
    creationDate: string;
    products: [
        {
            productId: string,
            productName: string,
            productDescription: string,
            productQte: string,
            productCategory: string,
            procuctCategoryId: string,
            productImg: string
        }
    ];
    totalAmount: string;
}
