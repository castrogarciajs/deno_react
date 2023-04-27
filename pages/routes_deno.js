import { Router } from "../deps.js";

const router = new Router();

router.get("/login", (ctx) => {
  ctx.response.body = "login";
});
export { router };
