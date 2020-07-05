#!/usr/bin/env bash

echo "Installing serverless"
echo "====================="
npm uninstall -g serverless
npm install -g serverless
npm install serverless-offline serverless-stack-output 

echo "Deploying app to $env"
echo "====================="
serverless deploy --stage $env --package $CODEBUILD_SRC_DIR/target/$env -v -r us-east-1