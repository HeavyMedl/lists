# [ l [ i [ s ] t ] s ] -- ***pending release***

Lists is a library of higher-order functions for working with arrays and strings. The library was inspired  by Haskell's Data.List module by the powerful people over at [The University of Glasgow](http://www.gla.ac.uk/). You can view the original source [here](https://hackage.haskell.org/package/base-4.7.0.0/docs/src/Data-List.html). You could then scroll through each function closely and see a purposefully similar correlation between the Haskell implementation and [this](www.google.com) implementation.

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

* 1. [`append`](#append) (arr1|str, arr2|str|num) -> [x]|str
* 2. [`head`](#head) (arr|str) -> x
* 3. [`last`](#last) (arr|str) -> x
* 4. [`init`](#init) (arr|str) -> [x]
* 5. [`tail`](#tail) (arr|str) -> [x]
* 6. [`nil`](#nil) (arr|str) -> boolean

-----

**List Transformations**

* 7. [`map`](#map) ([x], f) -> [x]
* 8. [`rev`](#rev) ([x]) -> [x]
* 9. [`intersperse`](#intersperse) (x,[x]) -> arr|str
* 10. [`intercalate`](#intercalate) ([x],[[x]]) -> [x]
* 11. [`transpose`](#transpose) ([[x]]) -> [[x]]
* 12. [`subsequences`](#subsequences) ([x]) -> [[x]]
* 13. [`permutations`](#permutations) ([x]|str) -> [[x]]|[str]

-----

**Reducing Lists (folds)**

* 14. [`foldl`](#foldl) (x,[x]|str,f) -> x
* 15. [`foldl1`](#foldl1) ([x]|str,f) -> x
* 16. [`foldr`](#foldr) (x,[x]|str,f) -> x
* 17. [`foldr1`](#foldr1) ([x]|str,f) -> x
* 18. [`flatten`](#flatten) || [`concat`](#flatten) ([[x]]|[str]) -> [x]|str
* 19. [`concatMap`](#concatMap) ([x]|str,f) -> [x]|str
* 20. [`and`](#and) ([boolean]) -> boolean
* 21. [`or`](#or) ([boolean]) -> boolean
* 22. [`any`](#any) ([x]|str,f) -> boolean
* 23. [`all`](#all) ([x]|str,f) -> boolean
* 24. [`sum`](#sum) ([num]) -> num
* 25. [`product`](#product) ([num]) -> num
* 26. [`maximum`](#maximum) ([num]) -> num
* 27. [`minimum`](#minimum) ([num]) -> num
* 28. [`maxList`](#maxList) ([[x]]) -> [x]
* 29. [`minList`](#minList) ([[x]]) -> [x]

-----

**Building Lists**

* 30. [`scanl`](#scanl) :: (b -> a -> b) -> b -> [a] -> [b]
* 31. scanr :: (a -> b -> b) -> b -> [a] -> [b]
* 32. mapAccumL :: (acc -> x -> (acc,y)) -> acc -> [x] -> (acc, [y])
* 33. iterate :: (a -> a) -> a -> [a]
* 34. replicate :: Int -> a -> [a]
* 35. cycle :: [a] -> [a]
* 36. unfold || unfoldr :: (b -> Maybe (a, b)) -> b -> [a]

**Sublists**

* 37. take :: Int -> [a] -> [a]
* 38. drop :: Int -> [a] -> [a]
* 39. splitAt :: Int -> [a] -> ([a], [a])
* 40. takeWhile :: (a -> Bool) -> [a] -> [a]
* 41. dropWhile :: (a -> Bool) -> [a] -> [a]
* 42. span :: (a -> Bool) -> [a] -> ([a], [a])
* 43. break :: (a -> Bool) -> [a] -> ([a], [a])
* 44. stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
* 45. group :: Eq a => [a] -> [[a]]
* 46. inits :: [a] -> [[a]]
* 47. tails :: [a] -> [[a]]
* 48. isPrefixOf :: Eq a => [a] -> [a] -> Bool
* 49. isSuffixOf :: Eq a => [a] -> [a] -> Bool
* 50. isInfixOf :: Eq a => [a] -> [a] -> Bool

**Searching Lists**

* 51. elem :: Eq a => a -> [a] -> Bool
* 52. notElem :: Eq a => a -> [a] -> Bool
* 53. lookup :: Eq a => a -> [(a, b)] -> Maybe b
* 54. find :: (a -> Bool) -> [a] -> Maybe a
* 55. filter :: (a -> Bool) -> [a] -> [a]
* 56. partition :: (a -> Bool) -> [a] -> ([a], [a])

**Indexing Lists**

* 57. bang :: [a] -> Int -> a
* 58. elemIndex :: Eq a => a -> [a] -> Maybe Int
* 59. elemIndices :: Eq a => a -> [a] -> [Int]
* 60. findIndex :: (a -> Bool) -> [a] -> Maybe Int
* 61. findIndices :: (a -> Bool) -> [a] -> [Int]

**Zipping and Unzipping Lists**

* 62. zip || unzip :: [[a],[b],..,[n]] -> [[a,b,..,n]]
* 63. zipWith :: (a -> b -> c) -> [[a],[b],..,[n]] -> [c,..,n]

**Special Lists**

* 64. lines :: String -> [String]
* 65. words :: String -> [String]
* 66. unlines :: [String] -> String
* 67. unwords :: [String] -> String
* 68. nub :: Eq a => [a] -> [a]
* 69. delete :: Eq a => a -> [a] -> [a]
* 70. difference || diff :: Eq a => [a] -> [a] -> [a]
* 71. union :: Eq a => [a] -> [a] -> [a]
* 72. intersect :: Eq a => [a] -> [a] -> [a]
* 73. sort :: Ord a => [a] -> [a]
* 74. insert :: Ord a => a -> [a] -> [a]

**Generalized Functions**

* 75. nubBy :: (a -> a -> Bool) -> [a] -> [a]
* 76. deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
* 77. deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
* 78. unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
* 79. intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
* 80. groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
* 81. sortBy :: (a -> a -> Ordering) -> [a] -> [a]
* 82. insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
* 83. maximumBy :: (a -> a -> Ordering) -> [a] -> a
* 84. minimumBy :: (a -> a -> Ordering) -> [a] -> a

**Extra Functional Utilities**

* 85. genericExcludeChar
* 86. forEach || each
* 87. keys
* 88. enumeration || enum
* 89. composeL || pipe
* 90. composeR || sequence
* 91. partial || part
* 92. flip
* 93. compare
* 94. GT,LT,EQ
* 95. bubbleSort
* 96. mergeSort

------
<a name='append'/>
###append (arr1|str, arr2|str|num) -> [x]|str
------
**Description**: A prefix-style `Array.prototype.concat` wrapper.

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
###scanl ([[x]]) -> [x]
------
**Description**: Array of variables with the minimum length returned from an Array of Arrays of variables.

**Signature Definition**: Give arg 1 an Array of Arrays of variables; Get an Array of variables.

**Example Usage**:

```js
lists.minList([[],[1]]) /* [] */
lists.minList([[1,2],[3]]) /* [3] */
```
------
