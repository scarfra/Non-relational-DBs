import { Router } from "express";
import { checkLimit } from "./rateLimiter.js";

const router = Router();

router.get("/api", async (req, res) => {
  const userId = req.query.user || "anonymous";

  const allowed = await checkLimit(userId);

  if (!allowed) {
    return res.status(429).send("Too many requests");
  }

  res.send("Request successful");
});

export default router;
