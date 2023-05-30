![img](https://github.com/happyren/plugins-quickstart-ts-express/assets/11085242/2baf9b3e-16d2-4bb5-b99b-8e8810df4ab5)

### ChatGPT Plugin Quickstart Template

This is a template to kick start chatgpt plugin dev with node.js, typescript, and express. It includes several features that would be helpful for commercial/enterprise level projects.

#### Setup

To install the required packages for this plugin, run the following command:

```bash
pnpm i
```

To run the plugin, enter the following command:

```bash
pnpm run start
```

Once the local server is running:

1. Navigate to https://chat.openai.com. 
2. In the Model drop down, select "Plugins" (note, if you don't see it there, you don't have access yet).
3. Select "Plugin store"
4. Select "Develop your own plugin"
5. Enter in `localhost:5003` since this is the URL the server is running on locally, then select "Find manifest file".

The plugin should now be installed and enabled! You can start with a question like "What is on my todo list" and then try adding something to it as well! 

## Libraries

- Styling with [`eslint`](https://eslint.org/) and [`prettier`](https://prettier.io/)
- Strict typing (removing `any` introduced by typescript) with [`ts-reset`](https://github.com/total-typescript/ts-reset)
- Testing with [`Jest`](https://jestjs.io/docs/25.x/getting-started) configured with sample test
- [`Github Actions`](https://docs.github.com/en/actions) configured with test
- Service observability with [`OpenTelemetry`](https://opentelemetry.io/) and [`Jaeger`](https://www.jaegertracing.io/download/) ([sample from OTEL](https://opentelemetry.io/docs/instrumentation/js/exporters/))
