// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DefaultModality } from 'amazon-chime-sdk-js';
import { useAudioVideo } from '../AudioVideoProvider';
import { useMeetingManager } from '../MeetingProvider';
var RosterContext = React.createContext(null);
var RosterProvider = function (_a) {
    var children = _a.children;
    var meetingManager = useMeetingManager();
    var audioVideo = useAudioVideo();
    var rosterRef = useRef({});
    var _b = useState({}), roster = _b[0], setRoster = _b[1];
    meetingManager.getAttendee;
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var rosterUpdateCallback = function (chimeAttendeeId, present, externalUserId) { return __awaiter(void 0, void 0, void 0, function () {
            var attendeeId, inRoster, attendee, externalData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!present) {
                            delete rosterRef.current[chimeAttendeeId];
                            setRoster(function (currentRoster) {
                                var _a = currentRoster, _b = chimeAttendeeId, _ = _a[_b], rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
                                return __assign({}, rest);
                            });
                            return [2 /*return*/];
                        }
                        attendeeId = new DefaultModality(chimeAttendeeId).base();
                        if (attendeeId !== chimeAttendeeId) {
                            return [2 /*return*/];
                        }
                        inRoster = rosterRef.current[chimeAttendeeId];
                        if (inRoster) {
                            return [2 /*return*/];
                        }
                        attendee = { chimeAttendeeId: chimeAttendeeId };
                        if (externalUserId) {
                            attendee.externalUserId = externalUserId;
                        }
                        if (!meetingManager.getAttendee) return [3 /*break*/, 2];
                        return [4 /*yield*/, meetingManager.getAttendee(attendeeId, externalUserId)];
                    case 1:
                        externalData = _a.sent();
                        attendee = __assign(__assign({}, attendee), externalData);
                        _a.label = 2;
                    case 2:
                        rosterRef.current[attendeeId] = attendee;
                        setRoster(function (oldRoster) {
                            var _a;
                            return (__assign(__assign({}, oldRoster), (_a = {}, _a[attendeeId] = attendee, _a)));
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        audioVideo.realtimeSubscribeToAttendeeIdPresence(rosterUpdateCallback);
        return function () {
            setRoster({});
            rosterRef.current = {};
            audioVideo.realtimeUnsubscribeToAttendeeIdPresence(rosterUpdateCallback);
        };
    }, [audioVideo]);
    var value = useMemo(function () { return ({
        roster: roster
    }); }, [roster]);
    return (React.createElement(RosterContext.Provider, { value: value }, children));
};
function useRosterState() {
    var state = useContext(RosterContext);
    if (!state) {
        throw new Error('userRosterState must be used within RosterProvider');
    }
    return state;
}
export { RosterProvider, useRosterState };
//# sourceMappingURL=index.js.map