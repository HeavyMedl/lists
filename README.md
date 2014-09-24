# [ l [ i [ s ] t ] s ] -- ***pending release***

Lists is a library of JavaScript higher-order functions for working with arrays and strings. The library was inspired  by Haskell's Data.List module by the powerful people over at [The University of Glasgow](http://www.gla.ac.uk/). You can view the original source [here](https://hackage.haskell.org/package/base-4.7.0.0/docs/src/Data-List.html). You could then scroll through each function closely and see a purposefully similar correlation between the Haskell implementation and [this](www.google.com) implementation.

Pass functions to functions to functions to solve complex problems. Most of the functions featured in Lists produce new arrays, to reinforce the paradigm of stateless programming, which means "retaining no information about previous events".

**Disclaimer**: Almost all of these functions are naive recursive definitions. The idea behind this library is to maximize problem-solving expressivity, that is, this library provides an alternative toolbox by which to solve computational problems. This library should be sufficient for most projects but I recommend using UnderscoreJS for problems that require ~1 million iterations until ListsJS provides iterative definitions of its functions.

-----
##Install

-----
##Components

-----
#Contents

Legend - **arr | []** : Array, **obj | {}** : Object, **str** : String, **num** : Number, **f** : Function, **x** : variable;

A{ **1.** } B{ **tail** } C{ **(arr|str) -> [x]** }
* A. Function number
* B. Function name
* C. Pseudo type signature
 * Argument options (arr|str): tail takes an Array or a String
 * (arr|str) -> [x] : tail produces an array of variables ([x])

map ([x], f) -> [x]
* map takes an array of variables and a function and produces an array of variables

-----

**Basic Functions**

