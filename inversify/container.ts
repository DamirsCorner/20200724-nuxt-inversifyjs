import 'reflect-metadata'
import { Container } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import { SYMBOLS } from './symbols'
import { GithubRepository } from '~/repositories/GithubRepository'
import { AxiosGithubRepository } from '~/repositories/axios/AxiosGithubRepository'

export const container = new Container()
container
  .bind<GithubRepository>(SYMBOLS.GithubRepository)
  .to(AxiosGithubRepository)
  .inSingletonScope()

export const { lazyInject } = getDecorators(container)
