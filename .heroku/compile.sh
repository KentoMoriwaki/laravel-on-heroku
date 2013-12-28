#!/usr/bin/env bash

# fail fast
set -e

THIS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_DIR="$( dirname "${THIS_DIR}" )"
APP_DIR="$( dirname "${REPO_DIR}" )"

cd $REPO_DIR

$APP_DIR/bin/php artisan migrate
