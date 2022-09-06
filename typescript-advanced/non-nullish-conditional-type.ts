type NonNullish<T> = T extends null | undefined ? never : T;

type A = NonNullish<string>;                    // typeof = string;
type B = NonNullish<string | null>;             // typeof = string;
type C = NonNullish<string | null | undefined>; // typeof = string;
type D = NonNullish<null>;                      // typeof = never;
type E = NonNullish<null | number>;             // typeof = number;
type F = NonNullish<null | undefined>;          // typeof = never;
type G = NonNullish<undefined>;                 // typeof = never;

// It is so needed in typescript applications that it was built-in as NonNullable type:
type NoNullPlease = NonNullable<boolean | null | string | undefined | number>; // typeof = boolean | string | number;

// ******************** Practical example ******************** //
type EmailRecipient = string | string[] | null | undefined;

type NonNullableEmailRecipient = NonNullable<EmailRecipient>;