function yodaSays(strings, ...values) {
  console.log(strings); // ['',' loves ', '!']
  console.log(values); // ['Sarah', 'sushi']
  return `${values[2]}! ${values[1]}, ${values[0]} ${strings[1]}${strings[2]}`;
}

let name = 'Sarah', food = 'sushi', damn = "damn";
let str = yodaSays ` ${name} loves ${food}! ${damn}!`;
console.log(str) // sushi, Sarah  loves !
