const LOCATION = [0, 0]; // type number[]
const LOCATION_READONLY: readonly [number, number] = [0, 0]; // type readonly [number, number]
const LOCATION_ASSERTED = [0, 0] as const; // type readonly [0, 0]

// LOCATION_ASSERTED[0] = 1; error

// good usage for specific assertion which would help
const blockchainChainIDsNames = [
	1, "Ethereum Mainnet",
	42, "Ethereum Kovan Testnetwork",
	80001, "Ethereum Polygon Testnetwork",
	51, "Ethereum TEST1",
	52, "Ethereum TEST2",
	53, "Ethereum TEST3",
] as const;

/**
 * Without assertion 'as const' the type is:
 * const blockchainChainIDsNames: (string | number)[]
 * With assertion 'as const' it is:
 *
 * const blockchainChainIDsNames: readonly [1, "Ethereum Mainnet", 42, "Ethereum Kovan Testnetwork", 80001, "Ethereum Polygon Testnetwork", 51, "Ethereum TEST1", 52, "Ethereum TEST2", 53, ...]
 * **/