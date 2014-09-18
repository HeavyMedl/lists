# [ l [ i [ s ] t ] s ] -- ***pending release***

Lists is a library of higher-order functions for working with collections (arrays/objects/strings). The library was inspired directly from Haskell's Data.List module by the powerful people over at [The University of Glasgow](http://www.gla.ac.uk/). You can view the original source [here](https://hackage.haskell.org/package/base-4.7.0.0/docs/src/Data-List.html). You could then scroll through each function closely and see a purposefully similar correlation between the Haskell implementation and [this](www.google.com) implementation.

Use the unorthodox style of passing functions to functions to functions to solve complex problems. Most of the functions featured in Lists produce new arrays, to reinforce the paradigm of stateless programming, which means "retaining no information about previous events".

**Disclaimer**: Almost all of these functions are naive recursive definitions. The idea behind this library is to maximize problem-solving expressivity, that is, this library provides an alternative toolbox by which one could use to solve computational problems. This library should be sufficient for most projects but I recommend using UnderscoreJS for problems that require ~ 1 million iterations until ListsJS provides iterative definitions of its functions.

-----
### Table of Contents

**Basic Functions**
* append :: [a] -> [a] -> [a]
* head :: [a] -> a
* last :: [a] -> a
* init :: [a] -> [a]
* tail :: [a] -> [a]
* nil :: [a] -> Bool
