export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed49d1258c0528319c15f3a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pn3hy6eo',
                  apiId: '15f16263-ab94-4599-a718-7301b3871ffa'
                },
                {
                  buildHookId: '5ed49d1287e8c7e7583a8209',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eacxth55',
                  apiId: 'e710444b-af94-4d5f-a3ef-7be9c5721c2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tuingking/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eacxth55.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
