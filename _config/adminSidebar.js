import pages from 'src/config/pages' // Get Pages from config

//Blog
export default [
  {
    title: 'requestable.cms.sidebar.adminGroup',
    icon: 'fal fa-file-signature',
    children: [
      pages.mainqrequestable.requestables,
      pages.qrequestable.categories,
      pages.qrequestable.status,
      pages.qrequestable.sources
    ]
  }
]
