import { ICartEngraving, IKitInfo } from './IKit';

export enum DiscountTypes {
  flat = 'flat',
  percentage = 'percentage',
  dynamic = 'dynamic',
  bogo = 'bogo',
}

export interface IProduct {
  thumb: string;
  altThumb: string[];
  name: string;
  description: string;
  skuLabel: string;
  size: string;
  shade: string;
  shadeCode: string;
  url: string;
  price: number;
  productId: string;
  readonly?: boolean;
  isSample: boolean;
  baseName: string;
  maxAllowedQty?: number;
}

export interface ICartItem {
  skuId: string;
  quantity: number;
  unitPriceWithTax: number;
  appliedPriceWithTax: number;
  appliedPrice?: number;
  discountPercent: number;
  discountedUnitPriceWithTax: number;
  product: IProduct;
  offerCode?: string | null;
  isKitItem?: boolean;
  isReplenishable: boolean;
  isOutOfStock: boolean;
  replenishmentInfo: {
    collectionId: number;
    replenishmentToken: string;
  };
  kitInfo?: IKitInfo;
  isGiftItem?: boolean;
  hasEngraving?: boolean;
  engraving?: ICartEngraving;
  isEngravable?: boolean;
  collectionId?: number;
  cartId?: number;
  discountType?: DiscountTypes | null;
  hasDiscount?: boolean;
}
