// @ts-nocheck
export const convertInfixToSuffixStack = (
  input,
  priority = {
    OR: 1,
    AND: 2,
    NOT: 3,
    "(": 4,
    ")": 4,
  }
) => {
  const output = [];
  const stack = [];
  let token = "";
  for (let i = 0, len = input.length; i < len; i++) {
    switch (input[i]) {
      case "(":
        stack.push("(");
        break;
      case ")":
        if (token) {
          output.push(token);
          token = "";
        }
        while (stack[stack.length - 1] !== "(") {
          output.push(stack.pop());
        }
        stack.pop();
        break;
      case " ":
        if (token) {
          if (priority[token]) {
            while (stack.length > 0) {
              const last = stack[stack.length - 1];
              if (priority[token] > priority[last]) {
                break;
              } else {
                if (last == "(") {
                  break;
                } else {
                  output.push(stack.pop());
                  continue;
                }
              }
            }
            stack.push(token);
          } else {
            output.push(token);
          }
        }
        token = "";
        break;
      default:
        token += input[i];
        break;
    }
  }
  if (token) {
    output.push(token)
  }
  if (stack.length > 0) {
    output.push(stack.pop());
  }

  return output;
};


const input = `NOT (time!=1 OR ((time==2 AND time!:3) AND time!=4))`

const output = convertInfixToSuffixStack(input)

console.log(output)