export async function getRepos(username) {
    const repos = await fetch(`https://api.github.com/users/${username}/repos`)
        .then(res => res.json())
        .then(async json_data => {
            const repos = await Promise.all(json_data.map(async repo => {
                const data = {
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    langs: await getRepoLangs(repo.languages_url),
                    created: new Date(repo.created_at),
                    updated: new Date(repo.pushed_at),
                    homepage: repo.homepage,

                }

                return data
            }))

            repos.sort( (a,b) => { return new Date(b.updated) - new Date(a.updated) } )

            return repos
        })
        .catch(error => console.log(error))

    console.log(repos)
    return repos

}

async function getRepoLangs(url) {
    const response = await fetch(url)
        .then(res => res.json())
        .then(json_data => {
            const keys = Object.keys(json_data)
            const values = Object.values(json_data)
            const total = values.reduce((acc, val) => acc + val, 0)
            const data = values.map((val, index) => {
                return { [keys[index]]: parseFloat((val / total).toFixed(3)) }
            }

            )
            return (Object.assign({}, ...data))

        })

    return (response)



}

import {writeFileSync} from "fs"

async function writeReposFile() {
    const repos = await getRepos("matheus-costa-dev")
    const reposJSON = JSON.stringify(repos, null, 2)
    writeFileSync("repos.json", reposJSON, "utf-8")
}

writeReposFile()
