import { Component, Prop, h } from '@stencil/core';
import { ICartItem } from '../../types/ICart';

@Component({
  tag: 'cart-list',
  styleUrl: 'cart-list.css',
  shadow: false,
})
export class CartList {
  @Prop() cartItems: string;

  render() {
    const { cartItems } = this;
    const parsedItems: ICartItem[] = JSON.parse(cartItems);
    const hasItems = parsedItems && parsedItems.length > 0;

    return hasItems ? (
      parsedItems.map(cartItem => (
        <cart-item
          skuId={cartItem.skuId}
          qty={cartItem.quantity}
          price={cartItem.appliedPrice}
          size={cartItem.product.size}
          name={cartItem.product.name}
          thumbnail={cartItem.product.thumb}
        />
      ))
    ) : (
      <div></div>
    );
  }
}
