#!/bin/bash

pushd /workspace
rm -rf node_modules
npm install
npm run ci
popd
