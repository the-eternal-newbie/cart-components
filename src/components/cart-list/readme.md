# cart-list



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type     | Default     |
| ----------- | ------------ | ----------- | -------- | ----------- |
| `cartItems` | `cart-items` |             | `string` | `undefined` |


## Dependencies

### Depends on

- [cart-item](../cart-item)

### Graph
```mermaid
graph TD;
  cart-list --> cart-item
  cart-item --> item-price
  cart-item --> item-qty
  style cart-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
