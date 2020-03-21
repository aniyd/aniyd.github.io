define({ "api": [
  {
    "type": "post",
    "url": "/resetmail",
    "title": "reset-mail",
    "description": "<p>:Send Reset password link to user</p>",
    "group": ":_Users",
    "name": ":_GenerateResetLink_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"msg\": \"Reset mail sent successfully to ${email}\",\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/reset-mail.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/reset",
    "title": "reset",
    "description": "<p>:Reset password process</p>",
    "group": ":_Users",
    "name": ":_ResetPassword_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"msg\": \"Password reset successfully.\",\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/reset.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/add-agent",
    "title": "add-agent",
    "description": "<p>:Adding agent to user list</p>",
    "group": ":_Users",
    "name": ":_add-agent_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userlevel",
            "description": "<p>&quot;agent&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"agent is added successfully\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/addAgent.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/add-client",
    "title": "add-client",
    "description": "<p>:Adding client to user list</p>",
    "group": ":_Users",
    "name": ":_add-client_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userlevel",
            "description": "<p>&quot;client&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"client is added successfully\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/addClient.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/add-manager",
    "title": "add-manager",
    "description": "<p>:Adding manager to user list</p>",
    "group": ":_Users",
    "name": ":_add-manager_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userlevel",
            "description": "<p>&quot;manager&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"manager is added successfully\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/addManager.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/refreshtoken",
    "title": "regenerate-token",
    "description": "<p>: To get the new token for already logged in user.</p>",
    "group": ":_Users",
    "name": ":_refresh-token_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n          \"token\": $token,\n          \"msg\": \"Signin Successfull\"\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/refreshtoken.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "signin",
    "description": "<p>:signin process using email and password</p>",
    "group": ":_Users",
    "name": ":_signin_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"token\": $token\n         \"username\": $username,\n         \"email\": $email,\n         \"userlevel\": \"superAdmin\"/\"admin\"/\"client\"/\"manager\"/\"agent\"\n         \"msg\": \"Signin Successfull\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/signin.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signin",
    "title": "signin-using-token",
    "description": "<p>:signin process using token</p>",
    "group": ":_Users",
    "name": ":_signin_using_token_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"username\": $username,\n         \"email\": $email,\n         \"userlevel\": \"superAdmin\"/\"admin\"/\"client\"/\"manager\"/\"agent\"\n         \"msg\": \"Signin Successfull\"\n       }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/signin.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "signup",
    "description": "<p>:signup process</p>",
    "group": ":_Users",
    "name": ":_signup_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmpassword",
            "description": "<p>confirmpassword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userlevel",
            "description": "<p>&quot;admin&quot;/&quot;client&quot;/&quot;manager&quot;/&quot;agent&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>client_id</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"$userlevel is added successfully\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/signup.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/view-agent",
    "title": "view-agent",
    "description": "<p>: Get the list of agents for current client</p>",
    "group": ":_Users",
    "name": ":_view-agent_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"agents list retrieved successfully\",\n         \"agent-list\": [{\"username\":\"Agent1\", \"useremail\": \"agent1@gmail.com\"}, {\"username\":\"Agent2\", \"useremail\": \"agent2@gmail.com\"}]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/viewAgent.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/view-manager",
    "title": "view-client",
    "description": "<p>: Get the list of clients</p>",
    "group": ":_Users",
    "name": ":_view-client_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"clients list retrieved successfully\",\n         \"client-list\": [{\"username\":\"client1\", \"useremail\": \"client1@gmail.com\"}, {\"username\":\"client2\", \"useremail\": \"client2@gmail.com\"}]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/viewClient.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/view-manager",
    "title": "view-manager",
    "description": "<p>: Get the list of managers for current client</p>",
    "group": ":_Users",
    "name": ":_view-manager_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p> <hr>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "true",
              "false"
            ],
            "optional": false,
            "field": "Success",
            "description": "<p>response status ( false for error, true for success )</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Status",
            "description": "<p>status code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Message",
            "description": "<p>response message string</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "AppVersion",
            "description": "<p>APP version</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Result",
            "description": "<p>result</p> <hr>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"managers list retrieved successfully\",\n         \"manager-list\": [{\"username\":\"Manager1\", \"useremail\": \"manager1@gmail.com\"}, {\"username\":\"Manager2\", \"useremail\": \"manager2@gmail.com\"}]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/viewManager.js",
    "groupTitle": ":_Users"
  }
] });
