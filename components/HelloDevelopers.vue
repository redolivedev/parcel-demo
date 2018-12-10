<template>
    <p>
        Hello from 
        <a 
            href="https://vuejs.org"
            target="_blank"
        >
            Vue
        </a>
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
    a {
        color: blue;
    }
</style>