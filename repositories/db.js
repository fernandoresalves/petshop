import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const poll = new pg.Pool({
    connectionString:
      "postgres://dsulewgt:IMGp_TmAgGhX4gOQd5itDeCyeLLUkp0R@queenie.db.elephantsql.com/dsulewgt",
  });

  global.connection = poll;

  return poll.connect();
}

export { connect };
