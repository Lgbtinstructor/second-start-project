import { useShoppingCart } from "../context/ShoppingCartContex"
import  storeItems  from "../data/items.json"
import { Stack, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
type CartItemProps = {
    id: number
    quantity: number
}


export function CartItem({ id, quantity } : CartItemProps){
 const {removeFromCart} = useShoppingCart()
 const item = storeItems.find(i => i.id === id)
 if (item == null) return null

 return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={item.imgUrl} style={{ 
        width: "50px", 
        height: "50px" ,
        objectFit: "cover"}}
        />
        <div className="me-auto">
            <div>
                {item.name} {quantity > 1 && (
                <span className="text-muted" style={{fontSize: ".65rem"}}>
                    x{quantity}
                </span>)}
            </div>
        </div>
        <div className="text-muted" style={{fontSize: ".75rem"
    }}>
            {formatCurrency(item.price)}
        </div>
        <div>{formatCurrency(item.price * quantity)}</div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
            &times;</Button>
    </Stack>
 )
}