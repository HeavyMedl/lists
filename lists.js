(function() {
	var _version = '1.0.0', _style='Naive Recursion',
		root = this, lists = {}, l = lists; _ = l._={},
	// Private helpers
	b = bounce = function(f) {
		while (f && typeof f === "function") {
			f = f.apply(f.context, f.args);
		}
		return f;
	},
	clone = function(xs) {
		var arr = typeof xs==="string" ? '' : []
		l.each(xs, function(x){ arr.push(x); }); return arr;
	},
 	notIt = function(xs, n) {
		var arr = [];
		l.each(xs, function(x,i) { if (i!=n) arr.push(xs[i])})
		return arr;
	},
	excludeChar = function(cha,str) {
		var res = [], t = '';
		l.each(str, function(ch, i) { 
			if (ch == cha) { res.push(t); t='';
			} else { t+=ch }
		}); res.push(t);
		return res
	},
	includeChar = function(cha, xs) {
		var t = '';
		l.each(xs, function(x, i) {
			t+=x.concat(cha);
		});
		return t	
	},
	elemBy = function(xs, eq, y) {
		return l.nil(xs) ? false
		: eq(y,l.head(xs)) || elemBy(l.tail(xs),eq,y)		
	};
	// Basic Functions
	l.append = function(xs, ys) {
		return xs.concat(ys)
	}
	l.head = function(xs) {
		return xs[0];
	}
	l.last = function(xs) { 
		return xs[xs.length-1];
	}
	l.init = function(xs) {
	 	return notIt(xs, xs.length-1);
	}
	l.tail = function(xs) {
		return notIt(xs, 0);
	}
	l.nil = function(xs) {
		return typeof xs === 'undefined' || xs === null || xs.length === 0 ? true
		: false
	}
	// List transformations
	l.map = function(xs, f) {
		return l.nil(xs) ? xs
		: [f(l.head(xs))].concat(l.map(l.tail(xs), f));
	}
	l.rev = function(xs) {
		return l.nil(xs) ? xs
		: l.rev(l.tail(xs)).concat([l.head(xs)]);
	}
	l.intersperse = function(sep, xs) {
		return l.nil(xs) || xs.length===1 ? xs
		: Array.isArray(xs) ? [l.head(xs)].concat([sep]).concat(l.intersperse(sep, l.tail(xs)))
			: l.head(xs).concat(sep).concat(l.intersperse(sep, xs.substring(1)))
	}
	l.intercalate = function(xs, xss) {
		return l.flatten(l.intersperse(xs, xss))
	}
	l.transpose = function(xs) { // matrix transposition
		return l.nil(l.head(xs)) ? []
		: [l.map(xs,l.head)].concat(l.transpose(l.map(xs,l.tail)))
	}
	l.subsequences = function(xs) {
		return [[]].concat(nonEmptySubsequences(xs))
		function nonEmptySubsequences(xs) {
			return l.nil(xs) ? []
			: [[l.head(xs)]].concat(l.foldr([],nonEmptySubsequences(l.tail(xs)),function(ys,r) {
				return [ys].concat([[l.head(xs)].concat(ys)]).concat(r)
			}))
		}
	}
	l.permutations = function(xs) {
		var perms=[], strFlag=false;
		if (typeof xs==='string') {xs = xs.split(''); strFlag=true;} 
		function p(inp, data) {
			var digit, cache = data || [];
			l.each(inp, function(elem,i){
				digit = inp.splice(i, 1)[0];
				if (inp.length === 0) perms.push(cache.concat([digit]));
				p(inp.slice(), cache.concat([digit]));
				inp.splice(i, 0, digit);
			});
			return foldChs(perms);
		}
		function foldChs(perms){ 
			return !strFlag ? perms
			: lists.foldl([], perms, function(x,y){ return x.concat(y.join('')) })
		}
		return p(xs);
	}
	// Data.list Reducing l(folds/catamorphism)
	l.foldl = l.reduce = function(acc, xs, f) {
		return l.nil(xs) ? acc
		: l.foldl((f(acc, l.head(xs))), l.tail(xs), f)
	}
	l.foldl1 = function(xs, f) {
		return l.nil(xs) ? "lists.foldl1: empty list"
		: l.foldl(l.head(xs),l.tail(xs),f)
	}
	l.foldr = l.reduceRight = function(acc, xs, f) {
		return l.nil(xs) ? acc
		: f(l.head(xs),(l.foldr(acc, l.tail(xs), f)))
	}
	l.foldr1 = function(xs, f) {
		return l.nil(xs) ? "lists.foldr1: empty list"
		: xs.length===1 ? l.head(xs)
			: f(l.head(xs),l.foldr1(l.tail(xs),f)) 
	}
	// anamorphism
	//pointwise function chop8(xs){ return l.unfold(l.nil,l.part(l.take,8,_),l.part(l.drop,8,_),xs) }
	//function unfoldMap(xs,f) { return lists.unfold(lists.nil, lists.part(lists.pipe(f,lists.head),_), lists.part(lists.tail,_), xs)}
	l.unfold = function(p,h,t,xs) {
		return p(xs) ? []
		: [h(xs)].concat(l.unfold(p,h,t,(t(xs))))
	}
	// Data.List Special folds
	l.flatten = l.concat = function(xs) {
	 	return l.foldr([], xs, l.append);
	}
	l.concatMap = function(xs, f) {
		return l.flatten(l.map(xs,f))
	}
	l.and = function(xs) {
		return l.nil(xs) ? true
		: l.head(xs) && l.and(l.tail(xs))
	}
	l.or = function(xs) {
		return l.nil(xs) ? false
		: l.head(xs) || l.or(l.tail(xs))
	}
	l.all = function(xs, p) {
		return l.nil(xs) ? true
		: p(l.head(xs)) && l.all(l.tail(xs), p)
	}
	l.any = function(xs, p) {
		return l.nil(xs) ? false
		: p(l.head(xs)) || l.any(l.tail(xs), p)
	}
	l.sum = function(xs) {
		return l.foldl(0, xs, function(x,y) { return x+y; });
	}
	l.product = function(xs) {
		return l.foldl(1, xs, function(x,y) { return x*y; })
	}
	l.maximum = function(xs) {
		return l.nil(xs) ? "Empty List" 
		: xs.length === 1 ? l.head(xs)
			: l.head(xs) > l.maximum(l.tail(xs)) ? l.head(xs) 
				: l.maximum(l.tail(xs))
	}
	l.maxList = function(xss) {
		return l.foldl([],xss,function(x,y){
			var g = (x.length > y.length) ? g = x : g = y; return g
		})
	}
	l.minimum = function(xs) {
		return l.nil(xs) ? "Empty List" 
		: xs.length === 1 ? l.head(xs)
			: l.head(xs) < l.minimum(l.tail(xs)) ? l.head(xs)
				: l.minimum(l.tail(xs));
	}
	l.minList = function(xss) {
		return l.foldl1(xss,function(x,y){
			var g = (x.length < y.length) ? g = x : g = y; return g
		})
	}
	// Data.List building lists
	// list comprehension
	l.scanl = function(q, xs, f) {
		return [q].concat(function(q,xs,f) { 
			return l.nil(xs) ? xs
			: l.scanl(f(q,l.head(xs)), l.tail(xs), f)
		}(q,xs,f))
	}
	l.scanr = function(q, xs, f) {
		return l.nil(xs) ? [q]
		: [(f(l.head(xs), l.head(prev(q,xs,f))))].concat(prev(q,xs,f))
		function prev(q, xs, f) {
			return l.scanr(q, l.tail(xs), f)
		}
	}
	l.mapAccumL = function(acc, xs, f) {
		return l.nil(xs) ? [acc, []]
		: [l.mapAccumL(f(acc,l.head(xs))[0],l.tail(xs),f)[0], [f(acc,l.head(xs))[1]].concat(l.mapAccumL(f(acc,l.head(xs))[0],l.tail(xs),f)[1])]
	}
	l.mapAccumR = function(acc, xs, f) {
		return l.nil(xs) ? [acc, []] 
		: [f(l.mapAccumR(acc,l.tail(xs),f)[0],l.head(xs))[0],[f(l.mapAccumR(acc,l.tail(xs),f)[0],l.head(xs))[1]].concat(l.mapAccumR(acc,l.tail(xs),f)[1])]
	}
	l.iterate = function(x, stop, f) {
		return stop === 0 ? []
		: [x].concat(l.iterate(f(x),stop-1,f))
	}
	l.replicate = function(x, stop) {
		return stop === 0 ? []
		: [x].concat(l.replicate(x, stop-1))
	}
	l.cycle = function(xs, stop) {
		return l.flatten(l.replicate(xs, stop))
	}
	// Data.List Sublists
	l.dropWhile = function(xs, p) {
		return l.nil(xs) ? []
		: p(l.head(xs)) ? l.dropWhile(l.tail(xs), p)
			: xs
	}
	l.takeWhile = function(xs, p) {
		return l.nil(xs) ? []
		: p(l.head(xs)) ? [l.head(xs)].concat(l.takeWhile(l.tail(xs), p))
			: []
	}
	l.take = function(n, xs) {
		return l.nil(xs) || n <= 0 ? []
		: [l.head(xs)].concat(l.take(n-1, l.tail(xs)))
	}
	l.drop = function(n, xs) {
		return l.nil(xs) || n <= 0 ? xs
		: l.drop(n-1, l.tail(xs))
	}
	l.splitAt = function(n, xs) {
		return [l.take(n,xs),l.drop(n,xs)]
	}
	l.span = function(xs, p) {
		return [l.takeWhile(xs,p),l.dropWhile(xs,p)]
	}
	l.break = function(xs, p) {
		return [l.takeWhile(xs,not), l.dropWhile(xs,not)]
		function not(x) {
			return !(p(x))
		}
	}
	l.stripPrefix = function(xs, ys) {
		return l.nil(xs) ? ys
		: !l.nil(ys) ?
			l.head(xs)==(l.head(ys)) ? l.stripPrefix(l.tail(xs),l.tail(ys)) 
				: null
		: null
	}
	l.group = function(xs) { 
		return l.groupBy(xs, function(x, y) {
			return x === y;
		})
	}
	l.inits = function(xs) {
		return l.map(l.scanl([],xs,function(x,y) {
				return [y].concat(x); 
			}), function(x) {
				return l.rev(x)
			});
	}
	l.tails = function(xs) {
		return l.rev(l.inits(xs))
	}
	//Data.List Predecates
	l.isPrefixOf = function(xs,ys) {
		return l.nil(xs) ? true
		: l.nil(ys) ? false
			: l.head(xs)===l.head(ys) && l.isPrefixOf(l.tail(xs),l.tail(ys))
	}
	l.isSuffixOf = function(xs, ys) {
		return l.isPrefixOf(l.rev(xs),l.rev(ys))
	}
	l.isInfixOf = function(xs, ys) { // :(
		return l.nil(ys) ? false
		: l.isPrefixOf(xs,ys) ? true
			: l.isInfixOf(xs,l.tail(ys))
	}
	l.isSubsequenceOf = function(xs, ys) {
		return l.nil(xs) ? true
		: l.nil(ys) ? false
			: l.head(xs).toString() == l.head(ys).toString()
				? l.isSubsequenceOf(l.tail(xs), l.tail(ys))
				: l.isSubsequenceOf(xs, l.tail(ys))
	}
	//Data.List searching by equality
	l.elem = function(x, xs) {
		return l.nil(xs) ? false
		: x===(l.head(xs)) || l.elem(x,l.tail(xs))
	}
	l.notElem = function(x,xs) {
		return !l.elem(x,xs)
	}
	l.lookup = function(key,xs) { // for associative arrays
		return l.nil(key) || l.nil(xs) ? 'Nothing'
		: key===l.head(xs)[0] ? l.head(xs)[1] 
			: l.lookup(key, l.tail(xs))
	}
	//Data.List Searching with a predicate
	l.find = function(xs, p) {
		return l.nil(xs) ? 'Nothing'
		: p(l.head(xs)) ? l.head(xs)
			: l.find(l.tail(xs), p)
	}
	l.filter = function(xs, p) {
		return l.nil(xs) ? xs
		: p(l.head(xs)) ? [l.head(xs)].concat(l.filter(l.tail(xs), p)) 
			: l.filter(l.tail(xs), p)
	}
	l.partition = function(xs, p) {
		return [(l.filter(xs, p)), (l.filter(xs,not))]
		function not(x) {
			return !(p(x))
		} 
	}
	// Data.List Indexing Lists
	l.bang = function(i, xs) {
		return i < 0 ? -1
		: l.nil(xs) ? -1
			: i === 0 ? l.head(xs)
				: l.bang(i-1, l.tail(xs))
	}
	l.elemIndex = l.indexOf = function(x, xs) { // tail recursive
		function tailrec(x,xs,acc) {
			return l.nil(xs) ? -1
			: x===l.head(xs) ? acc
				: tailrec(x,l.tail(xs),acc+1)
		}
		return tailrec(x,xs,0)
	}
	l.elemIndices = function(x, xs) { // tail recursive
		function tailrec(x,xs,acc,arr) {
			return l.nil(xs) ? arr
			: x==l.head(xs) ? tailrec(x,l.tail(xs),acc+1,arr.concat(acc))
				: tailrec(x,l.tail(xs),acc+1,arr)
		}
		return tailrec(x,xs,0,[])
	}
	l.findIndex= function(xs,p) { // tail recursive
		function tailrec(xs,p,acc) {
			return l.nil(xs) ? -1
			: p(l.head(xs)) ? acc
				: tailrec.bind(null,l.tail(xs),p,acc+1)
		}
		return b(tailrec.bind(null,xs,p,0))
	}
	l.findIndices = function(xs,p) { // tail recursive
		function tailrec(xs,p,acc,arr) { 
			return l.nil(xs) ? arr
			: p(l.head(xs)) ? tailrec.bind(null,l.tail(xs), p, acc+1, arr.concat(acc))
				: tailrec.bind(null,l.tail(xs),p,acc+1, arr)
		}
		return b(tailrec.bind(null,xs,p,0,[]))
	}
	l.zip = l.unzip = function(xss) { 
		var arr = new Array(l.maxList(xss).length);
		for (var i = 0, len = arr.length; i < len; i++) {
			arr[i] = l.map(xss,function(x){
				return x[i]
			})
		}
		return arr;	
	}
	l.zipWith = function(xs, f) {
		return l.map(l.zip(xs), f)
	}
	// Data.List - Special Lists - Functions on strings
	l.lines = function(str) {
		return l.genericExcludeChar('\u000A',str)
	}
	l.words = function(str) {
		return l.genericExcludeChar('\u0020',str)
	}
	l.unlines = function(str) {
		return includeChar('\u000A', str)
	}
	l.unwords = function(str) {
		return includeChar('\u0020', str)
	}
	// Data.List Set Operations
	l.nub = l.uniq = l.unique = function(xs) {
		return l.nubBy(xs, function(x,y){ return x==y })	
	}
	l.delete = function(x,xs) {
		return l.deleteBy(x, xs, function(z,y) { return z.toString()==y.toString() })
	}
	l.diff = l.difference = function(xs,ys) {
		return l.nil(ys) ? xs
		: l.nil(xs) ? xs
			: l.filter(xs, function(x) {
				return l.notElem(x,ys)
			  });
	}
	l.union = function(xs,ys) {
		return l.unionBy(xs,ys,function(x,y) { return x==y; });
	}
	l.intersect = function(xs,ys) {
		return l.intersectBy(xs,ys,function(x,y) { return x==y; });
	}
	// Ordered lists
	l.sort = function(xs) {
		return l.sortBy(xs,l.compare);
	}
	l.insert = function(e, ls) {
		return l.insertBy(e,ls,l.compare);
	}
	// Data.List Generalized Functions
	l.unionBy = function(xs, ys, eq) {
		return xs.concat(l.foldl(l.nubBy(ys,eq),xs,l.flip(l.part(l.deleteBy,_,_,eq))));
	}
	l.intersectBy = function(xs,ys,eq) {
		return l.nil(xs) ? []
		: l.nil(ys) ? []
			: l.any(ys, l.part(eq,l.head(xs),_)) ? [l.head(xs)].concat(l.intersectBy(l.tail(xs),ys,eq))
				: l.intersectBy(l.tail(xs),ys,eq) 
	} 
	l.groupBy = function(xs, p) {
		return l.foldl([], xs, step)
		function step(acc, ys) {
			return l.nil(acc) ? [[ys]]
			: p(l.head(l.last(acc)),ys) ? l.init(acc).concat([l.last(acc).concat([ys])])
				: acc.concat([[ys]])
		}
	}
	l.deleteFirstsBy = function(xs,ys,eq) {
		return l.foldl(xs,ys,l.flip(l.part(l.deleteBy,_,_,eq)))
	}
	l.nubBy = function(ls, eq) {
		return nubBye(ls,[])
		function nubBye(ys,xs) {
			return l.nil(ys) ? []
			: elemBy(xs,eq,l.head(ys)) ? nubBye(l.tail(ys),xs)
				: [l.head(ys)].concat(nubBye(l.tail(ys),[l.head(ys)].concat(xs)))
		}
	}
	l.deleteBy = function(x, xs, eq) {
		return l.nil(xs) ? []
		: eq(x,l.head(xs)) ? l.tail(xs)
			: [l.head(xs)].concat(l.deleteBy(x, l.tail(xs), eq))
	}
	// Data.List User-supplied comparison
	l.sortBy = function(xs, cmp) {
		return l.foldr([],xs,l.part(l.insertBy,_,_,cmp))
	}
	l.insertBy = function(x, xs, cmp) {
		return l.nil(xs) ? [x]
		: l.GT(cmp(x,l.head(xs))) ? [l.head(xs)].concat(l.insertBy(x,l.tail(xs),cmp))
			: [x].concat(xs)
	}
	l.maximumBy = function(xs, cmp) {
		return l.nil(xs) ? "lists.maximumBy: empty list"
		: l.foldl1(xs,function(x,y){
			return l.GT(cmp(x,y)) ? x : y
		})
	}
	l.minimumBy = function(xs, cmp) {
		return l.nil(xs) ? "lists.minimumBy: empty list"
		: l.foldl1(xs,function(x,y){
			return l.GT(cmp(x,y)) ? y : x
		})
	}
	// functional utilities
	l.genericExcludeChar = function(ch,str) {
		return l.filter(excludeChar(ch,str),function(x) { return x != ''; })
	}
	l.each = l.forEach = function(xs, fn, caller) {
		if (l.nil(xs)) return xs
		var t = Array.isArray(t) || typeof t === "string" ? true : false;
		if (t) {
			for (var index = 0, len = xs.length; index < len; index++) { 
				fn.call(caller, xs[index], index, xs)
			}
		} else { // keys from obj
			var keys = l.keys(xs), len = keys.length;
			for (var index = 0; index < len; index++) {
				fn.call(caller, xs[keys[index]], index, xs)
			}
		}
		return xs; 
	}
	l.keys = function(obj) {
		var res = []
		for (prop in obj) { if (obj.hasOwnProperty(prop)) res.push(prop) }
		return res
	}
	l.enum = l.enumeration = function(x,y) {
		var ls = [], i;
		if (typeof y === 'undefined') { i = 0; y = x } else { i = x };  
		for (; i <= y; i++) { ls.push(i) }
		return ls
	}
	l.composeL = l.pipe = function() {
		var fns = arguments;
		return function(result) {
			for (var i = fns.length-1; i >= 0; i--) {
				result = fns[i].call(this, result);
			}
			return result;
		}
	}
	l.composeR = l.sequence = function() {
		var fns = arguments;
		return function(result) {
			for (var i = 0; i < fns.length; i++) {
				result = fns[i].call(this, result);
			}
			return result;
		}
		return result;
	}
	l.part = l.partial = function(fn) {
		var slice = Array.prototype.slice, params = slice.call(arguments, 1)
		return function() {
			var partial = slice.call(arguments, 0), args = [], self = this;
			for (var i = 0, len = params.length; i < len; i++) {
				args[i] = params[i] === _ ? partial.shift() : params[i];
			}
			return fn.apply(self, args.concat(partial));
		}		
	}
	l.flip = function(fn) { // flip a function's arguments
		var self = this;
		return function() {
			var args = Array.prototype.slice.call(arguments);
			return fn.apply(self, args.reverse())
		}
	}
	l.bubbleSort = function(xs) {
		return bubSort(xs,0)
		function bubSort(ys, i) {
			return i == ys.length ? ys
				: bubSort(bubSortI(ys),i+1)
		}
		function bubSortI(zs) {
			return zs.length===1 ? [zs[0]]
			: zs[0] > zs[1] ? [zs[1]].concat(bubSortI([zs[0]].concat(t(zs)))) 
				: [zs[0]].concat(bubSortI([zs[1]].concat(t(zs)))) 
		}
		function t(xs) {
			var arr = [];
			l.each(xs,function(x,i){if (i!=0&&i!=1) arr.push(x)});
			return arr;
		}
	}
	l.mergeSort = function(xs) {
		var split = mergeSplit(xs);
		return xs.length>1 ? merge(l.mergeSort(split[0]),l.mergeSort(split[1])) : xs
		function merge(xs,ys){	
			return l.nil(xs) ? ys : l.nil(ys) ? xs
				: l.head(xs) < l.head(ys) 
					? [l.head(xs)].concat(merge(l.tail(xs),[l.head(ys)].concat(l.tail(ys))))
					: [l.head(ys)].concat(merge([l.head(xs)].concat(l.tail(xs)),l.tail(ys)))}
		function mergeSplit(xs){return [l.take(xs.length/2,xs),l.drop(xs.length/2,xs)]} 
	}
	// Ordering
	l.compare = function(a,b) { return a == b ? 'EQ' : a <= b ? 'LT' : 'GT'}
	l.GT = function(val) { return val == 'GT'}
	l.LT = function(val) { return val == 'LT'}
	l.EQ = function(val) { return val == 'EQ'}
	
	// platform boilerplate
	typeof module !== 'undefined' && module.exports
		? module.exports = lists : root.lists = lists;
	if (typeof define === 'function' && define.amd) {
		define('lists', [], function() {
			return lists;
		});
	}
}.call(this));
