import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'item-price',
  styleUrl: 'item-price.css',
  shadow: true,
})
export class ItemPrice {
  @Prop() unitPrice: string;
  @Prop() totalPrice: string;
  @Prop() minimal: boolean;

  render() {
    const { unitPrice, totalPrice, minimal } = this;

    return minimal ? (
      <p class="w-12 text-sm font-bold border-none">{totalPrice}</p>
    ) : (
      <div class="flex w-[90%] justify-between">
        <p class="text-[22px] font-semibold tracking-tighter text-zinc-900">{`${unitPrice}`}</p>
        <p class="text-[22px] font-semibold tracking-tighter text-zinc-900">{`${totalPrice}`}</p>
      </div>
    );
  }
}
