<template>
    <div class="pwa-editor-wrapper" ref="pwaEditor">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import {ref, onMounted } from 'vue';
import { loadScript } from '../utils/load-script';

const props = defineProps({
    apiKey: String
});

const pwaEditor = ref(null);
const serviceUrl = 'https://rtg.prowritingaid.com';
const beyondGrammarUrl = '//cdn.prowritingaid.com/beyondgrammar/2.0.2893/dist/hayt/bundle.js';

onMounted(async ()=>{
    await loadScript(beyondGrammarUrl);
    initChecker();
});

async function initChecker(){
    if(!pwaEditor.value || !((pwaEditor.value as any) instanceof Element)) return;
    const child = (pwaEditor.value as Element).firstElementChild;
    if(!child) return;

    const BeyondGrammar = (window as any)["BeyondGrammar"];
    const checker = new BeyondGrammar.GrammarChecker(child, {
        apiKey: props.apiKey,
        serviceUrl: serviceUrl
    });
    await checker.init();
    checker.activate();
   
}

</script>