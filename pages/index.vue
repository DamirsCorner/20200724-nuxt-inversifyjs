<template>
  <div>
    <div>
      <input v-model="org" /><button @click="refresh()">Refresh</button>
    </div>
    <div v-for="repo in repos" :key="repo.id">
      <a :href="repo.html_url">{{ repo.name }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Context } from '@nuxt/types'
import { container, lazyInject } from '~/inversify/container'
import { SYMBOLS } from '~/inversify/symbols'
import { GithubRepository } from '~/repositories/GithubRepository'
import { Repo } from '~/entities/Repo'

@Component({
  asyncData: async (_context: Context) => {
    const githubRepository = container.get<GithubRepository>(
      SYMBOLS.GithubRepository
    )
    const repos = await githubRepository.getOrgRepos('damirscorner')
    return { repos }
  }
})
export default class IndexPage extends Vue {
  repos: Repo[] = []
  org: string = ''

  @lazyInject(SYMBOLS.GithubRepository)
  private githubRepository!: GithubRepository

  async refresh(): Promise<void> {
    this.repos = await this.githubRepository.getOrgRepos(this.org)
  }
}
</script>
