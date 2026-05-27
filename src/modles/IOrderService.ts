import {Order} from '../../generated/prisma/client'
export interface orderRequest{
    productId:number;
    quantity:number;
    totalPrice:number;
}
export interface IOrderService{
    createOrder(order:orderRequest):Promise<Order>;
    getOrder():Promise<Readonly<Order[]>>;
}