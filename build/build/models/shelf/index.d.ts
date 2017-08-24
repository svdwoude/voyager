import { Query } from 'compassql/build/src/query/query';
import { ShelfFieldDef } from './spec';
import { ShelfUnitSpec } from './spec';
export * from './spec';
export declare const DEFAULT_SHELF: Readonly<Shelf>;
export declare type ShelfGroupBy = 'auto' | 'field' | 'fieldTransform' | 'encoding';
export declare const SHELF_GROUP_BYS: ShelfGroupBy[];
export declare function isShelfGroupBy(s: any): s is ShelfGroupBy;
export interface Shelf {
    spec: ShelfUnitSpec;
    groupBy: ShelfGroupBy;
    autoAddCount: boolean;
}
export declare const DEFAULT_ORDER_BY: string[];
export declare const DEFAULT_CHOOSE_BY: string[];
export declare function toQuery(shelf: Shelf): Query;
export declare function getDefaultGroupBy(args: {
    hasWildcardField: boolean;
    hasWildcardFn: boolean;
}): "field" | "fieldTransform" | "encoding";
export declare function autoAddFieldQuery(shelf: ShelfUnitSpec, fieldDef: ShelfFieldDef): Query;
