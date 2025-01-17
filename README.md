# Unicode character class escape

This is a library for Unicode character class escape.

## Install

```
npm i @masa-dev/unicode-escapes
```

## Samples

```typescript
// Just a utility for samples
function output(str: string, regStr: string) {
  // Create a RegExp with the Unicode flag
  const reg = new RegExp(regStr, 'gu');
  // Match the string
  const result = str.match(reg);
  // Output the result
  console.log(result);
}

// Use General Categories
output('aA', GC.LowercaseLetter); // ['a']
output('aA', `${GC.LowercaseLetter}|${GC.UppercaseLetter}`); // ['a', 'A']

// Use Script Properties
output('あa亜', Script.Hiragana); // ['あ']
output('あa亜', `${Script.Hiragana}|${Script.Han}`); // ['あ', '亜']

// Use Binary Unicode Properties
output('a😂', BU.Emoji); // [ '😂' ]
```