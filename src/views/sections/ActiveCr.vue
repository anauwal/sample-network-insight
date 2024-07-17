<template>
    <sections class="card px-3 py-4 card-h-100 justify-content-top" style="height: 100%;">
        <div class="row justify-content-between px-3">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">CR Valid For Today</h4>
            <button class="btn btn-download w-fit-content" @click="ActiveCrExport()">
                Download
                <i class="fa-solid fa-download"></i>
            </button>
        </div>
        <!-- <div v-if="this.loading == true" class="row mt-3 justify-content-center align-self-center">
            <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> -->
        <div class=" row mt-3">
            <canvas id="main-chart1" ref="chartRef" style="height: 250px; width: 600px"></canvas>
            <div class="row justify-content-center mt-3">
                <a class="chart-legend"><i class="fa fa-square" aria-hidden="true" style="color: #C40054"></i> High
                    Impact</a>
                <a class="chart-legend"><i class="fa fa-square" aria-hidden="true" style="color: #FCC800"></i> Low
                    Impact</a>
                <a class="chart-legend"><i class="fa fa-square" aria-hidden="true" style="color: #30B5C5"></i> No Impact</a>
            </div>
        </div>
    </sections>
</template>

<script>
// MODULE
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";
import * as echarts from 'echarts';

export default {
    name: 'ActiveCr',
    data() {
        return {
            loading: false,
            dataCharts: [],

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        };
    },
    async mounted() {
        await U.initCsrfToken();

        await this.GetCrData();
        await this.CheckRefetchData();
    },
    methods: {
        ActiveCrExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/cr_export", "_blank"
            );
        },
        async GetCrData() {
            this.loading = true;
            this.dataCharts = [];
            MessageProcessor.process({
                serviceId: 'ni_get_change_request',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.dataCharts = json.res;
                    this.GetCharts('main-chart1', this.dataCharts);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error Outages Card');
                }
            });
        },
        GetCharts(id, data) {
            var chartDom = document.getElementById(id);
            // var myChart = echarts.init(chartDom);
            var myChart = echarts.init(this.$refs.chartRef);
            if (!chartDom) {
                console.error('Chart container not found');
                return;
            }
            var dataCharts = data;
            var option;
            let gradients = ['#C40054', '#FCC800', '#30B5C5'];

            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)'
                }
            };

            option = {
                brush: {
                    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
                    xAxisIndex: 0
                },
                feature: {
                    saveAsImage: {}
                },
                iconStyle: {
                    right: '20px',
                },
                dataView: {
                    show: false
                },
                toolbox: {
                    show: false,
                },
                xAxis: {
                    data: dataCharts.map((value) => value.cr_risklevel),
                    name: '',
                    axisLine: { onZero: true },
                    splitLine: { show: false },
                    splitArea: { show: false },
                },
                yAxis: {
                    show: false,
                    name: 'Quantity Days',
                },
                grid: {
                    bottom: 20,
                },
                series: [
                    {
                        name: 'Ok',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        label: {
                            show: true,
                            position: 'top',
                            fontWeight: 'bold',
                            color: '#5B5B5B',
                        },
                        data: dataCharts.map((value, index) => ({
                            value: value.cr_count,
                            itemStyle: {
                                color: gradients[index],
                                barBorderRadius: value.cr_count < 0 ? [0, 0, 4, 4] : [4, 4, 0, 0],
                            }
                        })),
                    },
                ]
            };

            myChart.on('brushSelected', function (params) {
                var brushed = [];
                var brushComponent = params.batch[0];
                for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                    var rawIndices = brushComponent.selected[sIdx].dataIndex;
                    // Check if the selected indices contain 0; if not, then display them
                    if (!rawIndices.includes(0)) {
                        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
                    }
                }
                myChart.setOption({
                    title: {
                        text: '', // Set an empty string to remove the title
                    },
                });
            });

            option && myChart.setOption(option);
            myChart.hideLoading();
            myChart.resize();
        },


        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            console.log(hours, 'hours', minutes, 'minutes');
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
            console.log(this.todayDate, 'today date');
            console.log(this.lastUpdated, 'today date');
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, 'minutes only');
            this.refetch = false;
            if ([0, 30].includes(minutes)) {
                this.UpdateLastUpdatedTime();
                await this.GetCrData();
                console.log('update refetch data');
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                console.log('check fetching refetch');
                this.CheckMinutes()
                this.refetch = false;
                console.log(this.refetch, 'will be false');
            }, 30 * 1000)
            console.log(this.fetching, 'check refetch data');
        },
    }
}
</script>