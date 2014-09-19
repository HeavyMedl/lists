# [ l [ i [ s ] t ] s ] -- ***pending release***

Lists is a library of higher-order functions for working with collections (arrays/objects/strings). The library was inspired directly from Haskell's Data.List module by the powerful people over at [The University of Glasgow](http://www.gla.ac.uk/). You can view the original source [here](https://hackage.haskell.org/package/base-4.7.0.0/docs/src/Data-List.html). You could then scroll through each function closely and see a purposefully similar correlation between the Haskell implementation and [this](www.google.com) implementation.

Use the unorthodox style of passing functions to functions to functions to solve complex problems. Most of the functions featured in Lists produce new arrays, to reinforce the paradigm of stateless programming, which means "retaining no information about previous events".

**Disclaimer**: Almost all of these functions are naive recursive definitions. The idea behind this library is to maximize problem-solving expressivity, that is, this library provides an alternative toolbox by which to solve computational problems. This library should be sufficient for most projects but I recommend using UnderscoreJS for problems that require ~1 million iterations until ListsJS provides iterative definitions of its functions.

-----
##Install

-----
##Submodules

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
* 2. head (arr|str) -> x
* 3. last (arr|str) -> [x]
* 4. init (arr|str) -> [x]
* 5. tail (arr|str) -> [x]
* 6. nil (arr|str) -> boolean

-----

**List Transformations**

* 7. map ([x], f) -> [x]
* 8. rev :: [a] -> [a]
* 9. intersperse :: a -> [a] -> [a]
* 10. intercalate :: [a] -> [[a]] -> [a]
* 11. transpose :: [[a]] -> [[a]]
* 12. subsequences :: [a] -> [[a]]
* 13. permutations :: [a] -> [[a]]

**Reducing Lists (folds)**

* 14. foldl :: (b -> a -> b) -> b -> [a] -> b
* 15. foldl1 :: (a -> a -> a) -> [a] -> a
* 16. foldr :: (a -> b -> b) -> b -> [a] -> b
* 17. foldr1 :: (a -> a -> a) -> [a] -> a
* 18. flatten || concat :: [[a]] -> [a]
* 19. concatMap :: (a -> [b]) -> [a] -> [b]
* 20. and :: [Bool] -> Bool
* 21. or :: [Bool] -> Bool
* 22. any :: (a -> Bool) -> [a] -> Bool
* 23. all :: (a -> Bool) -> [a] -> Bool
* 24. sum :: Num a => [a] -> a
* 25. product :: Num a => [a] -> a
* 26. maximum :: Ord a => [a] -> a
* 27. minimum :: Ord a => [a] -> a
* 28. maxList :: Ord a => [a] -> a
* 29. minList :: Ord a => [a] -> a

**Building Lists**

* 30. scanl :: (b -> a -> b) -> b -> [a] -> [b]
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

------
<a name='append'/>
####append (arr1|str, arr2|str|num) -> [x]|str
------
**Description**: A prefix-style `Array.prototype.concat` wrapper.

**Pseudo Type Signature**: Give arg 1 an Array or a String; Give arg 2 an Array or a String or a Number; Get an Array of variables or String.

**Example Usage**:

```js
lists.append([1],[2]); /* [1,2] */ lists.append([1],2); /* [1,2] */ lists.append('a','b'); /* 'ab' */
```
------

