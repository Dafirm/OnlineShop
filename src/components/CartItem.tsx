import { Button, Card, Col, Row, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    
        <Card style={{ width: "20rem" }}>
          <Card.Img
            variant="top"
            src={item.imgUrl}
            height="10px"
            style={{ objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-2">
                {" "}
                {item.name}
                {quantity > 1 && (
                  <span className="text-muted" style={{ fontSize: ".75rem" }}>
                    <br />
                    {quantity}pcs
                  </span>
                )}
              </span>
              <span className="ms-2 text-muted">
                {formatCurrency(item.price)}
              </span>
            </Card.Title>
            <Card.Text
              className="px-3.5 font-bold text-xl hover:text-crusta focus-within:text-crusta transition duration-150 ease-in-out"
              style={{ fontSize: ".85rem" }}
            >
              Total item selected price: {formatCurrency(item.price * quantity)}
            </Card.Text>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  className="w-100"
                >
                  + Add To Cart
                </Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    variant="primary"
                    onClick={() => increaseCartQuantity(id)}
                  >
                    Add
                  </Button>
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => decreaseCartQuantity(id)}
                    >
                      Reduce
                    </Button>
                  </div>
                  <Button
                    onClick={() => removeFromCart(id)}
                    variant="danger"
                    size="sm"
                  >
                    <span className="relative"> &times; Remove Item</span>
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </Card>

    
  );
}



