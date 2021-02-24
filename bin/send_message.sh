#!/bin/bash

set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

readonly SCRIPT_DIR="$(cd "$(dirname "$0")"; pwd)"
readonly PROJECT_HOME="${SCRIPT_DIR}/.."

export GOOGLE_APPLICATION_CREDENTIALS="${PROJECT_HOME}/service-account-file.json"

# 端末から取得する
export DEVICE_TOKEN='YOUR-DEVICE-TOKEN'

node index.js
