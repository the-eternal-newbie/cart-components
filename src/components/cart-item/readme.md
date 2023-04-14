# cart-item



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type     | Default     |
| ----------- | ----------- | ----------- | -------- | ----------- |
| `name`      | `name`      |             | `string` | `undefined` |
| `price`     | `price`     |             | `number` | `undefined` |
| `qty`       | `qty`       |             | `number` | `undefined` |
| `size`      | `size`      |             | `string` | `undefined` |
| `skuId`     | `sku-id`    |             | `string` | `undefined` |
| `thumbnail` | `thumbnail` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [cart-list](../cart-list)

### Depends on

- [item-price](item-price)
- [item-qty](item-qty)

### Graph
```mermaid
graph TD;
  cart-item --> item-price
  cart-item --> item-qty
  cart-list --> cart-item
  style cart-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
