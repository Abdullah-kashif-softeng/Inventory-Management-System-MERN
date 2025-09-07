import sql from "mssql/msnodesqlv8";



export const dbConfig: sql.config = {
  server: "LHRLT-11639\\MSSQLSERVER1",
  database: "inventoryDb",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true



  }
};
export { sql };






