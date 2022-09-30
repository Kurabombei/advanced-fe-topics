type Dimension = "block" | "inline";
type MarginProperty = `margin-${Dimension}`;
/** generates "margin-block" | "margin-inline"; **/

type Direction = "start" | "end";
type MarginPropertyWithDirection = `margin-${Dimension}-${Direction}`;
/**  generates "margin-block-start" | "margin-block-end" | "margin-inline-start" | "margin-inline-end"  **/

type MarginUnit = "px" | "vw" | "vh";
type MarginValue = `${number}${MarginUnit}`; // `${number}px` | `${number}vw` | `${number}vh`
type MarginDeclaration = [MarginPropertyWithDirection, MarginValue];

const margin: MarginDeclaration = ["margin-block-start", "16px"];