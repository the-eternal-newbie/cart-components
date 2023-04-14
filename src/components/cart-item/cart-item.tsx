import { Component, Element, Prop, h } from '@stencil/core';
import { parsedHTML } from '../../utils/utils';

@Component({
  tag: 'cart-item',
  styleUrl: 'cart-item.css',
  shadow: false,
})
export class CartItem {
  @Element() el: HTMLElement;

  @Prop() skuId: string;
  @Prop() name: string;
  @Prop() size: string;
  @Prop() qty: number;
  @Prop() price: number;
  @Prop() thumbnail: string;

  componentDidLoad() {
    const button = this.el.querySelector('button.remove');
    button.setAttribute('data-action', 'cart#myAction');
  }

  // handleClick() {
  //   const button = this.el.shadowRoot.querySelector('button.remove');
  //   button.setAttribute('data-action', 'cart#myAction');
  //   // @ts-ignore
  //   button.click();
  // }

  render() {
    const { skuId, name, size, qty, price, thumbnail } = this;

    const formattedUnitPrice = price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const formattedTotalPrice = (price * qty).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return (
      <div key={skuId} class="cart-item flex p-[24px] w-full justify-start border">
        <div class="w-[30%] flex flex-wrap">
          <img class="w-full h-full" src={thumbnail} alt={name} />
        </div>
        <div class="w-[70%] flex flex-col justify-start">
          <p class="text-sm mt-4 font-bold tracking-tighter text-zinc-900 mb-[1px]">{parsedHTML(name)}</p>
          <p class="text-sm my-[1px]">Size: {size}</p>
          <item-price unitPrice={formattedUnitPrice} totalPrice={formattedTotalPrice} minimal={true} />
          <item-qty qty={qty} readonly={true} />
          <button class="remove">Remove</button>
        </div>
      </div>
    );
  }
}
