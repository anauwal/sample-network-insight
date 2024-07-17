<template>
    <sections class="card px-3 py-4 height-100 justify-content-top" style="height: 100%;">
        <div class="row justify-content-between px-3 mb-3">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">
                Active Users
            </h4>
            <button class="btn btn-download w-fit-content" @click="ActiveUserExport()">
                Download
                <i class="fa-solid fa-download"></i>
            </button>
        </div>
        <div class="row">
            <div class="col-6">
                <div class="card px-2 card-total-user d-flex flex-column justify-content-around card-100">
                    <p>Total Front Office<br />Active Users</p>
                    <div v-if="this.loading == true" class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h4 v-if="this.loading == false"><b>{{ this.activeUser }}</b></h4>
                </div>
            </div>
            <div class="col-6">
                <div class="card px-2 card-total-ticket d-flex flex-column justify-content-around card-100">
                    <p>Total Ticket in 1Hr</p>
                    <div v-if="this.loadingTT == true" class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h4 v-if="this.loadingTT == false"><b>{{ this.createdTT }}</b></h4>
                </div>
            </div>
            <div class="col-12">
                <table class="content-table mt-3">
                    <thead>
                        <tr>
                            <td style="text-align: center;">No.</td>
                            <td style="text-align: center;">Top Domain Based on Ticket Assignment</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in this.topDomain" :key="data.domain">
                            <td>{{ index + 1 }}</td>
                            <td>{{ data.domain }}</td>
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
    name: 'ActiveUsers',
    data() {
        return {
            loading: false,
            loadingTT: false,
            activeUser: [],
            updatedActiveUser: [],
            createdTT: null,
            topDomain: [],


            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.GetDataActiveUsers();
        await this.GetDataCreatedTT();
        this.CheckRefetchData();
    },
    methods: {
        ActiveUserExport() {
            window.open(
                "https://1057-sg.teleows.com/adc-ui/spl-plus/operation_dashboard/network_insight/active_user_export", "_blank"
            );
        },
        async GetDataActiveUsers() {
            this.loading = true;
            MessageProcessor.process({
                serviceId: 'ni_get_active_user',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json active users');
                    this.activeUser = json.res[0].user_count;
                    console.log(this.activeUser, 'ni active user');
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
        async GetDataCreatedTT() {
            this.loadingTT = true;
            MessageProcessor.process({
                serviceId: 'ni_get_created_tt',
                data: {
                    region: ''
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'ni get created tt');
                    this.createdTT = json.tt_created;
                    console.log(this.createdTT, 'created TT');
                    this.topDomain = json.top_domain.slice(0, 3);
                    console.log(this.topDomain, 'top domain slice');
                    this.loadingTT = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
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
                await this.GetDataActiveUsers();
                await this.GetDataCreatedTT();
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