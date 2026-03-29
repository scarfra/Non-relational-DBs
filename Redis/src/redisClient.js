import { createClient } from "redis";

const client = createClient({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    socket: {
        host: 'YOUR_REDIS_CLOUD_HOST',
        port: YOUR_REDIS_CLOUD_PORT
    }
});

client.on("error", (err) => console.error("Redis error:", err));

(async () => {
  await client.connect();
  console.log("Connected to Redis Cloud");
})();

export default client;
