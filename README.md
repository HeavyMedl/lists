# [ l [ i [ s ] t ] s ]

**Full Version** | **[Homepage](http://kurtlocker.github.io/lists)**

Lists is a library of JavaScript higher-order functions for working with arrays and strings. The library was inspired  by Haskell's Data.List module by the powerful people over at [The University of Glasgow](http://www.gla.ac.uk/). You can view the original source [here](https://hackage.haskell.org/package/base-4.7.0.0/docs/src/Data-List.html). You could then scroll through each function closely and see a purposefully similar correlation between the Haskell implementation and [this](www.google.com) implementation.

Pass functions to functions to functions to solve complex problems. Most of the functions featured in Lists produce new arrays, to reinforce the paradigm of stateless programming.

**Disclaimer**: Almost all of these functions are naive recursive definitions. The idea behind this library is to maximize problem-solving expressivity. This library provides an alternative toolbox by which to solve problems. This library should be sufficient for most projects but remember to monitor your heap memory space in the case of excessive function calls.

-----
## Install

-----
## Components

-----
## Type Signature Legend

* **arr | []** : Array 
* **obj | {}** : Object
* **str** : String 
* **num** : Number
* **f** : Function
* **x** : Variable
* **boolean** : boolean

A{ **1.** } Function number

B{ **tail** } Function name

C{ **arr|str -> [x]** } Pseudo type signature

tail : arr|str -> [x] 
- Takes an Array of Variables or String and produces an Array of Variables ([x]).

map : [x] -> f -> [x]
- Takes an Array of Variables and a Function and produces an Array of Variables.

-----

**Basic Functions**

* [`append`](#append) : [x]|str -> [x]|str|num -> [x]|str
* [`head`](#head) : [x]|str -> x
* [`last`](#last) : [x]|str -> x
* [`init`](#init) : [x]|str -> [x]
* [`tail`](#tail) : [x]|str -> [x]
* [`nil`](#nil) : [x]|str -> boolean

-----

**List Transformations**

* [`map`](#map) : [x] -> f -> [x]
* [`rev`](#rev) : [x] -> [x]
* [`intersperse`](#intersperse) : x -> [x] -> [x]|str
* [`intercalate`](#intercalate) : [x] -> [[x]] -> [x]
* [`transpose`](#transpose) : [[x]] -> [[x]]
* [`subsequences`](#subsequences) : [x] -> [[x]]
* [`permutations`](#permutations) : [x]|str -> [[x]]|[str]

-----

**Reducing Lists (folds)**

* [`foldl`](#foldl) : x -> [x]|str -> f -> x
* [`foldl1`](#foldl1) : [x]|str -> f -> x
* [`foldr`](#foldr) : x -> [x]|str -> f -> x
* [`foldr1`](#foldr1) : [x]|str -> f -> x
* [`flatten`](#flatten) || [`concat`](#flatten) : [[x]]|[str] -> [x]|str
* [`concatMap`](#concatMap) : [x]|str -> f -> [x]|str
* [`and`](#and) : [boolean] -> boolean
* [`or`](#or) : [boolean] -> boolean
* [`any`](#any) : [x]|str -> f -> boolean
* [`all`](#all) : [x]|str -> f -> boolean
* [`sum`](#sum) : [num] -> num
* [`product`](#product) : [num] -> num
* [`maximum`](#maximum) : [num] -> num
* [`minimum`](#minimum) : [num] -> num
* [`maxList`](#maxList) : [[x]] -> [x]
* [`minList`](#minList) : [[x]] -> [x]

-----

**Building Lists**

* [`scanl`](#scanl) : x -> [x]|str -> f -> [x]
* [`scanr`](#scanr) : x -> [x]|str -> f -> [x]
* [`mapAccumL`](#mapAccumL) : x -> [x]|str -> f -> [x, [x]]
* [`mapAccumR`](#mapAccumR) : x -> [x]|str -> f -> [x, [x]]
* [`iterate`](#iterate) : x -> num -> f -> [x] 
* [`replicate`](#replicate) : x -> num -> [x]
* [`cycle`](#cycle) : [x]|str -> num -> [x]|str
* [`unfold`](#unfold) : f -> f -> f -> x -> [x]|str

-----

**Sublists**

* [`take`](#take) : num -> [x]|str -> [x]
* [`drop`](#drop) : num -> [x]|str -> [x]
* [`splitAt`](#splitAt) : num -> [x]|str -> [[x],[x]]
* [`takeWhile`](#takeWhile) : f -> [x]|str -> [x]
* [`dropWhile`](#dropWhile) : f -> [x]|str -> [x]
* [`span`](#span) : arr|str -> f -> [[x], [x]|str]
* [`break`](#break) : arr|str -> f -> [[x], [x]|str]
* [`stripPrefix`](#stripPrefix) : [num]|str -> [num]|str -> [num]|[str]
* [`group`](#group) : [num]|str -> [[num]]|[[str]]
* [`inits`](#inits) : [x] -> [[x]]
* [`tails`](#tails) : [x] -> [[x]]

-----

**Predicates**

* [`isPrefixOf`](#isPrefixOf) : [num]|str -> [num]|str -> boolean
* [`isSuffixOf`](#isSuffixOf) : [num]|str -> [num]|str -> boolean
* [`isInfixOf`](#isInfixOf) : [num]|str -> [num]|str -> boolean
* [`isSubsequenceOf`](#isSubsequenceOf) : [num]|str -> [num]|str -> boolean

-----

**Searching Lists**

* [`elem`](#elem) : num|str -> [num]|str -> boolean
* [`notElem`](#notElem) : num|str -> [num]|str -> boolean
* [`lookup`](#lookup) : num|str -> [[num|str,x]] -> boolean
* [`find`](#find) : [x] -> f -> x
* [`filter`](#filter) : [x] -> f -> [x]
* [`partition`](#partition) : [x] -> f -> [[x],[x]]

-----

**Indexing Lists**

* [`bang`](#bang) : num -> [x] -> x
* [`elemIndex`](#elemIndex) || [`indexOf`](#elemIndex) : num|str -> [num]|str -> num
* [`elemIndices`](#elemIndices) : num|str -> [num]|str -> [num]
* [`findIndex`](#findIndex) : [x] -> f -> num
* [`findIndices`](#findIndices) : [x] -> f -> [num]

-----

**Zipping and Unzipping Lists**

* [`zip`](#zip) || [`unzip`](#zip) : [[a,b,..,n],[c,d,..,n],..,n] -> [[a,c,..,n],[b,d,..,n],..,n]
* [`zipWith`](#zipWith) : [[a,b,..,n],[c,d,..,n],..,n] -> f -> [x]

-----

**Special Lists**

* lines : String -> [String]
* words : String -> [String]
* unlines : [String] -> String
* unwords : [String] -> String
* nub : Eq a => [a] -> [a]
* delete : Eq a => a -> [a] -> [a]
* difference || diff : Eq a => [a] -> [a] -> [a]
* union : Eq a => [a] -> [a] -> [a]
* intersect : Eq a => [a] -> [a] -> [a]
* sort : Ord a => [a] -> [a]
* insert : Ord a => a -> [a] -> [a]

-----

**Generalized Functions**

* nubBy : (a -> a -> Bool) -> [a] -> [a]
* deleteBy : (a -> a -> Bool) -> a -> [a] -> [a]
* deleteFirstsBy : (a -> a -> Bool) -> [a] -> [a] -> [a]
* unionBy : (a -> a -> Bool) -> [a] -> [a] -> [a]
* intersectBy : (a -> a -> Bool) -> [a] -> [a] -> [a]
* groupBy : (a -> a -> Bool) -> [a] -> [[a]]
* sortBy : (a -> a -> Ordering) -> [a] -> [a]
* insertBy : (a -> a -> Ordering) -> a -> [a] -> [a]
* maximumBy : (a -> a -> Ordering) -> [a] -> a
* minimumBy : (a -> a -> Ordering) -> [a] -> a

-----

**Extra Functional Utilities**

* genericExcludeChar : 
* forEach || each :
* keys :
* enumeration || enum : 
* composeL || pipe : 
* composeR || sequence : 
* partial || part : 
* flip : 
* compare : 
* GT,LT,EQ : 
* bubbleSort : 
* mergeSort : 

------
<a name='append'/>
### append : [x]|str -> [x]|str|num -> [x]|str
------
**Description**: A prefix-style Array.prototype.concat wrapper.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 an Array of Variables or a String or a Number. Get an Array of Variables or a String.

**Example Usage**:

```js
lists.append([1],[2]); /* [1,2] */ 
lists.append([1],2); /* [1,2] */ 
lists.append('a','b'); /* 'ab' */
```
------
<a name='head'/>
### head : [x]|str -> x
------
**Description**: Retreive the first element of an Array of Variables or a String.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get a Variable.

**Example Usage**:

```js
lists.head([1,2]); /* 1 */ 
lists.head([[1,2],[3,4]]); /* [1,2]  */ 
lists.head('ab'); /* 'a' */
```
------
<a name='last'/>
### last : [x]|str -> x
------
**Description**: Retreive the last element of an Array of Variables or a String.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get a Variable.

**Example Usage**:

```js
lists.last([1,2]); /* 2 */ 
lists.last([[1,2],[3,4]]); /* [3,4] */ 
lists.last('ab'); /* 'b' */
```
------
<a name='init'/>
### init : [x]|str -> [x]
------
**Description**: Retreive all elements except the last of an Array of Variables or a String.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.init([1,2,3]); /* [1,2] */ 
lists.init([[1,2],[3,4],[5,6]]); /* [[1,2],[3,4]]  */ 
lists.init('abc'); /* ['a','b'] */
```
------
<a name='tail'/>
### tail : [x]|str -> [x]
------
**Description**: Retreive all elements except the first of an Array of Variables or a String.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.tail([1,2,3]); /* [2,3] */ 
lists.tail([[1,2],[3,4],[5,6]]); /* [[3,4],[5,6]]  */ 
lists.tail('abc'); /* ['b','c'] */
```
------
<a name='nil'/>
### nil : [x]|str -> boolean
------
**Description**: Test if an Array of Variables or String is empty.

**Signature Definition**: Give arg 1 an Array of Variables or a String; Get a boolean.

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
### map : [x] -> f -> [x]
------
**Description**: Array of Variables returned by applying f to each element of [x].

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a Function. Get an Array of Variables.

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
### rev : [x] -> [x]
------
**Description**: Array of Variables returned by reversing the order of each element.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.rev([1,2,3]); /* [3,2,1] */
lists.rev('abc'); /* ['c','b','a'] */
lists.rev([[2],[3]]); /* [[3],[2]] */
```
------
<a name='intersperse'/>
### intersperse : x -> [x] -> [x]|str
------
**Description**: Array of Variables or a String returned by interspersing a given separator between elements of a given Array.

**Signature Definition**: Give arg 1 a Variable. Give arg 2 an Array of Variables. Get an Array of Variables or a String.

**Example Usage**:

```js
lists.intersperse(1,[5,5,5]); /* [5,1,5,1,5] */
lists.intersperse([1,2],[[6],[6]]); /* [[6],[1,2],[6]] */
lists.intersperse('b','ac'); /* 'abc' */
lists.intersperse({b:2},[{a:1},{b:3}]); /* [{a:1},{b:2},{c:3}] */
```
------
<a name='intercalate'/>
### intercalate : [x] -> [[x]] -> [x]
------
**Description**: Array of Variables returned by flattening the result of interspersing an Array of Variables into an Array of an Array of Variables.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 an Array of an Array of Variables. Get an Array of Variables.

**Example Usage**:

```js
lists.intercalate([1],[[5],[5],[5]]); /* = lists.flatten(lists.intersperse([1],[[5],[5],[5]])) // [5,1,5,1,5] */
lists.intercalate(["abc"],[["efg"],["qrs"]]); /* ["efg", "abc", "qrs"] */
lists.intercalate([{a:1}],[[{b:1}],[{c:2}]]); /* [{b:1},{a:1},{c:2}] */
```
------
<a name='transpose'/>
### transpose : [[x]] -> [[x]]
------
**Description**: Array of an Array of Variables returned by transposing rows and columns of given arguments.

**Signature Definition**: Give arg 1 an Array of an Array of Variables. Get an Array of an Array of Variables.

**Example Usage**:

```js
lists.transpose([[1,2,4],[3,4,4]]); /* [[1,3],[2,4],[4,4]] */
lists.transpose([["a","b","c"],["a","b","c"]]); /* [["a","a"],["b","b"],["c","c"]] */
```
------
<a name='subsequences'/>
### subsequences : [x] -> [[x]]
------
**Description**: Array of an Array of Variables of all subsequences of a given arguement.

**Signature Definition**: Give arg 1 an Array of Variables. Get an Array of an Array of Variables.

**Example Usage**:

```js
lists.subsequences('ab'); /* [[],['a'],['b'],['ab']] */
lists.subsequences([1,2,3]); /* [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]] */
```
------
<a name='permutations'/>
### permutations : [x]|str -> [[x]]|[str]
------
**Description**: Array of an Array of Variables or Array of Strings returned by getting all permutations of a given arguement.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Get an Array of an Array of Variables or an Array of Strings respectively.

**Example Usage**:

```js
lists.permutations('abc'); /* ["abc","acb","bac","bca","cab","cba"] */
lists.permutations([1,2,3]); /* [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] */
```
------
<a name='foldl'/>
### foldl : x -> [x]|str -> f -> x
------
**Description**: Variable returned reducing left to right by applying a binary operator Function (f) on a starting Variable (x), known as the accumulator, and an Array of Variables or String.  

**Signature Definition**: Give arg 1 a starting Variable (usually a left identity of the binary operator). Give arg 2 an Array of Variables or a String. Give arg 3 a Function (binary operator). Get a Variable.

**Example Usage**:

```js
reverse = lists.foldl('','abc',function(x,y){ return y.concat(x); }); /* "cba" */
sum = lists.foldl(0,[1,2,3],function(x,y){ return x+y; }); /* 6 */
lists.foldl([], [[1,2],[3,4]], function(x,y) {return x.concat(y) }); /* [1,2,3,4] */
```
------
<a name='foldl1'/>
### foldl1 : [x]|str -> f -> x
------
**Description**: Variant of foldl without a starting Variable (The accumulator begins with the 0th index of the passed Array of Variables or String). Use with non-empty Arrays or Strings.

**Signature Definition**:  Give arg 1 an Array of Variables or a String. Give arg 2 a Function (binary operator). Get a Variable.

**Example Usage**:

```js
lists.foldl1('abc',function(x,y){ return x.concat(y).toUpperCase() }); /* "ABC" */
lists.foldl1([1,2,3],function(x,y){ return x+y }); /* 6 */
```
------
<a name='foldr'/>
### foldr : x -> [x]|str -> f -> x
------
**Description**: Variable returned reducing right to left by applying a binary operator Function (f) on a starting Variable (x), known as the accumulator, and an Array of Variables or String.  

**Signature Definition**: Give arg 1 a starting Variable (usually a right identity of the binary operator). Give arg 2 an Array of Variables or a String. Give arg 3 a Function (binary operator). Get a Variable.

**Example Usage**:

```js
lists.foldr(0,[1,2,3,4],function(x,y){ return x-y; }); /* -2 */
lists.foldr([],[[1,2],[3,4],[5,6]],function(x,y){ 
  return lists.rev(x).concat(y); 
}); /* [4,3,1,2,5,6] */
```
------
<a name='foldr1'/>
### foldr1 : [x]|str -> f -> x
------
**Description**: Variant of foldr without a starting Variable (The accumulator begins with the 0th index of the passed Array or String). Use with non-empty Arrays or Strings.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a Function (binary operator). Get a Variable.

**Example Usage**:

```js
lists.foldr1([1,2,3],function(x,y){ return x - y }); /* 3 */
lists.foldr1('aabbcc',function(x,y){ return x=='a'? x=y : x.concat(y)}); /* "bbcc" */
```
------
<a name='flatten'/>
### flatten || concat : [[x]]|[str] -> [x]|str
------
**Description**: Flatten an Array of an Array of Variables or an Array of Strings into an Array of Variables or String respectively.

**Signature Definition**: Give arg 1 an Array of an Array of Variables or an Array of Strings. Get an Array of Variables or a String.

**Example Usage**:

```js
lists.flatten(['abc']); /* 'abc' */
lists.flatten([[1,2],[3,4]]); /* [1,2,3,4] */
```
------
<a name='concatMap'/>
### concatMap : [x]|str -> f -> [x]|str
------
**Description**: Array of Variables or String returned by mapping a Function over an Array of Variables or String and flattening the result.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a Function that produces an Array of Variables or String. Get an Array of Variables or a String.

**Example Usage**:

```js
lists.concatMap(['bang','bang'], function(x){ return x+'!'}); /* "bang!bang!" */
lists.concatMap([1,2,3],function(x){ return [[x*2,x/2]] }); /* [[2,0.5],[4,1],[6,1.5]] */
lists.concatMap([{a:1},{b:2}], function(x){
  x.prop = 'hi';  
  return [x]
}); /* [{a:1,prop:"hi"},{b:2,prop:"hi"}]*/
```
------
<a name='and'/>
### and : [boolean] -> boolean
------
**Description**: Boolean returned by the conjunction of an Array of booleans. True if all booleans are true. False if one or more booleans is false.

**Signature Definition**: Give arg 1 an Array of booleans. Get a boolean.

**Example Usage**:

```js
lists.and([5>1,5>2,5>3]); /* true */
lists.and([5>1,false,5>3]); /* false */
```
------
<a name='or'/>
### or : [boolean] -> boolean
------
**Description**: Boolean returned by the disjunction of an Array of booleans. True if at least one boolean is true. False if all booleans are false.

**Signature Definition**: Give arg 1 an Array of booleans. Get a boolean.

**Example Usage**:

```js
lists.or([5<1,5<2,5>3]); /* true */
lists.or([5<1,5<2,5<3]); /* false */
```
------
<a name='any'/>
### any : [x]|str -> f -> boolean
------
**Description**: Boolean returned by applying a predicate Function to each element in an Array of Variables or a String. True if at least one f(x) is true. False if all f(x) are false.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a predicate Function to be applied to each element of arg 1. Get a boolean.

**Example Usage**:

```js
lists.any([1,2,3],function(x) { return x < .5}); /* false */
lists.any('abc',function(x) { return x == 'b'}); /* true */
```
------
<a name='all'/>
### all : [x]|str -> f -> boolean
------
**Description**: Boolean returned by applying a predicate Function to each element in an Array of Variables or String. True if all f(x) are true. False if any f(x) are false.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a predicate Function to be applied to each element of arg 1. Get a boolean.

**Example Usage**:

```js
lists.all('abc', function(x){ return x==x.toUpperCase() }); /* false */
lists.all([2,4], function(x) { return x > 3 }); /* false */
lists.all([2,4], function(x) { return x%2==0 }); /* true */
```
------
<a name='sum'/>
### sum : [num] -> num
------
**Description**: Number returned by summing the numbers of an Array together.

**Signature Definition**: Give arg 1 an Array of Numbers. Get a Number.

**Example Usage**:

```js
lists.sum([2,4,6]); /* 12 */
lists.sum([.2,.4,.6]); /* 1.2000000000000002 */
```
------
<a name='product'/>
### product : [num] -> num
------
**Description**: Number returned by computing the product of the numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers. Get a Number.

**Example Usage**:

```js
lists.product([2,4,6]); /* 48 */
lists.product([.2,.4,.6]); /* 0.04800000000000001 */
```
------
<a name='maximum'/>
### maximum : [num] -> num
------
**Description**: Maximum Number returned from numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers. Get a Number.

**Example Usage**:

```js
lists.maximum([2,4,6]); /* 6 */
lists.maximum([.2,.4,.6]); /* .6 */
```
------
<a name='minimum'/>
### minimum : [num] -> num
------
**Description**: Minimum Number returned from numbers of an Array.

**Signature Definition**: Give arg 1 an Array of Numbers. Get a Number.

**Example Usage**:

```js
lists.minimum([2,4,6]); /* 2 */
lists.minimum([.2,.4,.6]); /* .2 */
```
------
<a name='maxList'/>
### maxList : [[x]] -> [x]
------
**Description**: Array of Variables with the maximum length returned from an Array of an Array of Variables.

**Signature Definition**: Give arg 1 an Array of an Array of Variables. Get an Array of Variables.

**Example Usage**:

```js
lists.maxList([[1],[2,3]]); /* [2,3] */
lists.maxList([[1,2],[3]]); /* [1,2] */
```
------
<a name='minList'/>
### minList : [[x]] -> [x]
------
**Description**: Array of Variables with the minimum length returned from an Array of an Array of Variables.

**Signature Definition**: Give arg 1 an Array of an Array of Variables. Get an Array of Variables.

**Example Usage**:

```js
lists.minList([[],[1]]); /* [] */
lists.minList([[1,2],[3]]); /* [3] */
```
------
<a name='scanl'/>
### scanl : x -> [x]|str -> f -> [x]
------
**Description**: Array of Variables returned building left to right, starting with the accumulator (x) by applying a binary operator Function (f) on a starting Variable (x) and an Array of Variables or a String. 

**Signature Definition**: Give arg 1 a starting Variable. Give arg 2 an Array of Variables or a String. Give arg 3 a Function (binary operator). Get an Array of Variables.

**Example Usage**:

```js
lists.scanl('.','abc',function(x,y){return x + y}); /* [".",".a",".ab",".abc"] */
lists.scanl(0,[1,2,3],function(x,y){return x + y}); /* [0,1,3,6] */
```
------
<a name='scanr'/>
### scanr : x -> [x]|str -> f -> [x]
------
**Description**: Array of Variables returned building right to left, starting with the accumulator (x) by applying a binary operator Function (f) on a starting Variable (x) and an Array of Variables or a String. 

**Signature Definition**: Give arg 1 a starting Variable. Give arg 2 an Array of Variables or a String. Give arg 3 a Function (binary operator). Get an Array of Variables.

**Example Usage**:

```js
lists.scanr('.','abc',function(x,y){return x + y}); /* ["abc.","bc.","c.","."] */
lists.scanr(0,[1,2,3],function(x,y){return x + y}); /* [6,5,3,0] */
```
------
<a name='mapAccumL'/>
### mapAccumL : x -> [x]|str -> f -> [x, [x]]
------
**Description**: Builds an Array containing a accumulator (x) and the result of applying F to the supplied accumulator and each element of the supplied Array from left to right.

**Signature Definition**: Give arg 1 a starting Variable (accumulator). Give arg 2 an Array of Variables or a String. Give arg 3 a Function. Get an Array of Variable followed by Array of Variables.

**Example Usage**:

```js
lists.mapAccumL(5, [2,4,8], function(x,y){ return [x+y,x*y]}); /* [19, [10,28,88]]*/
lists.mapAccumL(5, [2,4,8], function(x,y){ return [y,y]}); /* [8, [2,4,8]] */
lists.mapAccumL(5, [5,5,5], function(x,y){ return [x,x]}); /* [5, [5,5,5]] */
```
------
<a name='mapAccumR'/>
### mapAccumR : x -> [x]|str -> f -> [x, [x]]
------
**Description**: Builds an Array containing a accumulator (x) and the result of applying f to the supplied accumulator and each element of the supplied Array from right to left.

**Signature Definition**: Give arg 1 a starting Variable (accumulator). Give arg 2 an Array of Variables or a String. Give arg 3 a Function. Get an Array of Variable followed by Array of Variables.

**Example Usage**:

```js
lists.mapAccumR(5, [2,4,8], function(x,y){ return [x+y,x*y]}); /* [19, [34,52,40]]*/
lists.mapAccumR(5, [2,4,8], function(x,y){ return [y,y]}); /* [2, [2,4,8]] */
lists.mapAccumR(5, [5,5,5], function(x,y){ return [x,x]}); /* [5, [5,5,5]] */
```
------
<a name='iterate'/>
### iterate : x -> num -> f -> [x]
------
**Description**: Builds an Array containing the successive application of f to the previous result of f(x) until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 a Variable. Give arg 2 a Number. Give arg 3 a Function. Get an Array of Variables.

**Example Usage**:

```js
lists.iterate('a',3,function(ch){return ch+'b'}); /* ["a","ab","abb"] */
lists.iterate([1,2],3,function(xs){return lists.intersperse(6,xs)}); /* [[1,2],[1,6,2],[1,6,6,6,2]] */
lists.iterate(2,4,function(x){ return x*x }); /* [2,4,16,256] */
```
------
<a name='replicate'/>
### replicate : x -> num -> [x]
------
**Description**: Builds an Array containing replications of x until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 a Variable. Give arg 2 a Number. Get an Array of Variables.

**Example Usage**:

```js
lists.replicate(5,5); /* [5,5,5,5,5] */
lists.replicate([1,2],2); /* [[1,2],[1,2]] */
lists.replicate({a:1},2); /* [{a:1},{a:2}] */
```
------
<a name='cycle'/>
### cycle : [x]|str -> num -> [x]|str
------
**Description**: Builds an Array containing replications of flattened [x]|String until the stop (num) reaches 0.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Number. Get an Array of Variables.

**Example Usage**:

```js
lists.cycle('abc',3); /* "abcabcabc" */
lists.cycle([1,2],2); /* [1,2,1,2] */
```
------
<a name='unfold'/>
### unfold : f -> f -> f -> x -> [x]|str
------
**Description**: Builds an Array from a seed value. Arg 1 is the predicate Function. If the predicate fails, return an empty Array, otherwise concatenate the result of Arg 2 (f) applied to Arg 4 (x) to the recursive call of unfold calling Arg 3 (f) to Arg 4 (x). This is a corecursive anamorphism.

**Signature Definition**: Give arg 1 an Function (predicate). Give arg 2 a Function. Give arg 3 a Function. Give arg 4 a Variable (seed).

**Example Usage**:

```js
function chop8(xs){ 
  return l.unfold(l.nil,l.part(l.take,8,_),l.part(l.drop,8,_),xs) 
}
chop8([1,2,3,4,5,6,7,8,9]); /* [[1,2,3,4,5,6,7,8],[9]] */

function unfoldMap(xs,f) { 
  return lists.unfold(
    lists.nil, 
    lists.part(lists.pipe(f,lists.head),_), 
    lists.part(lists.tail,_), 
    xs)
}
unfoldMap([1,2],function(x){ return x * 2 }); /* [2,4] */
```
------
<a name='take'/>
### take : num -> [x]|str -> [x]
------
**Description**: Array of Variables returned by taking the first n (num) elements from [x] or String.

**Signature Definition**: Give arg 1 a Number. Give arg 2 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.take(2,[1,2,3]); /* [1,2] */
lists.take(2,'abc'); /* ["a","b"] */
```
------
<a name='drop'/>
### drop : num -> [x]|str -> [x]
------
**Description**: Array of Variables returned by dropping the first n (num) elements from [x] or String.

**Signature Definition**: Give arg 1 a Number. Give arg 2 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.drop(2,[1,2,3]); /* [3] */
lists.drop(2,'abc'); /* ["c"] */
```
------
<a name='splitAt'/>
### splitAt : num -> [x]|str -> [[x],[x]]
------
**Description**: Array of two Arrays returned. The first Array contains the first n elements of the supplied Array of Variables or String. The second contains the rest.

**Signature Definition**: Give arg 1 a Number. Give arg 2 an Array of Variables or a String. Get an Array of two Arrays of Variables.

**Example Usage**:

```js
lists.splitAt(2,'abc') /* [['a','b'],['c']] */
lists.splitAt(2,[1,2,3]) /* [[1,2],[3]] */
```
------
<a name='takeWhile'/>
### takeWhile : f -> [x]|str -> [x]
------
**Description**: Array of Variables returned by taking elements from [x]|String that satisfy a supplied predicate Function until that predicate Function is unsatisfied.

**Signature Definition**: Give arg 1 a Function. Give arg 2 an Array of Variables or a String. Get an Array of Variables.

**Example Usage**:

```js
lists.takeWhile([1,2,3,1], function(x){ return x < 3 }); /* [1,2] */
lists.takeWhile([1], function(x){ return x < 2 }); /* [1] */
lists.takeWhile('aabc', function(x){ return x =='a' }); /* ["a","a"] */
```
------
<a name='dropWhile'/>
### dropWhile : f -> [x]|str -> [x]
------
**Description**: Array of Variables returned by dropping elements from [x]|String that satisfy a supplied predicate Function until that predicate Function is unsatisfied.

**Signature Definition**: <span class='sig-def'>Give arg 1 a Function. Give arg 2 an Array of Variables or a String. Get an Array of Variables.</span>

**Example Usage**:

```js
lists.dropWhile([1,2,3,4], function(x){ return x < 3 }); /* [3,4] */
lists.dropWhile([1], function(x){ return x < 2 }); /* [2] */
lists.dropWhile('aabc', function(x){ return x =='a' }); /* ["b","c"] */
```
------
<a name='span'/>
### span : arr|str -> f -> [[x], [x]|str]
------
**Description**: An Array of an Array of Variables and Array of Variables or a String (psuedo-tuple) is returned. The first element is the longest prefix of an Array of Variables or a String that satisfy a predicate Function f. The second element is the rest of the list.

**Signature Definition**: Give arg 1 an Array of Variables or String. Give arg 2 a Function. Get an Array of an Array of Variables and Array of Variables or a String (psuedo-tuple).

**Example Usage**:

```js
lists.span([1,2,3,4], function(x){return x < 3}); /* [[1,2],[3,4]] */
lists.span("abcde", function(x){return x == "a"}); /* [["a"],["b","c","d","e"]] */
lists.span([{a:2},{a:2},{b:2}], function(x){return x.a==2}); /* [[{a:2},{a:2}],[{b:2}]] */
```
------
<a name='break'/>
### break : arr|str -> f -> [[x], [x]|str]
------
**Description**: An Array of an Array of Variables and Array of Variables or a String (psuedo-tuple) is returned. The first element is the longest prefix of an Array of Variables or a String that do not satisfy a predicate Function f. The second element is the rest of the list.

**Signature Definition**: Give arg 1 an Array of Variables or a String. Give arg 2 a Function. Get an Array of an Array of Variables and Array of Variables or a String (psuedo-tuple).

**Example Usage**:

```js
lists.break([1,2,3,4], function(x){return x < 3}); /* [[],[1,2,3,4]] */
lists.break("abcde", function(x){return x == "a"}); /* [[],"abcde"] */
lists.break([{a:2},{a:2},{b:2}], function(x){return x.a==2}); /* [[],[{a:2},{a:2},{b:2}]] */
```
------
<a name='stripPrefix'/>
### stripPrefix : [num]|str -> [num]|str -> [num]|[str]
------
**Description**: Argument 1 is the prefix. Argument 2 is the target. The arguments must be of the same type. This function drops the prefix from the target and returns the representation as an Array of Numbers or an Array of Strings.

**Signature Definition**: Give arg 1 an Array of Numbers or String. Give arg 2 an Array of Numbers or String. Get an Array of Numbers or an Array of Strings.

**Example Usage**:

```js
lists.stripPrefix("abc","abcabce"); /* ["a","b","c","e"] */
lists.stripPrefix([1,2],[1,2,3,4]); /* [3,4] */
```
------
<a name='group'/>
### group : [num]|str -> [[num]]|[[str]]
------
**Description**: An Array of an Array of Numbers or Strings returned where each nested Array contains only equal elements.

**Signature Definition**: Give arg 1 an Array of Numbers or a String. Get an Array of an Array of Numbers or Strings.

**Example Usage**:

```js
lists.group([1,1,2,3,3]); /* [[1,1],[2],[3,3]] */
lists.group("mississippi"); /* [["m"],["i"],["s","s"],["i"],["s","s"],["i"],["p","p"],["i"]] */
```
------
<a name='inits'/>
### inits : [x] -> [[x]]
------
**Description**: An Array of an Array of Variables returned with all the initial segments of the argument, shortest first.

**Signature Definition**: Give arg 1 an Array of Variables. Get an Array of an Array of Variables.

**Example Usage**:

```js
lists.inits([1,2,3]); /* [[],[1],[1,2],[1,2,3]] */
lists.inits("abc"); /* [[],["a"],["a","b"],["a","b","c"]] */
lists.inits([{a:2},{b:3}]); /* [[],[{a:2}],[{a:2},{b:3}]] */
```
------
<a name='tails'/>
### tails : [x] -> [[x]]
------
**Description**: An Array of an Array of Variables returned with all the initial segments of the argument, longest first.

**Signature Definition**: Give arg 1 an Array of Variables. Get an Array of an Array of Variables.

**Example Usage**:

```js
lists.tails([1,2,3]); /* [[1,2,3],[1,2],[1],[]] */
lists.tails("abc"); /* [["a","b","c"],["a","b"],["a"],[]] */
lists.tails([{a:2},{b:3}]); /* [[{a:2},{b:3}],[{a:2}],[]] */
```
------
<a name='isPrefixOf'/>
### isPrefixOf : [num]|str -> [num]|str -> boolean
------
**Description**: Test if an Array of Numbers or String is the prefix of an Array of Numbers or a String. The arguments must be of the same type.

**Signature Definition**: Give arg 1 an Array of Numbers or String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.isPrefixOf([1,2],[1,2,3]); /* true */
lists.isPrefixOf("abc","acd"); /* false */
lists.isPrefixOf("ab","abcd"); /* true */
```
------
<a name='isSuffixOf'/>
### isSuffixOf : [num]|str -> [num]|str -> boolean
------
**Description**: Test if an Array of Numbers or String is the suffix of an Array of Numbers or a String. The arguments must be of the same type.

**Signature Definition**: Give arg 1 an Array of Numbers or String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.isSuffixOf([1,2],[1,2,3]); /* false */
lists.isSuffixOf("cd","acd"); /* true */
lists.isSuffixOf("d","abcd"); /* true */
```
------
<a name='isInfixOf'/>
### isInfixOf : [num]|str -> [num]|str -> boolean
------
**Description**: Test if an Array of Numbers or a String is the infix of an Array of Numbers or a String. The arguments must be of the same type.

**Signature Definition**: Give arg 1 an Array of Numbers or a String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.isInfixOf([1,2],[1,3,2]); /* false */
lists.isInfixOf("cd","acde"); /* true */
lists.isInfixOf("a","abcd"); /* true */
```
------
<a name='isSubsequenceOf'/>
### isSubsequenceOf : [num]|str -> [num]|str -> boolean
------
**Description**: Test if an Array of Numbers or String is the subsequence of an Array of Numbers or a String. The arguments must be of the same type.

**Signature Definition**: Give arg 1 an Array of Numbers or String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.isSubsequenceOf([1,2],[1,3,2]); /* true */
lists.isSubsequenceOf("abc","123 abc"); /* true */
lists.isSubsequenceOf("Lol","Laugh out loud"); /* true */
```
------
<a name='elem'/>
### elem : num|str -> [num]|str -> boolean
------
**Description**: Test if the Number or String is in the Array of Numbers or a String.

**Signature Definition**: Give arg 1 a Number or String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.elem(2,[1,3,2]); /* true */
lists.elem("2","123 abc"); /* true */
```
------
<a name='notElem'/>
### notElem : num|str -> [num]|str -> boolean
------
**Description**: Test if the Number or String is not in the Array of Numbers or a String.

**Signature Definition**: Give arg 1 a Number or String. Give arg 2 an Array of Numbers or a String. Get a boolean.

**Example Usage**:

```js
lists.notElem(0,[1,3,2]); /* true */
lists.notElem("a","abc"); /* false */
```
------
<a name='lookup'/>
### lookup : num|str -> [[num|str,x]] -> boolean
------
**Description**: Retreive the value of a key in an Array of an Array of Variables where position 0 is the key and position 1 is the value (associative array).

**Signature Definition**: Give arg 1 a Number or String. Give arg 2 an Array of an Array containing a Number or String as the key and a Variable as the value. Get a Variable (value).

**Example Usage**:

```js
lists.lookup("a",[["a",2],["b",3]]); /* 2 */
lists.lookup("ab",[["ab",2],["b",3]]); /* 2 */
lists.lookup(1,[[1,{a:2}],["b",3]]); /* {a:2} */
```
------
<a name='find'/>
### find : [x] -> f -> x
------
**Description**: Retreive a Variable by applying a predicate Function to an Array of Variables. Returns "Nothing" if there is no match.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Function. Get a Variable.

**Example Usage**:

```js
lists.find([{a:2}], function(x) { return x.a == 2 }); /* {a:2} */
lists.find([[1,2]], function(x) { return x[0] == 1}); /* [1,2] */
lists.find([1,2,3], function(x) { return x == 0 }); /* "Nothing" */
```
------
<a name='filter'/>
### filter : [x] -> f -> [x]
------
**Description**: An Array of Variables returned by applying a predicate Function to an Array of Variables.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Function. Get an Array of Variables.

**Example Usage**:

```js
lists.filter([{a:1},{b:2}], function(obj) { return Object.keys(obj).length > 0 }); /* [{a:1},{b:2}] */
lists.filter("abc", function(char) { return char == "a" }); /* ["a"] */
lists.filter([[1],[1,2]], function(arr) { return arr.length > 1 }); /* [[1,2]] */
```
------
<a name='partition'/>
### partition : [x] -> f -> [[x],[x]]
------
**Description**: An Array of two Arrays of Variables returned by applying a predicate Function to an Array of Variables. The Array of Variables at position 0 are the Variables that satisfy the predicate Function. The Array of Variables at position 1 are the Variables that do not satisfy the predicate Function.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Function. Get an Array of two Arrays of Variables.

**Example Usage**:

```js
lists.partition("Abc", function(char) { return char.startsWith("b") }); /* [["b"],["A","c"]] */
lists.partition([1,2,3,4], function(num) { return num % 2 == 0 }); /* [[2,4],[1,3]] */
lists.partition([{a:1},{b:2,a:2}], function(obj) { return obj.a == 2 }); /* [[{b:2,a:2}],[{a:1}]] */
```
------
<a name='bang'/>
### bang : num -> [x] -> x
------
**Description**: Variable returned by fetching the Variable at the given index (Number).

**Signature Definition**: Give arg 1 a Number. Give arg 2 an Array of Variables. Get a Variable.

**Example Usage**:

```js
lists.bang(1,[0,{a:2},1]); /* {a:2} */
lists.bang(0,[[1,2],4]); /* [1,2] */
lists.bang(3,[1,2]); /* -1 */
```
------
<a name='elemIndex'/>
### elemIndex || indexOf : num|str -> [num]|str -> num
------
**Description**: Returns the index Number of the first occurance of a Number or a String from an Array of Numbers or a String.

**Signature Definition**: Give arg 1 a Number or a String. Give arg 2 an Array of Numbers or a String. Get a Number.

**Example Usage**:

```js
lists.elemIndex(1,[1,2,1]); /* 0 */
lists.elemIndex("b","abc"); /* 1 */
lists.elemIndex(2,[0,1]); /* -1 */
```
------
<a name='elemIndices'/>
### elemIndices : num|str -> [num]|str -> [num]
------
**Description**: Returns an Array of Numbers representing the indices of the Number or a String from an Array of Numbers or a String. 

**Signature Definition**: Give arg 1 a Number or a String. Give arg 2 an Array of Numbers or a String. Get an Array of Numbers.

**Example Usage**:

```js
lists.elemIndices(1,[1,2,1]); /* 0 */
lists.elemIndices("a","aba"); /* 1 */
lists.elemIndices(2,[0,1]); /* [] */
```
------
<a name='findIndex'/>
### findIndex : [x] -> f -> num
------
**Description**: Returns the index Number of the first occurance of the result of applying a predicate Function to an Array of Variables.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Function. Get a Number.

**Example Usage**:

```js
lists.findIndex([1,2,3], function(num){ return num % 2 == 0 }); /* 1 */
lists.findIndex([{a:2}], function(obj){ return obj.a == 2 }); /* 0 */
lists.findIndex("ab%c", function(char){ return char == "%" }); /* 2 */
```
------
<a name='findIndices'/>
### findIndices : [x] -> f -> [num]
------
**Description**: Returns an Array of Numbers representing the indices of the result of applying a predicate Function to an Array of Variables.

**Signature Definition**: Give arg 1 an Array of Variables. Give arg 2 a Function. Get an Array of Numbers.

**Example Usage**:

```js
lists.findIndices([1,2,3,4], function(num) { return num % 2 == 0 }); /* [1,3] */
lists.findIndices([{a:2},{b:3},{a:2}], function(obj) { return obj.a == 2 }); /* [0,2] */
lists.findIndices("AbAbA", function(char) { return char == "A" }); /* [0,2,4] */
```
------
<a name='zip'/>
### zip || unzip : [[a,b,..,n],[c,d,..,n],..,n] -> [[a,c,..,n],[b,d,..,n],..,n]
------
**Description**: Takes an Array of an Array of Variables and returns an Array of an Array of Variables with corresponding Variables.

**Signature Definition**: Give arg 1 an Array of an Array of Variables. Get an Array of Variables.

**Example Usage**:

```js
lists.zip([[1,2],[3,4],[5,6]]); /* [[1,3,5],[2,4,6]] */
lists.zip(lists.zip([[1,2],[3,4],[5,6]])); /* unzip example [[1,2],[3,4],[5,6]] */
lists.zip([[1,'l'],[3,'o'],[5,'l']]); /* [[1,3,5],["l","o","l"]] */
```
------
<a name='zipWith'/>
### zipWith : [[a,b,..,n],[c,d,..,n],..,n] -> f -> [x]
------
**Description**: Takes an Array of an Array of Variables and a Function and returns an Array of Variables with the results being the Function applied to the corresponding zipped Array of Variables.

**Signature Definition**: Give arg 1 an Array of an Array of Variables. Give arg 2 a binary Function. Get an Array of Variables

**Example Usage**:

```js
lists.zipWith([[1,3],[1,2]],lists.sum); /* [2,5] */

function addThenMultiply(arr) {
  var res = 0; 
  lists.each(arr, function(num, i) {  
    i != 2 ? res += num : res *= num
  });
  return res;
}
lists.zipWith([[1,3],[1,2],[4,5]],addThenMultiply); /* [8, 25] */
```
------
