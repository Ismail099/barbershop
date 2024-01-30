module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'creating a structure for a component',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'What is the type of component (atoms, molecules, organisms)?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};
