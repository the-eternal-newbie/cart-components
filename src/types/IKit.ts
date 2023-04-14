export interface IKitItem {
  type: string;
  subtype: string;
  name: string;
  shade: string;
  shadeCode: string;
  image: string | string[];
  skuId: string;
}

export interface IKitCollection {
  id: number;
  name: string;
  type: string;
  subtype: string;
}

export interface IKitInfo {
  cartId: number;
  collection: IKitCollection;
  kitItems: IKitItem[];
}

export interface ICartEngraving {
  engravedSkuId: string;
  engravingType?: number;
  templateId: number;
  templatesArray: { [key: string]: number };
  message: string[];
  selectedFont: string;
  price?: number;
  discountPercent?: number;
  discountedUnitPriceWithTax?: number;
}
