import { CartCounter } from "@/shopping-cart/components/CartCounter";


export const metadata = {
    title: 'Shopping Cart',
    description: 'Counter Simple',
};
   

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Products in Cart</span>
            <CartCounter  value={0}/>
        </div>
    )
}