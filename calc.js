const programm = () => {
  if (process.argv.length > 5) {
    throw new Error("Слишком много аргументов");
  }
  const [_, __, n1, operator, n2] = process.argv;
  const help = "Программа- калькуляторб введите команду в формате num1 + num2";

  if (n1 == "-h" || n1 == "--help") {
    console.log(help);
    return {};
  }

  const num1 = Number(n1);
  const num2 = Number(n2);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Веденны некоректные числа");
  }
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      throw new Error("Некорректный оператор");
  }
  return {
    number1: num1,
    operator,
    number2: num2,
    result,
  };
};

const tryCatchDecorator =
  (callback) =>
  (...arg) => {
    try {
      return callback();
    } catch (error) {
      console.log(error.message);
      return {
        message: error.message,
      };
    }
  };

const decorProgramm = tryCatchDecorator(programm);

console.log(decorProgramm());
