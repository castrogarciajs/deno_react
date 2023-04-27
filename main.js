import { Application, Router } from "./deps.js";
import { ReactDOMServer } from "./deps.js";
import App from "./components/App.jsx";

const app = new Application();
const port = 8000;

const router = new Router();

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
			   ${ReactDOMServer.renderToString(App())}
				 </div>
			</body>
		</html>`;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`http://localhost:${port}`);
await app.listen({ port });
