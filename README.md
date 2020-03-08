# {coding standards}

Like many developers I have a certain style to all my code. I have decided to enumerate them here along with an accompanying eslint rule or accessability related reasoning for its use.

## Installing the standards

TODO

## 1. Spacing

### 1.1 Indentation eslint:[indent](https://eslint.org/docs/rules/indent)

All indentation will be done with tabs. 

#### Why?
This is to allow for greater accessability for persons with limited sightedness. Read more about it in [Nobody talks about the real reason to use Tabs over Spaces](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).

### 1.2 Padding: let your code breath eslint:[padding-line-between-statements](https://eslint.org/docs/rules/padding-line-between-statements)

When writing code make sure that it does not give the impression of cramping, there should be spaces between logical sections of code.

#### Why?
Persons with attention deficit disorders and ASD conditions, have difficulty reading "wall of text" style documentation and code. Padding the code out will help.

#### 1.2.1 Spacing after variable declarations
Place an empty line between your section of variable declarations and the next non-declaration statement in your code. This separates the code out and makes it more readable.

**:heavy_check_mark:Good**
```javascript
const numbers = [1,2,3,4,5,6];

for(let number of numbers) {
	//...
}

const a = 1;
const b = 2;

if(number !== a || number !== b) {
	//...
}
```

**:x:Bad**
```javascript 
const numbers = [1,2,3,4,5,6];
for(let number of numbers) {
	//...
}

const a = 1;
const b = 2;
if(number !== a || number !== b) {
	//...
}
```

#### 1.2.2 Spacing before multiline statements

Multiline blocks, expressions, declarations and control statements must have a space before and after them.

**:heavy_check_mark:Good**
```javascript
runMe();

callTheFunctionWithLotsOfArgs({
	field: value,
	field2: value,
});

runMeToo();
runMeThree();
```

**:x:Bad**
```javascript
runMe();
callTheFunctionWithLotsOfArgs({
	field: value,
	field2: value,
});
runMeToo();
runMeThree();
```

#### 1.2.3 Spacing after a function or class declaration
When declaring a class or function there must be space before. The one exception to this is declarations of variables in the top of a function block.

**:heavy_check_mark:Good**
```javascript
class MyClass {

	constructor() {
		//...
	}
}

function() {

	doStuff();
}
```

**:x:Bad**
```javascript
class MyClass {
	constructor() {
		//...
	}
}

function() {
	doStuff();
}
```

## 2. Blocks

### 2.1 Curly should be used over single line statements eslint:[curly](https://eslint.org/docs/rules/curly)

All blocks and block-like statements must have curly brackets around the content.

**:heavy_check_mark:Good**
```javascript
if(isTrue) {
	doSomething();
}

while(isTrue) {
	doSomething();
}

do {
	doSomething();
} while(isTrue);
```

**:x:Bad**
```javascript
if(isTrue) doSomething();

while(isTrue) doSomething();

do doSomething() while(isTrue);
```

#### Why?
This makes for easier reading when diffing files. The condition is on its own line and the actions are as well. If more code needs to be added to the block it will just show up as an add instead of a modified line.