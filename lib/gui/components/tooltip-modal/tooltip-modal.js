/*
 * Copyright 2016 Resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * @module Etcher.Components.TooltipModal
 */

const angular = require('angular');
const MODULE_NAME = 'Etcher.Components.TooltipModal';
const TooltipModal = angular.module(MODULE_NAME, [
  require('angular-ui-bootstrap')
]);

TooltipModal.controller('TooltipModalController', require('./controllers/tooltip-modal'));
TooltipModal.service('TooltipModalService', require('./services/tooltip-modal'));

module.exports = MODULE_NAME;
