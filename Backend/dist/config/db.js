"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.dbConfig = void 0;
// src/config/db.ts
const msnodesqlv8_1 = __importDefault(require("mssql/msnodesqlv8"));
exports.sql = msnodesqlv8_1.default;
exports.dbConfig = {
    server: "LHRLT-11639\\MSSQLSERVER1",
    database: "mydb",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
};
//# sourceMappingURL=db.js.map