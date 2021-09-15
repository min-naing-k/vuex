import { createStore } from 'vuex';
import Todos from './modules/todos';

export default createStore({
  modules: { Todos },
});
