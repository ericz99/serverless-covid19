#!/usr/bin/env bash

echo "INSTALLING SERVERLESS FRAMEWORK"
npm install -g serverless@1.55.1
echo "DEPLOYING SERVERLESS"
serverless deploy --stage $env --package $CODEBUILD_SRC_DIR/target/$env -v -r us-east-1