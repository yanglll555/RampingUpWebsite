import Vue from 'vue'
import {
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Dialog,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tabs,
  TabPane,
  Upload
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/base.css';

const components = [
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Dialog,
  Drawer,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tabs,
  TabPane,
  Upload
];

const Element = {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}

Vue.use(Element, { locale })