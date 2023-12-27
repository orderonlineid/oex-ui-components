---
outline: deep
---

# Component Input Group

<!-- Your description here -->

The `InputGroup` essentially the same as `Input` with additional props `withIcon`, but the difference is you can define whether you want the icon is before **(prepend)** or after **(append)** the input field.

## Usage

### Basic Usage

To use this component, simply add the component to your template, just like these example below:

<LivePreview :storybookId='`components-form-input-group--default`'>

```vue
<template>
  <InputGroup />
</template>

<script>
import InputGroup from '@/components/Form/InputGroup.vue'
export default {
  components: { InputGroup }
}
</script>
```

</LivePreview>

### Type

As the description stated before, you can determine the icon position as you want, simply by choosing whether it is `prepend` or `append`.

<LivePreview :storybookId='`components-form-input-group--default`' :args='`type:prepend`'>

```vue
<template>
  <InputGroup type='prepend' />
</template>

<script>
import InputGroup from '@/components/Form/InputGroup.vue'
export default {
  components: { InputGroup }
}
</script>
```

</LivePreview>

### Button Type

By using prop `btnType`, you can change the style of the button, currently there are six type you can use. Here's the list below:

| Type                |
| ------------------- |
| `default`           |
| `primary`           |
| `secondary`         |
| `outline-default`   |
| `outline-primary`   |
| `outline-secondary` |


## Props

| Name                              | Type       | Default   | Description                                                              |
| --------------------------------- | ---------- | --------- | ------------------------------------------------------------------------ |
| [type](#type)                     | `string`   | `append`  | Used to determine the icon position.                                     |
| [btnText](#button-text)           | `string`   | `Search`  | Used to add your own text to the button.                                 |
| [btnType](#button-type)           | `string`   | `default` | Used to change the button style.                                         |
| [btnIcon](#button-icon)           | `string`   | ` `       | Used to add icon to the component. Based on **Unicons** icon class name. |
| [btnLoading](#button-loading)     | `boolean`  | `false`   | Used to add label to the component.                                      |
| [disabledButton](#disabledButton) | `boolean`  | `false`   | Used to disabling the button, usually used in a loading state.           |

## Events

| Name                            | Description                          |
| ------------------------------- | ------------------------------------ |
| [btnAction](#button-action)     | Emitted when user click the button.  |
