<template>
  <main class="container-fluid px-4 py-3 height-main first-layer-color">
    <div class="row row-gap-15 height-main">
      <div class="col-sm-12 col-md-4">
        <ActiveIncidents></ActiveIncidents>
      </div>
      <div class="col-sm-12 col-md-4">
        <ActivePotentialTicket></ActivePotentialTicket>
      </div>
      <div class="col-sm-12 col-md-4">
        <NationalAvailability></NationalAvailability>
      </div>
      <div class="col-sm-12 col-md-4">
        <ActiveCr></ActiveCr>
      </div>
      <div class="col-sm-12 col-md-4">
        <ActiveUsers></ActiveUsers>
      </div>
      <div class="col-sm-12 col-md-4">
        <ActiveDegradationTicket></ActiveDegradationTicket>
      </div>
    </div>
  </main>
</template>

<script>
import ActiveCr from '../sections/ActiveCr.vue';
import ActiveDegradationTicket from '../sections/ActiveDegradationTicket.vue';
import ActiveIncidents from '../sections/ActiveIncidents.vue';
import ActivePotentialTicket from '../sections/ActivePotentialTicket.vue';
import ActiveUsers from '../sections/ActiveUsers.vue';
import NationalAvailability from '../sections/NationalAvailability.vue';

export default {
  name: 'home',
  components: {
    ActiveCr,
    ActiveDegradationTicket,
    ActiveIncidents,
    ActivePotentialTicket,
    ActiveUsers,
    NationalAvailability
  }
}
</script>