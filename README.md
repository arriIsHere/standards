# {coding standards}

Like many developers I have a certain style to all my code. I have decided to enumerate them here along with an accompanying eslint rule or accessability related reasoning for its use.

## Installing the standards

TODO

## 1. Spacing

### 1.1 Indentation eslint:[indent](https://eslint.org/docs/rules/indent)

All indentation will be done with tabs. 

#### Why?
This is to allow for greater accessability for persons with limited sightedness. Read more about it in [Nobody talks about the real reason to use Tabs over Spaces](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/).

### 1.2 Spacing: let your code breath

When writing code make sure that it does not give the impression of cramping, there should be spaces between logical sections of code.

**:heavy-check-mark:Good**
```javascript
const numbers = [1,2,3,4,5,6];

for(let number of numbers) {
	//...
}
```

**:x:Bad**
```javascript 
const numbers = [1,2,3,4,5,6];
for(let number of numbers) {
	//...
}
```

#### Why?
Persons with attention deficit disorders and ASD conditions, have difficulty reading "wall of text" style documentation and code.

## 2. Blocks

### 2.1 Curly should be used over single line statements eslint:[curly](https://eslint.org/docs/rules/curly)

All blocks and block-like statements must have curly brackets around the content.

**:heavy-check-mark:Good**
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