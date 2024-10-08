const pluralize = require('pluralize');

module.exports = (plop) => {
  plop.setHelper('plural', function (text) {
    return pluralize.plural(text);
  });

  // create your generators here
  plop.setGenerator('component', {
    description: 'Create a new component into directory components/',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What's your component name?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        templateFile: './templates/component/Index.tsx.hbs',
        path: '../src/components/{{pascalCase name}}/index.tsx',
      },
      {
        type: 'add',
        templateFile: './templates/component/Component.tsx.hbs',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
      },
      {
        type: 'add',
        templateFile: './templates/component/Props.ts.hbs',
        path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
      },
    ], // array of actions
  });
};