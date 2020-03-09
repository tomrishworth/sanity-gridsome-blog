export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e65ea9431a86b3fa037a70d',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-s7enx5kw',
                  apiId: 'dcb8cf88-d652-4f55-947a-059e7ec0f53f'
                },
                {
                  buildHookId: '5e65ea947a9ac8b834595efe',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-uqeezpxo',
                  apiId: '96912da2-1211-4cd9-ba21-fa581ed99fa4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomrishworth/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-uqeezpxo.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
