<template>
    <svg v-on="$listeners">
        <use :href="href.startsWith('#') ? href : `#${href}`" />
    </svg>
</template>
<script>
export default {
    name: "BaseIcon",
    props: {
        href: {
            type: String,
            required: true,
        },
    },
}
</script>