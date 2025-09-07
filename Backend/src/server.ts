// src/server.ts
import express from "express";
import { sql, dbConfig } from "./config/db";

const app = express();

sql.connect(dbConfig, (err) => {
  if (err) {
    console.error("❌ DB connect error:", err);
    process.exit(1);
  }
  console.log("✅ Connected to SQL Server (Windows Auth)");
});

app.get("/test-db", (req, res) => {
  const request = new sql.Request();
  request.query("SELECT * FROM Product", (err, result) => {
    if (err) {
      console.error("❌ Query error:", err);
      return res.status(500).send(err);
    }
    res.json(result?.recordset ?? []);
  });
});

const PORT = 3090;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
