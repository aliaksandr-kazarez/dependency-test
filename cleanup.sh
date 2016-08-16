#!/bin/bash
current_path=$PWD
modules_path="modules"
for PATH_TO_PACKAGE in "secret/v1" "secret/v2" "test/v1" "test/v2" "foo"
do
    cd ${current_path}/modules/${PATH_TO_PACKAGE}
    npm unpublish --force
done
