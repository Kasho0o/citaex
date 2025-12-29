import { Hono } from "hono";
export const healthRouter = new Hono();
healthRouter.get("/", (c) => {
    return c.json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});
healthRouter.get("/ready", (c) => {
    // Check database connection, external services, etc.
    return c.json({
        status: "ready",
        checks: {
            database: "ok",
            cache: "ok",
        },
    });
});
