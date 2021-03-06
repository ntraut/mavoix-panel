import Fab from '~/components/Fab.vue'
import VueTagsInput from '@johmun/vue-tags-input'
import Draggable from 'vuedraggable'

/*
** Add project's components globally
*/
export default ({ Vue }) => {
  Vue.component('fab', Fab)
  Vue.component('tags-input', VueTagsInput)
  Vue.component('draggable', Draggable)
}
