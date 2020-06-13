import { Repo } from '~/entities/Repo'

export interface GithubRepository {
  getOrgRepos(org: string): Promise<Repo[]>
}
