#!/bin/bash
current_path=$PWD
modules_path="modules"
rm -rf ${current_path}/node_modules/@dependencies-test
rm -rf ${current_path}/jspm_modules/npm/@dependencies-test
for PATH_TO_PACKAGE in "secret/v1" "secret/v2" "test/v1" "test/v2" "foo"
do
    cd ${current_path}/modules/${PATH_TO_PACKAGE}
    npm unpublish --force
    npm publish
done

cd ${current_path}
npm install
npm run webpack
#npm run jspm -- cc
npm run jspm -- install -y
