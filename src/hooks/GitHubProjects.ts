import { useState, useEffect } from 'react'

interface GitHubProject {
    name: string
    description: string
    url: string
    primaryLanguage: {
        name: string
    }
    openGraphImageUrl: string
}

export function useGitHubProjects(username: string) {
    const [projects, setProjects] = useState<GitHubProject[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_PUBLIC_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
              query {
                user(login: "${username}") {
                  pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                      ... on Repository {
                        name
                        description
                        url
                        primaryLanguage {
                          name
                        }
                        openGraphImageUrl
                      }
                    }
                  }
                }
              }
            `,
                    }),
                })

                const data = await response.json()
                setProjects(data.data.user.pinnedItems.nodes)
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An error occurred'))
            } finally {
                setLoading(false)
            }
        }

        fetchProjects()
    }, [username])

    return { projects, loading, error }
}

