<template>
    <sections class="card px-3 py-4 card-100 justify-content-top">
        <div class="row px-3 justify-content-between">
            <h4 class="w-fit-content card-title m-0 align-self-center ps-0">
                National Availability (Last Day)
            </h4>
            <h6 class="w-fit-content card-title m-0 align-self-center ps-0">
                Date : {{ this.dataDate }}
            </h6>
        </div>
        <div class="row px-3 mt-3 row-national">
            <div class="card card-5g px-3 d-flex flex-row">
                <div class="col-8 d-flex flex-column justify-content-center">
                    <p>5G</p>
                    <h2 v-if="this.data5G == 'Data is not exist.'" class="font-600">{{ this.data5G }}</h2>
                    <h2 v-else class="font-600" style="font-size: 22px;">{{ this.data5G + '%'}}</h2>
                </div>
                <div class="col-4 text-end align-self-center">
                    <img src="../../assets/img/card/5g.png" alt="" width="60">
                </div>
            </div>
            <div class="card card-4g px-3 d-flex flex-row">
                <div class="col-8 d-flex flex-column justify-content-center">
                    <p>4G</p>
                    <h2 v-if="this.data4G == 'Data is not exist.'" class="font-600">{{ this.data4G }}</h2>
                    <h2 v-else class="font-600" style="font-size: 22px;">{{ this.data4G + '%'}}</h2>
                </div>
                <div class="col-4 text-end align-self-center">
                    <img src="../../assets/img/card/4g.png" alt="" width="60">
                </div>
            </div>
            <div class="card card-2g px-3 d-flex flex-row">
                <div class="col-8 d-flex flex-column justify-content-center">
                    <p>2G</p>
                    <h2 v-if="this.data2G == 'Data is not exist.'" class="font-600">{{ this.data2G }}</h2>
                    <h2 v-else class="font-600" style="font-size: 22px;">{{ this.data2G + '%'}}</h2>
                </div>
                <div class="col-4 text-end align-self-center">
                    <img src="../../assets/img/card/2g.png" alt="" width="60">
                </div>
            </div>
        </div>
    </sections>
</template>

<script>
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'NationalAvailability',
    data() {
        return {
            loading: false,
            nationalData: [],
            dataDate: null,
            data2G: null,
            data4G: null,
            data5G: null,
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.GetNationalData();

    },
    methods: {
        async GetNationalData() {
            this.loading = true;
            MessageProcessor.process({
                serviceId: 'ni_get_national_availability',
                data: {},
                showErrorMessage: false,
                success: (json) => {
                    this.dataDate = json.date;
                    this.nationalData = json.res;
                    this.nationalData.forEach(data => {
                        if (typeof(parseFloat(data.avail)) == 'number'){
                            if (data.tech == '2G') {
                                this.data2G = parseFloat(data.avail).toFixed(2);
                            }
                            if (data.tech == '4G') {
                                this.data4G = parseFloat(data.avail).toFixed(2);
                            }
                            if (data.tech == '5G') {
                                this.data5G = parseFloat(data.avail).toFixed(2);
                            }
                        } else {
                            data.avail = 'Data is not exist.';
                            if ( data.tech == '2G'){
                                this.data2G = data.avail;
                            }
                            if ( data.tech == '4G'){
                                this.data4G = data.avail;
                            }
                            if ( data.tech == '5G'){
                                this.data5G = data.avail;
                            }
                        }
                    });
                    this.loading = false;
                },
                error: (error) => {
                    console.log(error, 'error');
                }
            });
        },
    }
}
</script>