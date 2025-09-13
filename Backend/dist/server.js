"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const app = (0, express_1.default)();
db_1.sql.connect(db_1.dbConfig, (err) => {
    if (err) {
        console.error("❌ DB connect error:", err);
        process.exit(1);
    }
    console.log("✅ Connected to SQL Server (Windows Auth)");
});
app.get("/test-db", (req, res) => {
    const request = new db_1.sql.Request();
    request.query("SELECT * FROM Product", (err, result) => {
        if (err) {
            console.error("❌ Query error:", err);
            return res.status(500).send(err);
        }
        res.json(result?.recordset ?? []);
    });
});
const PORT = 3090;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map