# Medium

## Problem 3

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

```
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```

The following test should pass:

```
    node = Node('root', Node('left', Node('left.left')), Node('right'))
    assert deserialize(serialize(node)).left.left.val == 'left.left'
```

---

## Problem 5

This problem was asked by Jane Street.

`cons(a, b)` constructs a pair, and `car(pair)` and `cdr(pair)` returns the first and last element of that pair. For example, `car(cons(3, 4))` returns `3`, and `cdr(cons(3, 4))` returns `4`.

Given this implementation of cons:
```
    def cons(a, b):
        def pair(f):
            return f(a, b)
        return pair
```

Implement `car` and `cdr`.

[JavaScript](https://github.com/JeevanJain/DailyCodingProblem/blob/main/Solutions/00-99/05/index.mjs)

---

## Problem 7

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

---

## Problem 10

This problem was asked by Apple.

Implement a job scheduler which takes in a function `f` and an integer `n`, and calls `f` after `n` milliseconds.

---

## Problem 11

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string `s` and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string `de` and the set of strings [`dog`, `deer`, `deal`], return [`deer`, `deal`].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

---

## Problem 14

This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.

---

## Problem 15

This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.

---

## Problem 19

This problem was asked by Facebook.

A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.

---
