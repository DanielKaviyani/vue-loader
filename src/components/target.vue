<template>
  <div>
    <message />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import message from '@/components/message.vue';

export default {
    name: 'componentA',
    components: { message },
    data () {
        return {
            msg: message.__msg
        }
    }
}
</script>