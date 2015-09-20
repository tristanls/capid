# capid

_Stability: 3 - [Stable](https://github.com/tristanls/stability-index#stability-3---stable)_

Capability Unique Identifier generator.

## Contributors

[@tristanls](https://github.com/tristanls)

## Usage

```javascript
var capid = require('capid');
var id = capid(); // returns Buffer
```

## Overview

Given `N` number of possible identifiers and `n` random choices of identifiers, the expected number of choosing the same identifier at random is given by the formula `n * (1 - (1 - 1/N)^(n-1))`.

Let `N = 2^336` (42 bytes).

Let `n = 1e48` (`1e48 ~= 2^159.45`) id's created. (for comparison: `4e20` is the number of milliseconds since the beginning of the Universe (13.8 billion years); `1e41` (`~= 2^136`) is the number of events you'd get if every millisecond since the beginning of the Universe generated `4e20` events).

The expected number of randomly assigning the same identifier for `n = 1e48` and `N = 2^336` is `0.00000714`.
The expected number of randomly assigning the same identifier is `1` when `n = 2^168`, or more generally, when `N = n^2`.

This gives us guidance that we want `N` number of possible identifiers to be greater than `n^2` where `n` is the number of identifiers chosen. Each additional bit of address space beyond the `n^2` requirement halves the expected number of randomly assigning the same identifier.

## Sources

* http://math.stackexchange.com/a/35798
* [N = 2^336, n = 1e48](http://www.wolframalpha.com/input/?i=1e48+%281+-+%281+-+1%2F%282%5E336%29%29%5E%28%281e48%29-1%29%29)
