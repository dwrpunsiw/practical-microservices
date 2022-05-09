const packageJson = require("../package.json");

function requireFromEnv(name) {
  const envName = process.env[name];

  if (!envName) {
    console.log(`Environment with the name of ${name} doesn't exists`);
    process.exit(0);
  }
  return envName;
}

module.exports = {
  appName: requireFromEnv("APP_NAME"),
  env: requireFromEnv("NODE_ENV"),
  port: parseInt(requireFromEnv("PORT"), 10),
  version: packageJson.version,
  databaseUrl: requireFromEnv("DATABASE_URL"),
};
