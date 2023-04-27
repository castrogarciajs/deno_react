import { Application } from "./deps.js";
import { router } from "./pages/routes_deno.js";
import { React, ReactDOMServer } from "./deps.js";
import App from "./components/App.jsx";

const app = new Application();
const port = 8000;

const client = ReactDOMServer.renderToString(<App />);

router.get("/", (context) => {
  context.response.body = `
    <!DOCTYPE html>
		<html lang="en">
			<head>
			   <meta charset="UTF-8">
			   <meta name="viewport" content="width=device-width, initial-scale=1.0">				 
			   <title>Deno React</title>
			</head>
			<body>
			   <div id="root">
			   		${client}
				</div>
			</body>
		</html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`http://localhost:${port}`);
await app.listen({ port });
