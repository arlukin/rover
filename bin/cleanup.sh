#!/bin/bash
find . -type f -name 'yarn.lock' -exec rm {} +
find . -type f -name 'package-lock.json' -exec rm {} +
find . -type f -name '.eslintcache' -exec rm {} +
find . -type f -name 'yarn-error.log' -exec rm {} +
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +
find . -name "coverage" -type d -prune -exec rm -rf '{}' +
