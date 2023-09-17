# Beyond Grammar SDK for Vue
SDK for integrating [ProWritingAid](https://prowritingaid.com) Beyond Grammar with Vue 3 application with a few lines of code. It brings real-time grammar, spelling and style checking into your editor.

For Vue 2, please check branch [`vue2-sdk`](https://github.com/prowriting/beyondgrammar-vue3-sdk/tree/vue2-sdk)
## Installation

```
npm install --save @prowriting/vue3-sdk
```

## Usage
To add Beyond Grammar plugin to the text editor, wrap it with <span style='color:#267FA6'>PwaEditorWrapper</span>. Only following HTML elements are supported now:
 - `<textarea/>`
 - `<div contenteditable='true/>`

The <span style='color:#267FA6'>PwaEditorWrapper</span> needs an `apiKey` to work. You can register a free api key (for individual) on [ProWritingAid](https://prowritingaid.com) website.

```vue
<script setup language='ts'>
import {PwaEditorWrapper} from '@prowriting/vue3-sdk'
</script>

<template>
   <PwaEditorWrapper api-key="put-your-api-key-here">
      <div contenteditable='true'>
      </div>
   </PwaEditorWrapper>
</template>
```

And that's it!. An online example can be found on [CodeSandbox.](https://codesandbox.io/p/sandbox/adoring-paper-rff7hc?file=/src/components/app.vue)

## Why choose our plugin?
Our state-of-the-art grammar checker is used by over 500,000 users. It contains many unique features that you won't find in other solutions. These include:

   - Entity spellchecking. We check over 2 million people, places, teams, towns and other terms. It highlights where you may have incorrectly spelled a name. e.g. Andy Murrey => Andy Murray

   - Contextual spelling. We use artificial intelligence to highlight where you may have used a word in the incorrect context. It's easy to mistype a word, or slip a homonym in the wrong place, but we will highlight these, e.g. He is my best fiend in all the world. or I love my knew shoes. Most other grammar checkers just use simple rules than only catch a fraction of possible mistakes.

   - Style checking. We include over 15,000 potential style improvements for you text to ensure that it's not only grammatically correct, but also well-written and punchy.

   - Contextual thesaurus. Our contextual thesaurus looks at the context of the word you want to look up. It then limits the suggestions to just those so you can quickly pick the right synonym. There's also a full thesaurus option if you prefer that.