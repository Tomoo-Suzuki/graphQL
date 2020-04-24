const graphql = require('graphql')

const {
  UserType,
  AccountType,
  StoryType,
  PostType
} = require("./types");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLDate,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        },
        password: {
          type: GraphQLString
        },
        user_type: {
          type: GraphQLInt
        },
        magazine: {
          type: GraphQLBoolean
        },
        agree_to_terms: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addAccount: {
      type: AccountType,
      args: {
        id: {
          type: GraphQLID
        },
        last_name: {
          type: GraphQLString
        },
        first_name: {
          type: GraphQLString
        },
        last_name_kana: {
          type: GraphQLString
        },
        first_name_kana: {
          type: GraphQLString
        },
        birthday: {
          type: GraphQLDate
        },
        zip: {
          type: GraphQLString
        },
        prefecture: {
          type: GraphQLString
        },
        city: {
          type: GraphQLString
        },
        address3: {
          type: GraphQLString
        },
        building: {
          type: GraphQLString
        },
        purpose: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addStory: {
      type: storyType,
      args: {
        id: {
          type: GraphQLID
        },
        id_story: {
          type: GraphQLID
        },
        title_main: {
          type: GraphQLString
        },
        auther_name: {
          type: GraphQLString
        },
        is_complete: {
          type: GraphQLBoolean
        },
        genre: {
          type: GraphQLBoolean
        },
        catch_copy: {
          type: GraphQLString
        },
        synopsis: {
          type: GraphQLString
        },
        keywords: {
          type: GraphQLString
        },
        extreme_depiction: {
          type: GraphQLString
        },
        color_type: {
          type: GraphQLInt
        },
        accept_advertisement: {
          type: GraphQLBoolean
        },
        accept_rating: {
          type: GraphQLBoolean
        },
        accept_reviews: {
          type: GraphQLBoolean
        },
        accept_impression: {
          type: GraphQLBoolean
        },
        publish_evaluation: {
          type: GraphQLBoolean
        },
        accept_typo_reports: {
          type: GraphQLBoolean
        }
      },
      resolve(parent, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addPost: {
      type: PostType,
      args: {
        id_story: {
          type: GraphQLID
        },
        id_post: {
          type: GraphQLString
        },
        has_chapter: {
          type: GraphQLString
        },
        title_chapter: {
          type: GraphQLString
        },
        title: {
          type: GraphQLString
        },
        story: {
          type: GraphQLString
        },
        title_bk: {
          type: GraphQLString
        },
        story_bk: {
          type: GraphQLString
        },
        date_uploaded: {
          type: GraphQLTimestamp
        },
        date_last_modify: {
          type: GraphQLTimestamp
        }
      },
      resolve(parent, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },








    updateUser: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        },
        password: {
          type: GraphQLString
        },
        user_type: {
          type: GraphQLInt
        },
        magazine: {
          type: GraphQLBoolean
        },
        agree_to_terms: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateAccount: {
      type: AccountType,
      args: {
        id: {
          type: GraphQLID
        },
        last_name: {
          type: GraphQLString
        },
        first_name: {
          type: GraphQLString
        },
        last_name_kana: {
          type: GraphQLString
        },
        first_name_kana: {
          type: GraphQLString
        },
        birthday: {
          type: GraphQLDate
        },
        zip: {
          type: GraphQLString
        },
        prefecture: {
          type: GraphQLString
        },
        city: {
          type: GraphQLString
        },
        address3: {
          type: GraphQLString
        },
        building: {
          type: GraphQLString
        },
        purpose: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateStory: {
      type: StoryType,
      args: {
        id: {
          type: GraphQLID
        },
        id_story: {
          type: GraphQLID
        },
        title_main: {
          type: GraphQLString
        },
        auther_name: {
          type: GraphQLString
        },
        is_complete: {
          type: GraphQLBoolean
        },
        genre: {
          type: GraphQLBoolean
        },
        catch_copy: {
          type: GraphQLString
        },
        synopsis: {
          type: GraphQLString
        },
        keywords: {
          type: GraphQLString
        },
        extreme_depiction: {
          type: GraphQLString
        },
        color_type: {
          type: GraphQLInt
        },
        accept_advertisement: {
          type: GraphQLBoolean
        },
        accept_rating: {
          type: GraphQLBoolean
        },
        accept_reviews: {
          type: GraphQLBoolean
        },
        accept_impression: {
          type: GraphQLBoolean
        },
        publish_evaluation: {
          type: GraphQLBoolean
        },
        accept_typo_reports: {
          type: GraphQLBoolean
        }
      },
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);

      }
    },
    updatePost: {
      type: PostType,
      args: {
        id_story: {
          type: GraphQLID
        },
        id_post: {
          type: GraphQLString
        },
        has_chapter: {
          type: GraphQLString
        },
        title_chapter: {
          type: GraphQLString
        },
        title: {
          type: GraphQLString
        },
        story: {
          type: GraphQLString
        },
        title_bk: {
          type: GraphQLString
        },
        story_bk: {
          type: GraphQLString
        },
        date_uploaded: {
          type: GraphQLTimestamp
        },
        date_last_modify: {
          type: GraphQLTimestamp
        }
      },
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        const query = `DELETE users WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteAccount: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        const query = `DELETE accounts WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteStory: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        const query = `DELETE stories WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deletePost: {
      type: MovieType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        const query = `DELETE posts WHERE id=$1`;
        const values = [
          args.id,
        ];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
  }
})

exports.RootMutation = RootMutation;