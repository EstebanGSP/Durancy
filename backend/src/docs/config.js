const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "resTo",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },  
        servers: [
            {
                url: "",
            },
        ],
    },
    
    apis: ["./docs/*.js"],
  };


module.exports = swaggerJsdoc(options);