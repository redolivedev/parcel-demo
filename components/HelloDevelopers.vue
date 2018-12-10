<template>
    <p>
        {{ greeting }}
    </p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting : 'Hello from Vue'
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        background: #eee;
    }
</style>