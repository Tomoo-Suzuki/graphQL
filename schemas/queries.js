const graphql = require('graphql')
const {
  postgres
} = require("../postgres");

const {
  UserType,
  AccountType,
  StoryType,
  PostType
} = require("./types");

const {
  GraphQLObjectType,
  GraphQLID,
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM users WHERE id=$1`;
        const values = args.id;
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    userAll: {
      type: UserType,
      resolve() {
        const query = `SELECT * FROM users`;
        return postgres
          .one(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    account: {
      type: AccountType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM accounts WHERE id=$1`;
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    accountAll: {
      type: AccountType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM accounts`;
        return postgres
          .one(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    story: {
      type: StoryType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM stories WHERE id=$1`;
        const values = args.id;
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    storyAll: {
      type: StoryType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM stories`;
        return postgres
          .one(query)
          .then(res => res)
          .catch(err => err);
      }
    },

    post: {
      type: PostType,
      args: {
        id_post: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM posts WHERE id_post=$1`;
        const values = args.id_post;
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    postAll: {
      type: PostType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM posts`;
        return postgres
          .one(query)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
})
exports.RootQuery = RootQuery;