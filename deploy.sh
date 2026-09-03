#!/bin/bash

#Run this to build and deploy the website to production
echo "Building production bundle..."
npm.cmd run build

echo "Syncing files to server..."
scp -r dist/* gr3@192.168.111.20:/var/www/alarmsystem_frontend/

echo "Deployed successfully!"