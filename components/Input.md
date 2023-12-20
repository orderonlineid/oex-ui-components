---
outline: deep
---

# Component Input

<!-- Your description here -->

The `Input` component is used accross our application, it is main purpose as a form control for receiving user input.

## Usage

### Basic Usage

To use the `Input` component, simply add the component to your template, just like these example below:

<LivePreview :storybookId='`components-form-input--default`'>

```vue
<template>
  <Input />
</template>

<script>
import Input from '@/components/Form/Input.vue'
export default {
  components: { Input }
}
</script>
```

</LivePreview>

### Disabled

To disable this component, you can add `isDisabled` prop, and set it to `true`. By default this prop value is `false`.

<LivePreview :storybookId='`components-form-input--default`' :args='`isDisabled:true`'>

```vue
<template>
  <Input :isDisabled=true />
</template>

<script>
import Input from '@/components/Form/Input.vue'
export default {
  components: { Input }
}
</script>
```

</LivePreview>

### Type

By default, this prop value is `text`, as it name implies, by using this component default value, you can handle any user's input type.
But you can use another type based on **certain condition**, such as validate user's input to **only allowed numeric** or you want to **use currency format**.
See this table below to know more about this prop.

| Type                                      | Usage                                                                                                            |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `phone`, `weight`, `quantity`, `identity` | To set rules, where `Input` component only allowed **numeric**.                                                  |
| `currency`                                | Use to make add rules where `Input` component only allowed **numeric** and change it's **format into currency**. |

### Placeholder

You can add your own placeholder by using `placeholder` and add your text:

```vue
<template>
  <Input placeholder='Lorem ipsum dolor sit amet' />
</template>
```

### Icon

You can add icon to the component, using class name based on **Unicon**. To use this prop, you can see the example below:

<LivePreview :storybookId='`components-form-input--default`' :args='`icon:uil%20uil-search`'>

```vue
<template>
  <Input icon='uil uil-pen' />
</template>

<script>
import Input from '@/components/Form/Input.vue'
export default {
  components: { Input }
}
</script>
```

</LivePreview>

### Label

You can add additional information such as label by using `label` prop. See this example below:

<LivePreview :storybookId='`components-form-input--default`' :args='`label:Lorem Ipsum`'>

```vue
<template>
  <Input label='Lorem Ipsum' />
</template>

<script>
import Input from '@/components/Form/Input.vue'
export default {
  components: { Input }
}
</script>
```

</LivePreview>

### Value

This is a prop that directly connected to `Input` component `v-model`. You can add whatever value you want into this prop, just like this example below:

```vue
<template>
  <Input value='Lorem ipsum dolor sit amet' />
</template>
```

## Props

| Name                        | Type      | Default   | Description                                                                                 |
| --------------------------- | --------- | --------- | ------------------------------------------------------------------------------------------- |
| [isDisabled](#disabled)     | `boolean` | `false`   | Used to determine disabled status.                                                          |
| [type](#type)               | `string`  | `text`    | Used to check input type, and based on it's value, it can **triggered some functionality**. |
| [placeholder](#placeholder) | `string`  | `Cari...` | Used to add placeholder inside the component.                                               |
| [icon](#icon)               | `string`  | ` `       | Used to add icon to the component. Based on **Unicons** icon class name.                    |
| [label](#label)             | `string`  | ` `       | Used to add label to the component.                                                         |
| [value](#value)             | `string`  | ` `       | Used to add value to the component.                                                         |

## Events

| Name                            | Description                                                                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [onEnter](#onEnter)             | Emitted when user click keyboard `Enter`.                                                                                             |
| [onChange](#onChange)           | Emitted when the value of `v-model` directive changes.                                                                                |
| [onClickIcon](#onClickIcon)     | Emitted when user click on the icon.                                                                                                  |
| [validateInput](#validateInput) | Emitted to determine whether user input is **valid or not** based on the rules applied. The rules applied came from the `type` props. |
