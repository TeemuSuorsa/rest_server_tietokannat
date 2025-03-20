import { createPool } from "mariadb";

const pool = createPool({
  host: "localhost",
  user: "teemu",
  port: 3306,
  password: "teemu2025",
  database: "testi",
});

export default Object.freeze({
  pool: pool,
});