* 1. [`append`](#append) - (arr1|str, arr2|str|num) -> [x]|str
* 2. [`head`](#head) - (arr|str) -> x
* 3. [`last`](#last) - (arr|str) -> x
* 4. [`init`](#init) - (arr|str) -> [x]
* 5. [`tail`](#tail) - (arr|str) -> [x]
* 6. [`nil`](#nil) - (arr|str) -> boolean

-----

**List Transformations**

* 7. [`map`](#map) - ([x], f) -> [x]
* 8. [`rev`](#rev) - ([x]) -> [x]
* 9. [`intersperse`](#intersperse) - (x,[x]) -> arr|str
* 10. [`intercalate`](#intercalate) - ([x],[[x]]) -> [x]
* 11. [`transpose`](#transpose) - ([[x]]) -> [[x]]
* 12. [`subsequences`](#subsequences) - ([x]) -> [[x]]
* 13. [`permutations`](#permutations) - ([x]|str) -> [[x]]|[str]

-----

**Reducing Lists (folds)**

* 14. [`foldl`](#foldl) - (x,[x]|str,f) -> x
* 15. [`foldl1`](#foldl1) - ([x]|str,f) -> x
* 16. [`foldr`](#foldr) - (x,[x]|str,f) -> x
* 17. [`foldr1`](#foldr1) - ([x]|str,f) -> x
* 18. [`flatten`](#flatten) || [`concat`](#flatten) - ([[x]]|[str]) -> [x]|str
* 19. [`concatMap`](#concatMap) - ([x]|str,f) -> [x]|str
* 20. [`and`](#and) - ([boolean]) -> boolean
* 21. [`or`](#or) - ([boolean]) -> boolean
* 22. [`any`](#any) - ([x]|str,f) -> boolean
* 23. [`all`](#all) - ([x]|str,f) -> boolean
* 24. [`sum`](#sum) - ([num]) -> num
* 25. [`product`](#product) - ([num]) -> num
* 26. [`maximum`](#maximum) - ([num]) -> num
* 27. [`minimum`](#minimum) - ([num]) -> num
* 28. [`maxList`](#maxList) - ([[x]]) -> [x]
* 29. [`minList`](#minList) - ([[x]]) -> [x]

-----

**Building Lists**

* 30. [`scanl`](#scanl) - (x,[x]|str,f) -> [x]
* 31. [`scanr`](#scanr) - (x,[x]|str,f) -> [x]
* 32. [`mapAccumL`](#mapAccumL) - (x,[x]|str,f) -> [x, [x]]
* 33. [`mapAccumR`](#mapAccumR) - (x,[x]|str,f) -> [x, [x]]
* 34. [`iterate`](#iterate) - (x,num,f) -> [x] 
* 35. [`replicate`](#replicate) - (x,num) -> [x]
* 36. [`cycle`](#cycle) - ([x]|str,num) -> [x]|str
* 37. [`unfold`](#unfold) - (f,f,f,x) -> [x]|str

**Sublists**

* 38. [`take`](#take) - (num,[x]|str) -> [x]
* 39. [`drop`](#drop) - (num,[x]|str) -> [x]
* 40. [`splitAt`](#splitAt) - (num,[x]|str) -> [[x],[x]]
* 41. [`takeWhile`](#takeWhile) - (f,[x]|str) -> [x]
* 42. [`dropWhile`](#dropWhile) - (f,[x]|str) -> [x]
* 43. span - (a -> Bool) -> [a] -> ([a], [a])
* 44. break - (a -> Bool) -> [a] -> ([a], [a])
* 45. stripPrefix - Eq a => [a] -> [a] -> Maybe [a]
* 46. group - Eq a => [a] -> [[a]]
* 47. inits - [a] -> [[a]]
* 48. tails - [a] -> [[a]]
* 49. isPrefixOf - Eq a => [a] -> [a] -> Bool
* 50. isSuffixOf - Eq a => [a] -> [a] -> Bool
* 51. isInfixOf - Eq a => [a] -> [a] -> Bool

**Searching Lists**

* 52. elem - Eq a => a -> [a] -> Bool
* 53. notElem - Eq a => a -> [a] -> Bool
* 54. lookup - Eq a => a -> [(a, b)] -> Maybe b
* 55. find - (a -> Bool) -> [a] -> Maybe a
* 56. filter - (a -> Bool) -> [a] -> [a]
* 57. partition - (a -> Bool) -> [a] -> ([a], [a])

**Indexing Lists**

* 58. bang - [a] -> Int -> a
* 59. elemIndex - Eq a => a -> [a] -> Maybe Int
* 60. elemIndices - Eq a => a -> [a] -> [Int]
* 61. findIndex - (a -> Bool) -> [a] -> Maybe Int
* 62. findIndices - (a -> Bool) -> [a] -> [Int]

**Zipping and Unzipping Lists**

* 63. zip || unzip - [[a],[b],..,[n]] -> [[a,b,..,n]]
* 64. zipWith - (a -> b -> c) -> [[a],[b],..,[n]] -> [c,..,n]

**Special Lists**

* 65. lines - String -> [String]
* 66. words - String -> [String]
* 67. unlines - [String] -> String
* 68. unwords - [String] -> String
* 69. nub - Eq a => [a] -> [a]
* 70. delete - Eq a => a -> [a] -> [a]
* 71. difference || diff - Eq a => [a] -> [a] -> [a]
* 72. union - Eq a => [a] -> [a] -> [a]
* 73. intersect - Eq a => [a] -> [a] -> [a]
* 74. sort - Ord a => [a] -> [a]
* 75. insert - Ord a => a -> [a] -> [a]

**Generalized Functions**

* 76. nubBy - (a -> a -> Bool) -> [a] -> [a]
* 77. deleteBy - (a -> a -> Bool) -> a -> [a] -> [a]
* 78. deleteFirstsBy - (a -> a -> Bool) -> [a] -> [a] -> [a]
* 79. unionBy - (a -> a -> Bool) -> [a] -> [a] -> [a]
* 80. intersectBy - (a -> a -> Bool) -> [a] -> [a] -> [a]
* 81. groupBy - (a -> a -> Bool) -> [a] -> [[a]]
* 82. sortBy - (a -> a -> Ordering) -> [a] -> [a]
* 83. insertBy - (a -> a -> Ordering) -> a -> [a] -> [a]
* 84. maximumBy - (a -> a -> Ordering) -> [a] -> a
* 85. minimumBy - (a -> a -> Ordering) -> [a] -> a

**Extra Functional Utilities**

* 86. genericExcludeChar - 
* 87. forEach || each - 
* 88. keys - 
* 89. enumeration || enum - 
* 90. composeL || pipe - 
* 91. composeR || sequence - 
* 92. partial || part - 
* 93. flip - 
* 94. compare - 
* 95. GT,LT,EQ - 
* 96. bubbleSort - 
* 97. mergeSort - 

------
<a name='append'/>
###append (arr1|str, arr2|str|num) -> [x]|str
------
**Description**: A prefix-style Array.prototype.concat wrapper.

**Signature Definition**: Give arg 1 an Array or a String; Give arg 2 an Array or a String or a Number; Get an Array of variables or String.

**Example Usage**:

```js
lists.append([1],[2]); /* [1,2] */ 
lists.append([1],2); /* [1,2] */ 
lists.append('a','b'); /* 'ab' */
```
------
<a name='head'/>
###head (arr|str) -> x
------
**Description**: Retreive the first element of an Array or a String.

**Signature Definition**: Give arg 1 an Array or a String; Get a variable.

**Example Usage**:

```js
lists.head([1,2]); /* 1 */ 
lists.head([[1,2],[3,4]]); /* [1,2]  */ 
lists.head('ab'); /* 'a' */
```
------
<a name='last'/>
###last (arr|str) -> x
------
**Description**: Retreive the last element of an Array or a String.

**Signature Definition**: Give arg 1 an Array or a String; Get a variable.

**Example Usage**:

```js
lists.last([1,2]); /* 2 */ 
lists.last([[1,2],[3,4]]); /* [3,4] */ 
lists.last('ab'); /* 'b' */
```
------
<a name='init'/>
###init (arr|str) -> [x]
------
**Description**: Retreive all elements except the last of an Array or a String.

**Signature Definition**: Give arg 1 an Array or a String; Get an Array of variables.

**Example Usage**:

```js
lists.init([1,2,3]); /* [1,2] */ 
lists.init([[1,2],[3,4],[5,6]]); /* [[1,2],[3,4]]  */ 
lists.init('abc'); /* ['a','b'] */
```
------
<a name='tail'/>
###tail (arr|str) -> [x]
------
**Description**: Retreive all elements except the first of an Array or a String.

**Signature Definition**: Give arg 1 an Array or a String; Get an Array of variables.

**Example Usage**:

```js
lists.tail([1,2,3]); /* [2,3] */ 
lists.tail([[1,2],[3,4],[5,6]]); /* [[3,4],[5,6]]  */ 
lists.tail('abc'); /* ['b','c'] */
```
------
<a name='nil'/>
###nil (arr|str) -> boolean
------
**Description**: Test if an Array or String is empty.

**Signature Definition**: Give arg 1 an Array or a String; Get a boolean.

**Example Usage**:

```js
lists.nil(null); /* true */ 
lists.nil([]); /* true */ 
lists.nil(''); /* true */ 
lists.nil('a'); /* false */ 
lists.nil([1]); /* false */
```
------
<a name='map'/>
###map ([x], f) -> [x]
------
**Description**: Array returned by applying f to each element of [x]

**Signature Definition**: Give arg 1 an Array or a String; Give arg 2 a Function; Get an Array of variables.

**Example Usage**:

```js
lists.map([1,2,3], function(x) { return x*2 }); /* [2,4,6] */
lists.map('abc', function(str) { return str.toUpperCase() }); /* ["A","B","C"] */
lists.map([{'S': 1}, {'u': 2}, {'p': 3}], function(obj) {
  return lists.flatten(lists.keys(obj))
}); /* ["S", "u", "p"] */
```
------
<a name='rev'/>
###rev ([x]) -> [x]
------
**Description**: Array returned by reversing the order of each element.

**Signature Definition**: Give arg 1 an Array or a String; Get an Array of variables.

**Example Usage**:

```js
lists.rev([1,2,3]); /* [3,2,1] */
lists.rev('abc'); /* ['c','b','a'] */
lists.rev([[2],[3]]) /* [[3],[2]] */
```
------
<a name='intersperse'/>
###intersperse (x,[x]) -> arr|str
------
**Description**: Array returned by interspersing a given separator between elements of a given Array.

**Signature Definition**: Give arg 1 a variable; Give arg 2 an Array of variables; Get an Array of variables.

**Example Usage**:

```js
lists.intersperse(1,[5,5,5]); /* [5,1,5,1,5] */
lists.intersperse([1,2],[[6],[6]]); /* [[6],[1,2],[6]] */
lists.intersperse('b','ac'); /* 'abc' */
lists.intersperse({b:2},[{a:1},{b:3}]); /* [{a:1},{b:2},{c:3}] */
```
------
<a name='intercalate'/>
###intercalate ([x],[[x]]) -> [x]
------
**Description**: Array returned by flattening the result of interspersing an Array of varaibles into an Array of Arrays.

**Signature Definition**: Give arg 1 an Array of variables; Give arg 2 an Array of Arrays of variables; Get an Array of variables.

**Example Usage**:

```js
lists.intercalate([1],[[5],[5],[5]]); /* = lists.flatten(lists.intersperse([1],[[5],[5],[5]])) // [5,1,5,1,5] */
lists.intercalate(["abc"],[["efg"],["qrs"]]) /* ["efg", "abc", "qrs"] */
lists.intercalate([{a:1}],[[{b:1}],[{c:2}]]); /* [{b:1},{a:1},{c:2}] */
```
------
<a name='transpose'/>
###transpose ([[x]]) -> [[x]]
------
**Description**: Array returned by transposing rows and columns of given arguments.

**Signature Definition**: Give arg 1 an Array of Arrays of variables; Get an Array of Arrays of variables.

**Example Usage**:

```js
lists.transpose([[1,2,4],[3,4,4]]) /* [[1,3],[2,4],[4,4]] */
lists.transpose([["a","b","c"],["a","b","c"]]) /* [["a","a"],["b","b"],["c","c"]] */
```
------
<a name='subsequences'/>
###subsequences ([x]) -> [[x]]
------
**Description**: Array of Arrays of all subsequences of a given arguement.

**Signature Definition**: Give arg 1 an Array of variables; Get an Array of Arrays of variables.

**Example Usage**:

```js
lists.subsequences('ab') /* [[],['a'],['b'],['ab']] */
lists.subsequences([1,2,3]) /* [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */
```
------
<a name='permutations'/>
###permutations ([x]|str) -> [[x]]|[str]
------
**Description**: Array of Arrays or Array of Strings returned by getting all permutations of a given arguement.

**Signature Definition**: Give arg 1 an Array of variables or a String; Get an Array of Arrays of variables or an Array of Strings respectively.

**Example Usage**:

```js
lists.permutations('abc') /* ["abc","acb","bac","bca","cab","cba"] */
lists.permutations([1,2,3]) /* [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] */
```
------
<a name='foldl'/>
###foldl (x,[x]|str,f) -> x
------
**Description**: Variable returned reducing left to right by applying a binary operator function (f) on a starting variable (x), known as the accumulator, and an Array of variables or String  

**Signature Definition**: Give arg 1 a starting variable (usually a left identity of the binary operator); Give arg 2 an Array of variables or a String; Give arg 3 a function (binary operator); Get a variable.

**Example Usage**:

```js
reverse = lists.foldl('','abc',function(x,y){ return y.concat(x); }); /* "cba" */
sum = lists.foldl(0,[1,2,3],function(x,y){ return x+y; }); /* 6 */
lists.foldl([], [[1,2],[3,4]], function(x,y) {return x.concat(y) }) /* [1,2,3,4] */
```
------
<a name='foldl1'/>
###foldl1 ([x]|str,f) -> x
------
**Description**: Variant of foldl without a starting variable (The accumulator begins with the 0th index of the passed Array or String). Use with non-empty Arrays or Strings.

**Signature Definition**:  Give arg 1 an Array of variables or a String; Give arg 2 a function (binary operator); Get a variable.

**Example Usage**:

```js
lists.foldl1('abc',function(x,y){ return x.concat(y).toUpperCase() }) /* "ABC" */
lists.foldl1([1,2,3],function(x,y){ return x+y }) /* 6 */
```
------
<a name='foldr'/>
###foldr (x,[x]|str,f) -> x
------
**Description**: Variable returned reducing right to left by applying a binary operator function (f) on a starting variable (x), known as the accumulator, and an Array of variables or String  

**Signature Definition**: Give arg 1 a starting variable (usually a right identity of the binary operator); Give arg 2 an Array of variables or a String; Give arg 3 a function (binary operator); Get a variable.

**Example Usage**:

```js
lists.foldr(0,[1,2,3,4],function(x,y){ return x-y; }) /* -2 */
lists.foldr([],[[1,2],[3,4],[5,6]],function(x,y){ 
  return lists.rev(x).concat(y); 
}); /* [4,3,1,2,5,6] */
```
------
<a name='foldr1'/>
###foldr1 ([x]|str,f) -> x
------
**Description**: Variant of foldr without a starting variable (The accumulator begins with the 0th index of the passed Array or String). Use with non-empty Arrays or Strings.

**Signature Definition**: Give arg 1 an Array of variables or a String; Give arg 2 a function (binary operator); Get a variable.

**Example Usage**:

```js
lists.foldr1([1,2,3],function(x,y){ return x - y }) /* 3 */
lists.foldr1('aabbcc',function(x,y){ return x=='a'? x=y : x.concat(y)}) /* "bbcc" */
```
------
<a name='flatten'/>
###flatten || concat ([[x]]|[str]) -> [x]|str
------
**Description**: Flatten an Array of Arrays or an Array of String into an Array of variables or String respectively.

**Signature Definition**: Give arg 1 an Array of Arrays of variables or a String; Get an Array of variables or a String

**Example Usage**:

```js
lists.flatten(['abc']); /* 'abc' */
lists.flatten([[1,2],[3,4]]) /* [1,2,3,4] */
```
------
<a name='concatMap'/>
###concatMap ([x]|str,f) -> [x]|str
------
**Description**: Array of variables or String returned by mapping a function over an Array of variables or String and flattening the result

**Signature Definition**: Give arg 1 an Array of variables or a String; Give arg 2 a function that produces an Array of variables or String; Get an Array of variables or a String

**Example Usage**:

```js
lists.concatMap(['bang','bang'], function(x){ return x+'!'}) /* "bang!bang!" */
lists.concatMap([1,2,3],function(x){ return [[x*2,x/2]] }) /* [[2,0.5],[4,1],[6,1.5]] */
lists.concatMap([{a:1},{b:2}], function(x){
  x.prop = 'hi';  
  return [x]
}); /* [{a:1,prop:"hi"},{b:2,prop:"hi"}]*/
```
------
<a name='and'/>
###and ([boolean]) -> boolean
------
**Description**: Boolean returned by the conjunction of an Array of booleans. True if all booleans are true. False if one or more booleans is false.

**Signature Definition**: Give arg 1 an Array of booleans. Get a boolean.

**Example Usage**:

```js
lists.and([5>1,5>2,5>3]) /* true */
lists.and([5>1,false,5>3]) /* false */
```
------
<a name='or'/>
###or ([boolean]) -> boolean
------
**Description**: Boolean returned by the disjunction of an Array of booleans. True if at least one boolean is true. False if all booleans are false.

**Signature Definition**: Give arg 1 an Array of booleans. Get a boolean.

**Example Usage**:

```js
lists.or([5<1,5<2,5>3]) /* true */
lists.or([5<1,5<2,5<3]) /* false */
```
------
<a name='any'/>
###any ([x]|str,f) -> boolean
------
**Description**: Boolean returned by applying a predicate function to each element in an Array of variables or String. True if at least one f(x) is true. False if all f(x) are false.

**Signature Definition**: Give arg 1 an Array of variables or String; Give arg 2 a predicate function to be applied to each element of arg 1; Get a boolean.

**Example Usage**:

```js
lists.any([1,2,3],function(x) { return x < .5}) /* false */
lists.any('abc',function(x) { return x == 'b'}) /* true */
```
------
<a name='all'/>
###all ([x]|str,f) -> boolean
------
**Description**: Boolean returned by applying a predicate function to each element in an Array of variables or String. True if all f(x) are true. False if any f(x) are false.

**Signature Definition**: Give arg 1 an Array of variables or String; Give arg 2 a predicate function to be applied to each element of arg 1; Get a boolean.

**Example Usage**:

```js
lists.all('abc', function(x){ return x==x.toUpperCase() }) /* false */
lists.all([2,4], function(x) { return x > 3 }) /* false */
lists.all([2,4], function(x) { return x%2==0 }) /* true */
```
------
<a name='sum'/>
###sum ([num]) -> num
------
**Description**: Number returned by summing the numbers of an Array together.

**Signature Definition**: Give arg 1 an Array of Numbers; Get a number.

**Example Usage**:

```js
lists.sum([2,4,6]) /* 12 */
lists.sum([.2,.4,.6]) /* 1.2000000000000002 */
```
------
<a name='product'/>
###product ([num]) -> num
------
**Description**: Number returned by computing the product of the numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers; Get a number.

**Example Usage**:

```js
lists.product([2,4,6]) /* 48 */
lists.product([.2,.4,.6]) /* 0.04800000000000001 */
```
------
<a name='maximum'/>
###maximum ([num]) -> num
------
**Description**: Maximum number returned from numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers; Get a number.

**Example Usage**:

```js
lists.maximum([2,4,6]) /* 6 */
lists.maximum([.2,.4,.6]) /* .6 */
```
------
<a name='minimum'/>
###minimum ([num]) -> num
------
**Description**: Minimum number returned from numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers; Get a number.

**Example Usage**:

```js
lists.minimum([2,4,6]) /* 2 */
lists.minimum([.2,.4,.6]) /* .2 */
```
------
<a name='maxList'/>
###maxList ([[x]]) -> [x]
------
**Description**: Array of variables with the maximum length returned from an Array of Arrays of variables.

**Signature Definition**: Give arg 1 an Array of Arrays of variables; Get an Array of variables.

**Example Usage**:

```js
lists.maxList([[1],[2,3]]) /* [2,3] */
lists.maxList([[1,2],[3]]) /* [1,2] */
```
------
<a name='minList'/>
###minList ([[x]]) -> [x]
------
**Description**: Array of variables with the minimum length returned from an Array of Arrays of variables.

**Signature Definition**: Give arg 1 an Array of Arrays of variables; Get an Array of variables.

**Example Usage**:

```js
lists.minList([[],[1]]) /* [] */
lists.minList([[1,2],[3]]) /* [3] */
```
------
<a name='scanl'/>
###scanl (x,[x]|str,f) -> [x]
------
**Description**: Array of variables returned building left to right, starting with the accumulator (x) by applying a binary operator function (f) on a starting variable (x) and an Array of variables or String 

**Signature Definition**: Give arg 1 a starting variable; Give arg 2 an Array of variables or a String; Give arg 3 a function (binary operator); Get an Array of variables.

**Example Usage**:

```js
lists.scanl('.','abc',function(x,y){return x + y}) /* [".",".a",".ab",".abc"] */
lists.scanl(0,[1,2,3],function(x,y){return x + y}) /* [0,1,3,6] */
```
------
<a name='scanr'/>
###scanr (x,[x]|str,f) -> [x]
------
**Description**: Array of variables returned building right to left, starting with the accumulator (x) by applying a binary operator function (f) on a starting variable (x) and an Array of variables or String 

**Signature Definition**: Give arg 1 a starting variable; Give arg 2 an Array of variables or a String; Give arg 3 a function (binary operator); Get an Array of variables.

**Example Usage**:

```js
lists.scanr('.','abc',function(x,y){return x + y}) /* ["abc.","bc.","c.","."] */
lists.scanr(0,[1,2,3],function(x,y){return x + y}) /* [6,5,3,0] */
```
------
<a name='mapAccumL'/>
###mapAccumL (x,[x]|str,f) -> [x, [x]]
------
**Description**: Builds an Array containing a accumulator (x) and the result of applying f to the supplied accumulator and each element of the supplied Array from left to right.

**Signature Definition**: Give arg 1 a starting variable (accumulator); Give arg 2 an Array of variables or a String; Give arg 3 a function; Get an Array of variable followed by Array of variables.

**Example Usage**:

```js
lists.mapAccumL(5, [2,4,8], function(x,y){ return [x+y,x*y]}) /* [19, [10,28,88]]*/
lists.mapAccumL(5, [2,4,8], function(x,y){ return [y,y]}) /* [8, [2,4,8]] */
lists.mapAccumL(5, [5,5,5], function(x,y){ return [x,x]}) /* [5, [5,5,5]] */
```
------
<a name='mapAccumR'/>
###mapAccumR (x,[x]|str,f) -> [x, [x]]
------
**Description**: Builds an Array containing a accumulator (x) and the result of applying f to the supplied accumulator and each element of the supplied Array from right to left.

**Signature Definition**: Give arg 1 a starting variable (accumulator); Give arg 2 an Array of variables or a String; Give arg 3 a function; Get an Array of variable followed by Array of variables.

**Example Usage**:

```js
lists.mapAccumR(5, [2,4,8], function(x,y){ return [x+y,x*y]}) /* [19, [34,52,40]]*/
lists.mapAccumR(5, [2,4,8], function(x,y){ return [y,y]}) /* [2, [2,4,8]] */
lists.mapAccumR(5, [5,5,5], function(x,y){ return [x,x]}) /* [5, [5,5,5]] */
```
------
<a name='iterate'/>
###iterate (x,num,f) -> [x]
------
**Description**: Builds an Array containing the successive application of f to the previous result of f(x) until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 a variable; Give arg 2 a number; Give arg 3 a function; Get an Array of variables.

**Example Usage**:

```js
lists.iterate('a',3,function(ch){return ch+'b'}) /* ["a","ab","abb"] */
lists.iterate([1,2],3,function(xs){return lists.intersperse(6,xs)}) /* [[1,2],[1,6,2],[1,6,6,6,2]] */
lists.iterate(2,4,function(x){ return x*x }) /* [2,4,16,256] */
```
------
<a name='replicate'/>
###replicate (x,num) -> [x]
------
**Description**: Builds an Array containing replications of x until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 a variable; Give arg 2 a number; Get an Array of variables.

**Example Usage**:

```js
lists.replicate(5,5) /* [5,5,5,5,5] */
lists.replicate([1,2],2) /* [[1,2],[1,2]] */
lists.replicate({a:1},2) /* [{a:1},{a:2}] */
```
------
<a name='cycle'/>
###cycle ([x]|str,num) -> [x]|str
------
**Description**: Builds an Array containing replications of flattened [x]|String until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 an Array of variables; Give arg 2 a number; Get an Array of variables.

**Example Usage**:

```js
lists.cycle('abc',3) /* "abcabcabc" */
lists.cycle([1,2],2) /* [1,2,1,2] */
```
------
<a name='unfold'/>
###unfold (f,f,f,x) -> [x]|str
------
**Description**: Builds an Array from a seed value. Arg 1 is the predicate function. If the predicate fails, return an empty Array, otherwise concatenate the result of Arg 2 (f) applied to Arg 4 (x) to the recursive call of unfold calling Arg 3 (f) to Arg 4 (x). This is a corecursive anamorphism.

**Signature Definition**: Give arg 1 an function (predicate); Give arg 2 a function; Give arg 3 a function; Give arg 4 a variable (seed).

**Example Usage**:

```js
function chop8(xs){ 
  return l.unfold(l.nil,l.part(l.take,8,_),l.part(l.drop,8,_),xs) 
}
chop8([1,2,3,4,5,6,7,8,9]) /* [[1,2,3,4,5,6,7,8],[9]] */

function unfoldMap(xs,f) { 
  return lists.unfold(
    lists.nil, 
    lists.part(lists.pipe(f,lists.head),_), 
    lists.part(lists.tail,_), 
    xs)
}
unfoldMap([1,2],function(x){ return x * 2 }) /* [2,4] */
```
------
<a name='take'/>
###take (num,[x]|str) -> [x]
------
**Description**: Array of variables returned by taking the first n (num) elements from [x] or String.

**Signature Definition**: Give arg 1 a number; Give arg 2 an Array of variables or String; Get an Array of variables.

**Example Usage**:

```js
lists.take(2,[1,2,3]) /* [1,2] */
lists.take(2,'abc') /* ["a","b"] */
```
------
<a name='drop'/>
###drop (num,[x]|str) -> [x]
------
**Description**: Array of variables returned by dropping the first n (num) elements from [x] or String.

**Signature Definition**: Give arg 1 a number; Give arg 2 an Array of variables or String; Get an Array of variables.

**Example Usage**:

```js
lists.drop(2,[1,2,3]) /* [3] */
lists.drop(2,'abc') /* ["c"] */
```
------
<a name='splitAt'/>
###splitAt (num,[x]|str) -> [[x],[x]]
------
**Description**: Array of two Arrays returned. The first Array contains the first n elements of the supplied Array of variables or String. The second contains the rest.

**Signature Definition**: Give arg 1 a number; Give arg 2 an Array of variables or String; Get an Array of two Arrays of variables.

**Example Usage**:

```js
lists.splitAt(2,'abc') /* [['a','b'],['c']] */
lists.splitAt(2,[1,2,3]) /* [[1,2],[3]] */
```
------
<a name='takeWhile'/>
###takeWhile (f,[x]|str) -> [x]
------
**Description**: Array of variables returned by taking elements from [x]|String that satisfy a supplied predicate function until that predicate function is unsatisfied.

**Signature Definition**: Give arg 1 a function; Give arg 2 an Array of variables or String; Get an Array of variables.

**Example Usage**:

```js
lists.takeWhile([1,2,3,1], function(x){ return x < 3 }) /* [1,2] */
lists.takeWhile([1], function(x){ return x < 2 }) /* [1] */
lists.takeWhile('aabc', function(x){ return x =='a' }) /* ["a","a"] */
```
------
<a name='dropWhile'/>
###dropWhile (f,[x]|str) -> [x]
------
**Description**: Array of variables returned by dropping elements from [x]|String that satisfy a supplied predicate function until that predicate function is unsatisfied.

**Signature Definition**: <span class='sig-def'>Give arg 1 a function; Give arg 2 an Array of variables or String; Get an Array of variables.</span>

**Example Usage**:

```js
lists.dropWhile([1,2,3,4], function(x){ return x < 3 }) /* [3,4] */
lists.dropWhile([1], function(x){ return x < 2 }) /* [2] */
lists.dropWhile('aabc', function(x){ return x =='a' }) /* ["b","c"] */
```
------
