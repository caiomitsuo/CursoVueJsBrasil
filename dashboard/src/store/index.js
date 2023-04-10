import { readonly } from 'vue'
import UserModel from './user'
import GlobalModule from './global'
export default readonly({
  User: UserModel,
  Global: GlobalModule
})
