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
    "url": "/add-admin",
    "title": "add-admin",
    "description": "<p>:Adding admin to user list</p>",
    "group": ":_Users",
    "name": ":_add-admin_***************************************************************************************************************************************************************",
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
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>phone2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
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
            "description": "<p>&quot;admin&quot;</p>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"admin is added successfully\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/addAdmin.js",
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
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>phone2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
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
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>phone2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "industry",
            "description": "<p>industry_field</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>company_name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>logo(base64 img data)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
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
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>phone2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
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
    "url": "/agent-dept",
    "title": "agent-dept",
    "description": "<p>: API to get the list of dept. available for agent as well as update the allot dept. for agent.</p>",
    "group": ":_Users",
    "name": ":_agent-dept_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>&quot;getList&quot; | &quot;updateList&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dept_list",
            "description": "<p>dept_list(in case of &quot;updateList&quot; only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "agent_email",
            "description": "<p>agent_email</p> <hr>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"Departments list updated successfully.\",\n         \"agentDept\": $agentDept,\n         \"clientDept\": $clientDept\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/AgentDept.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/change-password",
    "title": "change-password",
    "description": "<p>: API to change the password of logged-in user</p>",
    "group": ":_Users",
    "name": ":_change-password_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currentpassword",
            "description": "<p>currentpassword</p>"
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
            "description": "<p>confirmpassword</p> <hr>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"Password changed successfully. Login again with new password\"\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/changePassword.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/change-user-status",
    "title": "change-user-status",
    "description": "<p>: API to change the status of user to block from active and active from block.</p>",
    "group": ":_Users",
    "name": ":_change-user-status_***************************************************************************************************************************************************************",
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
            "field": "type",
            "description": "<p>type(block/unblock)</p>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"user status changed successfully.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/changeStatus.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/departments",
    "title": "departments",
    "description": "<p>: Get the list of departments in the particular organisation</p>",
    "group": ":_Users",
    "name": ":_departments_***************************************************************************************************************************************************************",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"departments list retrieved successfully\",\n         \"department-list\": departments_array\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/departments.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/get-info",
    "title": "get-info",
    "description": "<p>: API to get info about particular user</p>",
    "group": ":_Users",
    "name": ":_get-info_***************************************************************************************************************************************************************",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"user info retrieved\",\n         \"userData\": $userData\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/getInfo.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/profile",
    "title": "profile",
    "description": "<p>: API to get information about logged in user.</p>",
    "group": ":_Users",
    "name": ":_profile_***************************************************************************************************************************************************************",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\":          \"User info retrieved successfully.\",\n         \"name\":         $username,\n         \"Email\":        $useremail,\n         \"Phone\":        $phone,\n         \"Phone2\":       $phone2,\n         \"Address\":      $address,\n         \"userlevel\":    $userlevel,\n         \"company\":      $company,\n         \"Departments\":  $departments_Arr\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/myProfile.js",
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
    "url": "/update-dept",
    "title": "update-dept",
    "description": "<p>: API to update departments list about particular client by client himself or by his managers</p>",
    "group": ":_Users",
    "name": ":_update-dept_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dept_list",
            "description": "<p>dept_arr</p>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"Departments list updated successfully.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/updateDept.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/update-info",
    "title": "update-info",
    "description": "<p>: API to update info about particular user</p>",
    "group": ":_Users",
    "name": ":_update-info_***************************************************************************************************************************************************************",
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
            "field": "phone",
            "description": "<p>phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone2",
            "description": "<p>phone2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address</p>"
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"Information updated successfully.\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/updateInfo.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/user-notes",
    "title": "user-notes",
    "description": "<p>: API to get existing notes as well as update the notes.</p>",
    "group": ":_Users",
    "name": ":_user-notes_***************************************************************************************************************************************************************",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>&quot;getNotes&quot; | &quot;updateNotes&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "notes",
            "description": "<p>notes_content(in case of &quot;updateNotes&quot; only)</p>"
          },
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"Departments list updated successfully.\",\n         \"notes\": $notes\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/notes.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/verify-acccount",
    "title": "Verify Account",
    "description": "<p>: API to verify the signup by upper level</p>",
    "group": ":_Users",
    "name": ":_verify-account_***************************************************************************************************************************************************************",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"account activated\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/verifyAccount.js",
    "groupTitle": ":_Users"
  },
  {
    "type": "post",
    "url": "/view-admin",
    "title": "view-admin",
    "description": "<p>: Get the list of admins</p>",
    "group": ":_Users",
    "name": ":_view-admin_***************************************************************************************************************************************************************",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"admins list retrieved successfully\",\n         \"admin-list\": adminData_array\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/viewAdmin.js",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"agents list retrieved successfully\",\n         \"agent-list\": agentData_array\n     }\n  ]\n}",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"clients list retrieved successfully\",\n         \"client-list\": clientData_array\n     }\n  ]\n}",
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
          "content": " {\n  \"Success\": true,\n  \"Status\": 200,\n  \"Message\": \"Success\",\n  \"AppVersion\": \"1.0.0\",\n  \"Result\": [\n      {\n         \"msg\": \"managers list retrieved successfully\",\n         \"manager-list\": managerData_array\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "src/routes/viewManager.js",
    "groupTitle": ":_Users"
  }
] });
