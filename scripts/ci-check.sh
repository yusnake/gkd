#!/bin/bash
set -e
printenv GITHUB_TOKEN || echo none
printenv ACTIONS_RUNTIME_TOKEN || echo none