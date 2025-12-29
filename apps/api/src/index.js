import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
// Import routes
import { searchesRouter } from "./routes/searches";
import { alertsRouter } from "./routes/alerts";
import { aiRouter } from "./routes/ai";
import { healthRouter } from "./routes/health";
const app = new Hono();
// Middleware
app.use("*", logger());
app.use("*", prettyJSON());
app.use("*", cors({
    origin: [
        "http://localhost:3001",
        "https://micitaextranjeria.com",
        "https://www.micitaextranjeria.com",
    ],
    credentials: true,
}));
// Health check
app.route("/health", healthRouter);
// API routes
app.route("/api/v1/searches", searchesRouter);
app.route("/api/v1/alerts", alertsRouter);
app.route("/api/v1/ai", aiRouter);
// Root endpoint
app.get("/", (c) => {
    return c.json({
        name: "Cita Extranjería API",
        version: "1.0.0",
        status: "operational",
        documentation: "/api/v1/docs",
    });
});
// 404 handler
app.notFound((c) => {
    return c.json({
        error: "Not Found",
        message: "The requested resource was not found",
    }, 404);
});
// Error handler
app.onError((err, c) => {
    console.error(`Error: ${err.message}`);
    return c.json({
        error: "Internal Server Error",
        message: err.message,
    }, 500);
});
export default app;
