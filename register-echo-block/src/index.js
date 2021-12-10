import edit from './edit'
import save from './save'

window.wp.blocks.registerBlockType('register-echo-block/echo-block', {
  title: 'Echo Block',
  icon: 'controls-volumeon',
  category: 'common',
  attributes: {
    text: {
      type: 'string',
      source: 'text',
      selector: 'span.value'
    }
  },
  edit,
  save
})
