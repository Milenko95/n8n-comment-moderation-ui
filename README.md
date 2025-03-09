# N8nCommentModerationUi

## Steps to start the app

1. clone git repository
2. install dependencies: npm install
3. run Angular app: ng serve

## Requirements to run n8n Workflows

1. install and run n8n locally
2. import Mock API Workflow, Processing Workflow and Processing Workflow with Sentiment Analysis
3. add credentials and connect to Postgres database in Postgres nodes
4. provide Gemini Api key when runnig Workflow with Sentiment Analysis in "Request - Find inappropriate comments with Gemini" node (URL: https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY)
5. activete Mock API Workflow and one of Processing Workflows as they have the same endpoints, only difference is in a way they search for negative comments 



## Technologies used

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
Node: 18.20.5
Package Manager: npm 10.8.2

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


