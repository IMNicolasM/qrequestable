export default {
  //Entities
  entityNames: {
    category: 'category',
    post: 'post',
  },
  //Quick Cards
  quickCards: [
    {
      active: true,
      permission: 'iblog.posts.manage',
      component: () => import('@imagina/qblog/_components/quick-cards/lastPosts')
    }
  ]
}
