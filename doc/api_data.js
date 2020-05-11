define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/home/vishvak/Documents/NodeJS-MovieAPI/doc/main.js",
    "groupTitle": "/home/vishvak/Documents/NodeJS-MovieAPI/doc/main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/auth/login",
    "title": "Request an authorization token (JWT)",
    "name": "GetUserJWT",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The unique username for a user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password for user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Authorization\": \"bearer <token>\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: If username or password param not found",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Username or password param not found\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: If username or password param not found",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"error\": \"Username or password param not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./Routers/AuthenticationRouter.js",
    "groupTitle": "Authentication"
  }
] });
