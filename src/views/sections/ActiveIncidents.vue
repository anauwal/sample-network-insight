<template>
    <sections class="card px-3 py-4 card-h-100 justify-content-top">
        <div class="row justify-content-between px-3">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">Active Incidents</h4>
            <button class="btn btn-download w-fit-content" @click="ActiveIncidentsExport()">
                Download
                <i class="fa-solid fa-download"></i>
            </button>
        </div>
        <div class="row justify-content-center align-self-center" v-if="this.loading == true">
            <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-if="this.loading == false" class="row">
            <div class="col-12 col-table">
                <table class="content-table">
                    <thead>
                        <tr>
                            <td style="text-align: center;">Region</td>
                            <td style="text-align: center;">Emergency</td>
                            <td style="text-align: center;">Critical</td>
                            <td style="text-align: center;">Major</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="( regionData, region ) in  formattedData " :key="region">
                            <td class="to-uppercase">{{ region }}</td>
                            <td v-for=" severityData  in  ['Emergency', 'Critical', 'Major'] " :key="severityData">
                                <template v-if="regionData[severityData]">
                                    {{ regionData[severityData].tt_count }}
                                </template>
                                <template v-else>
                                    Null Data
                                </template>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </sections>
</template>

<script>
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'ActiveIncidents',
    data() {
        return {
            activeIncidents: [],
            activeIncidentsUpdate: [],
            loading: false,


            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    computed: {
        ActiveIncidentsExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/tt_export", "_blank"
            );
        },
        formattedData() {
            const formatted = {};
            for (const data of this.activeIncidentsUpdate) {
                if (!formatted[data.region]) {
                    formatted[data.region] = {};
                }
                formatted[data.region][data.severity] = data;
            }
            return formatted;
            this.loading = false;
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.GetDataActiveIncidents();
        this.CheckRefetchData();
    },
    methods: {
        async GetDataActiveIncidents() {
            this.loading = true;
            MessageProcessor.process({
                serviceId: 'ni_get_troubleticket',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    this.activeIncidents = json.res;
                    var filteredArray = this.activeIncidents.filter(item => !item.severity.includes('Potential') && !item.severity.includes('Minor'));
                    this.FilteredData(filteredArray);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(data) {
            this.activeIncidentsUpdate = data;
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
                await this.GetDataActiveIncidents();
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