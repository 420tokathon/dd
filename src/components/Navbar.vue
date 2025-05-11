<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Discreetly Diapered</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" :class="navNavClasses">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/activities">Activities</a>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#">Videos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Sitters</a>
                </li> -->
            </ul>
            <span class="navbar-text">
                <a href="/become-a-sitter" class="btn btn-primary text-light">Become a Sitter</a>
            </span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from 'vue'

const navNavClasses = ref([]);

const props = defineProps({
    scroll: {
        type: Boolean,
        default: false
    }
});

watch(() => props.scroll, (value) => {
    if (value) {
        if (!navNavClasses.value.includes('navbar-nav-scroll')) {
            navNavClasses.value.push('navbar-nav-scroll');
        }
    } else {
        navNavClasses.value = navNavClasses.value.filter((item) => item !== 'navbar-nav-scroll');
    }
});

onMounted(() => {
    if (props.scroll) {
        navNavClasses.value.push('navbar-nav-scroll');
    }
});
</script>