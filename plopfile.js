module.exports = plop => {
    plop.setGenerator("component", {
      description: "Create a reusable component",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is your component name?",
        },
        {
          type: "input",
          name: "moduleName",
          message:
            "Which module/subfolder does it belongs to ?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "src/components/{{moduleName}}/{{pascalCase name}}/{{pascalCase name}}.jsx",
          templateFile:
            "plop-templates/Component/Component.jsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{moduleName}}/{{pascalCase name}}/{{pascalCase name}}.module.scss",
          templateFile:
            "plop-templates/Component/Component.module.scss.hbs",
        },
        {
          type: "add",
          path: "src/components/{{moduleName}}/{{pascalCase name}}/index.js",
          templateFile:
            "plop-templates/Component/index.js.hbs",
        },
      ],
    });
    plop.setGenerator("page", {
      description: "Create a page",
      prompts: [
        {
          type: "input",
          name: "name",
          message: "What is your page name?",
        },
      ],
      actions: [
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
          templateFile: "plop-templates/Page/Page.jsx.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/{{pascalCase name}}.module.scss",
          templateFile:
            "plop-templates/Page/Page.module.scss.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{pascalCase name}}/index.js",
          templateFile: "plop-templates/Page/index.js.hbs",
        },
      ],
    });
  };