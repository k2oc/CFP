#!/usr/bin/env node

"use strict"
const pleaseUpgradeNode  = require('please-upgrade-node')
const packageJSON = require('./package.json');

pleaseUpgradeNode(packageJSON)

const app = require('./bin/index')
module.exports = app ;