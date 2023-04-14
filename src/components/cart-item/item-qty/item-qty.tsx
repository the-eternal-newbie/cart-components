import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'item-qty',
  styleUrl: 'item-qty.css',
  shadow: true,
})
export class ItemQty {
  @Prop() qty: number;
  @Prop() readonly: boolean;

  render() {
    const { qty, readonly } = this;

    return readonly ? (
      <p class="w-full text-sm font-bold border-none">QTY: {qty}</p>
    ) : (
      <div class="w-[10%] flex justify-left text-[22px] font-semibold tracking-tighter text-zinc-900 gap-[12px]">
        <div class="flex items-center justify-center">
          <button class="p-1 border border-gray-400 focus:outline-none" react-hook="decrease-qty" disabled={qty === 1}>
            <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>
          </button>
          <p class="w-12 text-lg font-bold text-center border-none  focus:outline-none">{qty}</p>
          <button class="p-1 border border-gray-400 focus:outline-none" react-hook="increase-qty">
            <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
