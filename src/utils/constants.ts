/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

export const common = require("./common.js");

//WS-MAN libraries
export const wscomm = require("../amt_libraries/amt-wsman-cira.js");
export const wsman = require("../amt_libraries/amt-wsman.js");
export const amt = require("../amt_libraries/amt.js");

export const UUIDRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

//require('constants') is deprecated from Node 11.10, require('crypto').constants instead
export const constants = require("crypto").constants? require("crypto").constants: require("constants");

//HTTP error codes
export const httpErrorTable = {
    200: 'OK',
    400: 'Incorrect URI or Bad Request',
    401: 'Authentication Error',
    404: {
      device:  'Device not found/connected. Please connect again using CIRA.',
      method:  'Request does not contain method',
      noMethod: 'Requested method does not exists',
      payload: 'Request does not contain payload',
      guid: 'GUID does not exist in the payload',
      action: 'Power action type does not exist',
      invalidGuid: 'GUID empty/invalid'
    },
    408: 'Timeout Error',
    500: 'Internal Server Error',
    601: 'WSMAN Parsing Error',
    602: 'Unable to parse HTTP response header',
    603: 'Unexpected HTTP enum response',
    604: 'Unexpected HTTP pull response',
}


//Power Actions supported as per Distributed Management Task Force standard.
//ValueMap={2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16}
//Values={Power On, Sleep - Light, Sleep - Deep, Power Cycle (Off Soft), Power Off - Hard, Hibernate, Power Off - Soft, Power Cycle (Off Hard), Master Bus Reset, Diagnostic Interrupt (NMI), Power Off - Soft Graceful, Power Off - Hard Graceful, Master Bus Reset Graceful, Power Cycle (Off - Soft Graceful), Power Cycle (Off - Hard Graceful)}
export const DMTFPowerStates = [2, 5, 8, 10, 4, 7, 12, 14, 100, 101, 104, 200, 201, 202, 203, 300, 301, 400, 401];