<template>
    <sections class="card px-3 py-4 height-100 justify-content-top" style="height: 100%;">
        <div class="row justify-content-between px-3 mb-3">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">
                Active Degradation Ticket (SOC)
            </h4>
            <button class="btn btn-download w-fit-content" @click="ActiveDegradationExport()">
                Download
                <i class="fa-solid fa-download"></i>
            </button>
        </div>
        <div class="row height-100" style="height: 100%;">
            <div class="col-6 height-100" style="height: 100%;">
                <div class="card card-left-degrad">
                    <p>P1</p>
                    <div v-if="this.loading == true" class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h1 v-if="this.loading == false"><b>{{ this.sqdtCountP1 }}</b></h1>
                </div>
            </div>
            <div class="col-6 height-100" style="height: 100%;">
                <div class="card card-right-degrad">
                    <p>P2</p>
                    <div v-if="this.loading == true" class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h1 v-if="this.loading == false"><b>{{ this.sqdtCountP2 }}</b></h1>
                </div>
            </div>
        </div>
    </sections>
</template>

<script>
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'ActiveDegradationTicket',
    data() {
        return {
            sqdtCountP1: null,
            sqdtCountP2: null,
            sqdtArray: [],
            loading: false,

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.GetDataDegradation();
        this.CheckRefetchData();
    },
    methods: {
        ActiveDegradationExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/sqdt_export", "_blank"
            );
        },
        async GetDataDegradation() {
            this.loading = true;
            this.sqdtCountP1 = null;
            this.sqdtCountP2 = null;
            this.sqdtArray = [];
            MessageProcessor.process({
                serviceId: 'ni_get_sqdt',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.sqdtArray = json.res;
                    var filterSqdtP1 = this.sqdtArray.filter(item => !item.priority.includes('P2'));
                    var filterSqdtP2 = this.sqdtArray.filter(item => !item.priority.includes('P1'))
                    this.FilteredData(filterSqdtP1[0].sqdt_count, filterSqdtP2[0].sqdt_count);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(p1, p2) {
            this.sqdtCountP1 = p1;
            this.sqdtCountP2 = p2;
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
                await this.UpdateLastUpdatedTime();
                await this.GetDataDegradation();
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