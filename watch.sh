#!/bin/bash

ls ALTVER.md src/styles.css src/layout.mustache | entr sh -c 'npm run build'
