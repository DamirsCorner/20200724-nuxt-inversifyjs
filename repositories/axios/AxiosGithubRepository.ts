import { inject, injectable } from 'inversify'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { GithubRepository } from '../GithubRepository'
import { Repo } from '~/entities/Repo'
import { SYMBOLS } from '~/inversify/symbols'

@injectable()
export class AxiosGithubRepository implements GithubRepository {
  constructor(
    @inject(SYMBOLS.NuxtAxiosInstance) private axios: NuxtAxiosInstance
  ) {}

  async getOrgRepos(org: string): Promise<Repo[]> {
    return await this.axios.$get<Repo[]>(
      `https://api.github.com/orgs/${org}/repos`
    )
  }
}
