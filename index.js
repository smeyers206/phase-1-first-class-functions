function receivesAFunction(askAQuestion, greeting, name) {
  return greeting + " " + askAQuestion(name);
}

function askAQuestion(name) {
  return `So, ${name} did I get it this time?`;
}

function aFunctionHasNoName(name, sirname) {
  return name + sirname;
}

function returnsANamedFunction() {
  return aFunctionHasNoName;
}

(function () {
  return a + b;
});

function returnsAnAnonymousFunction() {
  return function () {
    return a + b;
  };
}
