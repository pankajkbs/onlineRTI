module.exports = {
  apps : [
      {
        name: "onlinerti",
        script: "./server.js",
        watch: true,
        env: {
          "PORT": 8080,
          "NODE_ENV": "production",
        }
      }
  ]
}