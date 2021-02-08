// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import { useEffect, useState } from 'react';
import { useAudioVideo } from '../../providers/AudioVideoProvider';
function isValidMetric(metric) {
    return typeof metric === 'number' && !Number.isNaN(metric);
}
export function useBandwidthMetrics() {
    var audioVideo = useAudioVideo();
    var _a = useState({
        availableOutgoingBandwidth: null,
        availableIncomingBandwidth: null,
    }), metrics = _a[0], setMetrics = _a[1];
    useEffect(function () {
        if (!audioVideo) {
            return;
        }
        var observer = {
            metricsDidReceive: function (clientMetricReport) {
                var metricReport = clientMetricReport.getObservableMetrics();
                var availableOutgoingBandwidth = null;
                var availableIncomingBandwidth = null;
                if (isValidMetric(metricReport.availableSendBandwidth)) {
                    availableOutgoingBandwidth =
                        metricReport.availableSendBandwidth / 1000;
                }
                else if (isValidMetric(metricReport.availableOutgoingBitrate)) {
                    availableOutgoingBandwidth =
                        metricReport.availableOutgoingBitrate / 1000;
                }
                if (isValidMetric(metricReport.availableReceiveBandwidth)) {
                    availableIncomingBandwidth =
                        metricReport.availableReceiveBandwidth / 1000;
                }
                else if (isValidMetric(metricReport.availableIncomingBitrate)) {
                    availableIncomingBandwidth =
                        metricReport.availableIncomingBitrate / 1000;
                }
                setMetrics({
                    availableOutgoingBandwidth: availableOutgoingBandwidth,
                    availableIncomingBandwidth: availableIncomingBandwidth,
                });
            },
        };
        audioVideo.addObserver(observer);
        return function () { return audioVideo.removeObserver(observer); };
    }, [audioVideo]);
    return metrics;
}
export default useBandwidthMetrics;
//# sourceMappingURL=useBandwidthMetrics.js.map