<template>
  <q-page class="q-pa-md">
    <div class="row">
      <div class="col">
        <img alt="Quasar logo" src="../assets/logo.png">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <q-btn color="primary" @click="alert=true" label="Dialog"/>
      </div>
      <div class="col">
        <q-btn color="purple" @click="dialog" label="Dialog 2"/>
      </div>
      <div class="col">
        <q-btn color="secondary" @click="notify" label="Notify"/>
      </div>

      <!-- Dialog -->
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
            porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro
            labore.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="OK" color="primary" v-close-popup/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
  export default {
    name: 'PageHome',
    data() {
      return {
        alert: false
      }
    },
    methods: {
      notify() {
        this.$q.notify('Message');
      },
      dialog() {
        this.$q.dialog({
          title: 'Alert',
          message: 'Some message'
        }).onOk(() => {
          console.log('OK')
        }).onCancel(() => {
          console.log('Cancel')
        }).onDismiss(() => {
          console.log('I am triggered on both OK and Cancel')
        })
      }
    }
  }
</script>
