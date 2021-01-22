/* eslint-disable */

/**
 *  - Optional Chaining
 */
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

console.log(x.user.address?.city);

/*
 * (2) Nullish Coalescing
 */
class Foo {
  #name: any; // ? truly private new in ts 3.8
  constructor(rawName?: string) {
    this.#name = rawName ?? '(no name)';
  }
  log() {
    console.log(this.#name);
  }
}

const f = new Foo('nasim');
console.log(f.log());

/*
 * (3) Tuple improvements (array naming)
 */
type Bar<T extends any[]> = [boolean, ...T, boolean];

type Address = [streetNumber: number, city: string, postal: number];

function showAddress(...address: Address) {}
showAddress(3, 'dhaka', 3);

/*
 * (4) Tuple improvements
 */
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

const val: JSONValue = {
  name: 'nasim',
  age: 34,
  married: false,
  address: {
    street: 'boom bbom',
  },
};

/*
 * (5) ts-expect-error triggers error if no error
 */
// @ts-expect-error
const num: number = 'HEELO';
// @ts-ignore
const num: number = 'HEELO';

/*
 * (6) Error handling with unknown
 */
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error))
    throw new Error(`Not an error: ${err}`);
}
function somethingRisky() {}
try {
  somethingRisky();
} catch (err: unknown) {
  assertIsError(err);
  console.log(err);
}

/*
 * (7) Import Only Type
 */

import type { useAsyncDataEffect } from '../src/utils/api';
