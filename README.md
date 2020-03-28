<p align="center">
  <img width="500" height="500" src="https://raw.githubusercontent.com/sungbin5304/KUtils/master/kutils.png">
</p>

-------

## What is KUtils?
KUtils is an open source collection of useful features written in Rhino JavaScript.

## How can I use KUtils?
Add the KUtils [source code](https://github.com/sungbin5304/KUtils/blob/master/KUtils.js) to the top of your script. (use copy & paste)

## All Methods
**String.prototype**
```js
- replaceAll(@String ori, @String change) {String}
- replaceLast(@String ori, @String change) {String}
- contains(@String content) {boolean}
- checkSpell() {String}
- trimAllLine() {String}
- toInt() {int; throwable Exceoption}
- toBoolean() {boolean; throwable String}
- removeHtmlTag() {String}
- kotlin2js() {String}
```

**Array.prototype**
```js
- size() {int} 
- isEmpty() {boolean}
- isNotEmpty() {boolean}
- contains(@String content) {boolean}
- remove(@Object element, @boolean removeAll = false) {void}
```

**KUtils**
```js
- save(@String path, @String content, @boolean createRootFolder = false) {void}
- read(@String path, @Object notExistReturn) {String; can Object(noExistReturn)}
- makeFolder(@String path) {boolean}
- removeFolder(@String path) {boolean}
- makeFile(@String path) {boolean}
- getHtml(@String address) {String; throwable Exception}
- makeRandom(@int max, @int min) {int}
- fastLog(@String content) {void}
- readLog() {String}
- splitKor(@String text) {String} (Experimental)
- joinKor(@String text) {String} (Experimental)
- similarityKor(@String text, @String text2) {int} (Experimental)
- kor2eng(@String text) {String} (Experimental)
- eng2kor(@String text) {String} (Experimental)
```


# Happy Coding :)
