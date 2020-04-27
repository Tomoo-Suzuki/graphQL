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
        const query = `INSERT INTO accounts(
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday,
          zip,
          prefecture,
          city,
          address3,
          building,
          purpose
          ) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING
          id,
          last_name,
          first_name,
          last_name_kana,
          first_name_kana,
          birthday,
          zip,
          prefecture,
          city,
          address3,
          building,
          purpose`;
        const values = [
          args.id,
          args.last_name,
          args.first_name,
          args.last_name_kana,
          args.first_name_kana,
          args.birthday,
          args.zip,
          args.prefecture,
          args.city,
          args.address3,
          args.building,
          args.purpose
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
        const query = `INSERT INTO stories( id,
          id_story,
          title_main,
          auther_name,
          is_complete,
          genre,
          catch_copy,
          synopsis,
          keywords,
          extreme_depiction,
          color_type,
          accept_advertisement,
          accept_rating,
          accept_reviews,
          accept_impression,
          publish_evaluation,
          accept_typo_reports) VALUES ($1, $2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12, $13, $14,$15, $16, $17) RETURNING  id,
          id_story,
          title_main,
          auther_name,
          is_complete,
          genre,
          catch_copy,
          synopsis,
          keywords,
          extreme_depiction,
          color_type,
          accept_advertisement,
          accept_rating,
          accept_reviews,
          accept_impression,
          publish_evaluation,
          accept_typo_reports`;
        const values = [
          args.id,
          args.id_story,
          args.title_main,
          args.auther_name,
          args.is_complete,
          args.genre,
          args.catch_copy,
          args.synopsis,
          args.keywords,
          args.extreme_depiction,
          args.color_type,
          args.accept_advertisement,
          args.accept_rating,
          args.accept_reviews,
          args.accept_impression,
          args.publish_evaluation,
          args.accept_typo_reports
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
        const query = `INSERT INTO posts(id_story,
          id_post,
          has_chapter,
          title_chapter,
          title,
          story,
          date_last_modify) VALUES ($1, $2, $3, $4,$5,$6,$7) RETURNING id_story,
          id_post,
          has_chapter,
          title_chapter,
          title,
          story,
          date_last_modify`;
        const values = [
          args.id_story,
          args.id_post,
          args.has_chapter,
          args.title_chapter,
          args.title,
          args.story,
          args.date_last_modify
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
        const query = `DELETE FROM users WHERE id=$1 RETURNING id`;
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
        const query = `DELETE FROM accounts WHERE id=$1 RETURNING id`;
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
        const query = `DELETE FROM stories WHERE id=$1 RETURNING id`;
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
        id_post: {
          type: GraphQLNonNull(GraphQLID)
        },
      },
      resolve(parent, args) {
        const query = `DELETE FROM posts WHERE id_post=$1 RETURNING id_post`;
        const values = [
          args.id_post,
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