import client from "./redisClient.js";

const MAX_REQUESTS = 5;
const WINDOW_SECONDS = 10;

export async function checkLimit(userId) {
  const key = `rate_limit:${userId}`;

  // Step 1: increment counter
  const currentCount = await client.incr(key);
  
  // Step 2: if first request, set expiration
  if (currentCount === 1) {
    await client.expire(key, WINDOW_SECONDS);
  }

  // Step 3: check limit
  if (currentCount > MAX_REQUESTS) {
    return false;
  }

  return true;
}
