import { Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { container } from '~/inversify/container'
import { SYMBOLS } from '~/inversify/symbols'

export default ({ $axios }: Context) => {
  container
    .bind<NuxtAxiosInstance>(SYMBOLS.NuxtAxiosInstance)
    .toConstantValue($axios)
}
