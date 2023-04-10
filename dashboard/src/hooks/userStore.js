import Store from '../store'

export default function userStore (module) {
  if (module) {
    return Store[module]
  }

  return Store
}
