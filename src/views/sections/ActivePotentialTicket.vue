<template>
    <sections class="card px-3 py-4 card-h-100 justify-content-top">
        <div class="row justify-content-between px-3">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">
                Active Potential Ticket
            </h4>
            <button class="btn btn-download w-fit-content" @click="ActivePotentialExport()">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in this.filteredPotentialTicket" :key="data.region">
                            <td class="to-uppercase">
                                {{ data.region }}
                            </td>
                            <td>{{ data.potential_emergency }}</td>
                            <td>{{ data.potential_critical }}</td>
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
    name: 'ActivePotentialTicket',
    data() {
        return {
            loading: false,
            potentialTicket: [],
            filteredPotentialTicket: [],

            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.GetDataPotentialTicket();
        this.CheckRefetchData();
    },
    methods: {
        ActivePotentialExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/tt_potential_export", "_blank"
            );
        },
        async GetDataPotentialTicket() {
            this.loading = true;
            MessageProcessor.process({
                serviceId: 'ni_get_troubleticket',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    this.potentialTicket = json.res;
                    console.log(this.potentialTicket, 'ni get trouble ticket');
                    var filteredArray = this.potentialTicket.filter(item => item.severity.includes('Potential'));
                    console.log(filteredArray, 'Filtered array potential');

                    this.FilteredData(filteredArray);
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async FilteredData(data) {
            this.filteredPotentialTicket = {};
            data.forEach(item => {
                const region = item.region;

                if (!this.filteredPotentialTicket[region]) {
                    this.filteredPotentialTicket[region] = {
                        region: region,
                        potential_emergency: 0,
                        potential_critical: 0
                    };
                }

                if (item.severity === 'Potential Emergency') {
                    this.filteredPotentialTicket[region].potential_emergency += item.tt_count;
                } else if (item.severity === 'Potential Critical') {
                    this.filteredPotentialTicket[region].potential_critical += item.tt_count;
                }
            });

            this.filteredPotentialTicket = Object.values(this.filteredPotentialTicket);

            console.log(this.filteredPotentialTicket, 'active incidents update');
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
                await this.GetDataPotentialTicket();
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