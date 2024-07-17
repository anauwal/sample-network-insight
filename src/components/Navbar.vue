<template>
    <nav class="navbar navbar-expand-lg netdrone-nav justify-content-between px-3 py-3">
        <div class="container-fluid">
            <div class="navbar-brand">
                <img src="~@/assets/logo/huawei.png" width="115px" class="img-logo" alt="">
            </div>
            <h3 class="mb-0 text-white network-title">MS IOH Network Insight Dashboard</h3>
            <div class="navbar-brand d-flex flex-row row-refresh">
                <div class="d-flex flex-column">
                    <p class="text-white text-refresh text-end mb-2">Last Updated Time</p>
                    <p class="text-white text-refresh-btm mb-0">{{ this.todayDate }} | {{ this.lastUpdated }}</p>
                </div>
                <img src="../assets/img/logo/ioh-white.png" width="" class="img-logo" alt="">
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Navbar',
    data() {
        return {
            // UPDATE DATA
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,
        }
    },
    async mounted() {
        this.UpdateLastUpdatedTime();
        this.CheckRefetchData();
    },
    methods: {
        // REFETCH DATA QUARTER HOUR
        UpdateLastUpdatedTime() {
            console.log('terpanggil');
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, '0');
            let minutes = now.getMinutes();

            this.todayDate = today.toLocaleDateString();
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, '0')}`;
        },
        async CheckMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            if ([0, 30].includes(minutes)) {
                this.UpdateLastUpdatedTime();
            }
        },
        CheckRefetchData() {
            this.fetching = setInterval(() => {
                this.CheckMinutes()
            }, 30 * 1000)
        },
    }
}
</script>
<style>
.img-logo {
    width: 100px !important;
}

.text-refresh {
    font-size: 12px;
}

.text-refresh-btm {
    font-size: 14px;
    font-weight: 600;
}

.row-refresh {
    gap: 10px
}
</style>