type ReturnTypeOf<T> = T extends (...args: any) => infer U ? U : any;

type A1 = ReturnTypeOf<() => string>;           // typeof = string;
type B1 = ReturnTypeOf<typeof Math.random>;     // typeof = number;
type C1 = ReturnTypeOf<typeof Array.isArray>;   // typeof = boolean;
type D1 = ReturnTypeOf<string>;     // typeof = string; even though it should get strictly a function,
									// so we need to change it accordingly.

type NewReturnTypeOf<TFunction extends (...args: any) => any> = TFunction extends (...args: any) => infer TReturnType ? TReturnType : any;
type A2 = NewReturnTypeOf<() => string>;           // typeof = string;
type B2 = NewReturnTypeOf<typeof Math.random>;     // typeof = number;
type C2 = NewReturnTypeOf<typeof Array.isArray>;   // typeof = boolean;
// type D2 = NewReturnTypeOf<string>;                 // error TS2344: Type 'string' does not satisfy the constraint '(...args: any) => any'

// it is also a built-in feature in TS 'ReturnType<>'.
type A3 = ReturnType<() => string>;           // typeof = string;
type B3 = ReturnType<typeof Math.random>;     // typeof = number;
type C3 = ReturnType<typeof Array.isArray>;   // typeof = boolean;
