#!/usr/bin/env bash

echo "Installing PKGS"
npm install 
npm install --silent --no-progress -g serverless
echo "Deploying Serverless Application"
serverless deploy