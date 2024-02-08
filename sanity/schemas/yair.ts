export default {
    name: 'yair',
    title: 'Yair',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Post Title',
  
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Post Slug',
          options: {
              source: 'title',
              maxLength: 96,
          },
      },
      {
        name: 'postImage',
        title: 'Post Image',
        type: 'image',
      },
      {
        name: 'postSmallDescription',
        title: 'Post Small Description',
        type: 'text',
      },
      {
        name: 'postContent',
        title: 'Post Content',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          {
              type: 'image',
          }
        ],
      },
    ],
  }
  