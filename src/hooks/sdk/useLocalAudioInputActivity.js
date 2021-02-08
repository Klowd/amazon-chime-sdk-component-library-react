// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useAudioInputs } from '../../providers/DevicesProvider';
import { useAudioVideo } from '../../providers/AudioVideoProvider';
import { useEffect } from 'react';
export var useLocalAudioInputActivity = function (cb) {
    var audioVideo = useAudioVideo();
    var selectedDevice = useAudioInputs().selectedDevice;
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var analyserNode;
        var restart = false;
        var data;
        var frameIndex;
        var isMounted = true;
        var lastDecimal;
        audioVideo.addDeviceChangeObserver({
            audioInputsChanged: function () {
                restart = true;
            }
        });
        function initializePreview() {
            if (!audioVideo || !isMounted)
                return;
            analyserNode = audioVideo.createAnalyserNodeForAudioInput();
            if (!(analyserNode === null || analyserNode === void 0 ? void 0 : analyserNode.getByteTimeDomainData)) {
                return;
            }
            data = new Uint8Array(analyserNode.fftSize);
            frameIndex = 0;
            restart = false;
            requestAnimationFrame(analyserNodeCallback);
        }
        function analyserNodeCallback() {
            if (!analyserNode) {
                return;
            }
            if (frameIndex === 0) {
                analyserNode.getByteTimeDomainData(data);
                var lowest = 0.01;
                var max = lowest;
                for (var _i = 0, _a = data; _i < _a.length; _i++) {
                    var f = _a[_i];
                    max = Math.max(max, (f - 128) / 128);
                }
                var decimal = (Math.log(lowest) - Math.log(max)) / Math.log(lowest);
                if (lastDecimal !== decimal) {
                    lastDecimal = decimal;
                    if (cb) {
                        cb(decimal);
                    }
                }
            }
            frameIndex = (frameIndex + 1) % 2;
            if (restart) {
                setTimeout(initializePreview, 500);
            }
            else if (isMounted) {
                requestAnimationFrame(analyserNodeCallback);
            }
        }
        initializePreview();
        return function () {
            isMounted = false;
        };
    }, [audioVideo, selectedDevice, cb]);
};
export default useLocalAudioInputActivity;
//# sourceMappingURL=useLocalAudioInputActivity.js.map