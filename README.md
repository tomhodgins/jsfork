# jsfork `[]()!+`

jsfork is an esoteric and educational programming style based on the atomic parts of JavaScript. It uses only six different characters to write and execute code.

It does not depend on a browser, so you can even run it on Node.js.

Demo: [jsfork.com](http://www.jsfork.com)

### Example

The following source will do an `alert(1)`:

```js
[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[
]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]][([][(![]+[])[+[]]+([![]]+[][[]
])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+
(!![]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+
!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![
]+[])[+!+[]]])[+!+[]+[+[]]]+([][[]]+[])[+!+[]]+(![]+[])[!+[]+!+[]+!+[]]+(!![]
+[])[+[]]+(!![]+[])[+!+[]]+([][[]]+[])[+[]]+([][(![]+[])[+[]]+([![]]+[][[]])[
+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!!
[]+[])[+!+[]]]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[][(![]+[])[+[]]+([![
]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[
]+!+[]]+(!![]+[])[+!+[]]])[+!+[]+[+[]]]+(!![]+[])[+!+[]]]((![]+[])[+!+[]]+(![
]+[])[!+[]+!+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]+(!![]+[])[+[]]+(!
[]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])
[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[+!+[]]+(
!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[
])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]])()
``` 

### Basics
              
    false       =>  ![]
    true        =>  !![]
    undefined   =>  [][[]]
    NaN         =>  +[![]]
    0           =>  +[]
    1           =>  +!+[]
    2           =>  !+[]+!+[]
    10          =>  [+!+[]]+[+[]]
    Array       =>  []
    Number      =>  +[]
    String      =>  []+[]
    Boolean     =>  ![]
    Function    =>  []["filter"]
    run         =>  []["filter"]["constructor"]( CODE )()
    eval        =>  []["filter"]["constructor"]("return eval")()( CODE )
    window      =>  []["filter"]["constructor"]("return this")()
    
See the full list [here](https://github.com/aemkei/jsfork/blob/master/jsfork.js).

### Links

* Follow [@aemkei](http://twitter.com/aemkei) (Martin Kleppe) <br>
* Original discussion at [Sla.ckers.org](http://sla.ckers.org/forum/read.php?24,32930)


[![Analytics](https://ga-beacon.appspot.com/UA-57649-14/aemkei/jsfork)](https://github.com/igrigorik/ga-beacon)
