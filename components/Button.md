# Component Button

<!-- Your description here -->

The `Button` component is the most used part in our application. So, it will be helpful if we're understand how to use it as well.

## Basic Usage

<LivePreview :storybookId='`components-button-button--default`'>

```vue
<template>
  <Button title='Button' />
</template>

<script>
import Button from '@/components/Button/Button.vue'
export default {
  components: { Button }
}
</script>
```

</LivePreview>


## With Icon

We also can use icon to the button. For more information about icon that we use, please see [available iconpack](localhost://asdhjasdh.asd).

<LivePreview :storybookId='`components-button-button--with-icon`'>

```vue
<template>
  <Button title='Button' icon='uil-edit' />
</template>
```

</LivePreview>
