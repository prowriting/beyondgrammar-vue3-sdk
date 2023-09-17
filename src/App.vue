<template>
    <h3>ContentEditable</h3>
    <PwaEditorWrapper api-key="E8FEF7AE-3F36-4EAF-A451-456D05E6F2A3">
        <div contenteditable="true" class="editor">
            <p>ProWritingAid checks your grammar and improves the power and impact of your writing.</p>
            <p>Words underlined in red are spellling issues. Words or phrases underlined in blue are style issues, including punctuation, commonly-confused words, passive voice, awkwardly constructions, and more. We also decided to create yellow readability suggestions that enhance the clarity of your writing. Your text will be improved by our suggestions, and you will learn as you edit and see less mistakes mistakes.</p>
        </div>
    </PwaEditorWrapper>
</template>

<script setup lang="ts">
import PwaEditorWrapper from './components/PwaEditorWrapper.vue';
</script>

<style scoped>
.editor{
    border: 1px solid #AAA;
    padding: 0 10px;
    line-height: 1.5em;
}

.editor p {
    padding: 10px 0;
}

.editor:focus{
    outline: none;
}
</style>