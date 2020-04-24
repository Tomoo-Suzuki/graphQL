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
        const values = [args.id];
        return db
          .one(query, values)
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
        const values = [args.id];
        return db
          .one(query, values)
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
        const values = [args.id];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },

    post: {
      type: PostType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parentValue, args) {
        const query = `SELECT * FROM posts WHERE id=$1`;
        const values = [args.id];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    stories: {
      type: new GraphQLList(StoryType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM posts`;
        const values = [args.id];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM posts`;
        const values = [args.id];
        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
})
exports.RootQuery = RootQuery;