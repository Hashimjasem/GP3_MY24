const { AuthenticationError } = require("apollo-server-express");
const { User, Timeblock, Journal } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      // if (context.user) {
        const user = await User.find().populate(
          'journals', 'timeblocks'
        );

        return user;
      // }

      // throw new AuthenticationError('Not logged in');
    },
    },
    // timeblocks: (parent, args, context) => {
    //   if (context.user) {
    //     const timeblocks = Timeblock.find(args).populate(
    //       "timeblocks"
    //     );

    //     if (!timeblocks) {
    //       throw new Error(`nothing found for this date`);
    //     }

    //     return {timeblocks}
        
    //   }
    // },
    // journals: (parent, args, context) => {
    //   if (context.user) {
    //     const journals = Journal.find(args).populate(
    //       "journals"
    //     );

    //     if (!journals) {
    //       throw new Error(`nothing found for this date`);
    //     }

    //     return journals
    //   }
    // },
  Mutation: {
    addUser: async (parent, { fullName, email, password }) => {
      const user = await User.create({ fullName, email, password });
      const token = signToken(user);

      return { token, User };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTimeblock: async (parent, args, context) => {
      if (context.user) {
        const args = {
          owner,
          date_id,
          title,
          description,
          startTime,
          endTime,
        };
        const timeblock = await Timeblock.create({
          ...args,
          owner: User,
        });
        await User.updateOne({ $push: { timeblocks: timeblock } });

        return timeblock;
      }
    },
    addJournal: async (parent, args, context) => {
      if (context.user) {
        const args = {
          owner,
          date_id,
          title,
          description,
          startTime,
          endTime,
        };
        const journal = await Journal.create({
          ...args,
          owner: User,
        });
        await User.updateOne({ $push: { journals: journal } });

        return journal;
      }
    },
  },
};

module.exports = resolvers;