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
  user,
  account,
  story,
  post
} = require("./models");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
} = graphql

const RootMutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    addUser: {
      type: UserType,
      args: user,
      resolve(parent, args) {
        const query = `INSERT INTO users(id, password, user_type, magazine, agree_to_terms, date_reception) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, password, user_type, magazine, agree_to_terms, date_reception`;
        const values = [
          args.id,
          args.password,
          args.user_type,
          args.magazine,
          args.agree_to_terms,
          args.date_reception
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addAccount: {
      type: AccountType,
      args: account,
      resolve(parent, args) {
        const query = `INSERT INTO accounts(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.id
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addStory: {
      type: StoryType,
      args: story,
      resolve(parent, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.id,
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addPost: {
      type: PostType,
      args: post,
      resolve(parent, args) {
        const query = `INSERT INTO users(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.id,
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateUser: {
      type: UserType,
      args: user,
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateAccount: {
      type: AccountType,
      args: account,
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateStory: {
      type: StoryType,
      args: story,
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);

      }
    },
    updatePost: {
      type: PostType,
      args: post,
      resolve(parent, args) {
        const query = `UPDATE SET(creator_id, created, title, description) VALUES ($1, $2, $3, $4) WHERE id=$1`;
        const values = [
          args.id,
        ];
        return postgres
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
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteAccount: {
      type: AccountType,
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
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteStory: {
      type: StoryType,
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
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deletePost: {
      type: PostType,
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
        return postgres
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
  }
})

exports.RootMutation = RootMutation;