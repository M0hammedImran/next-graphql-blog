import UserModel from '@/models/UserModel';
import bcrypt from 'bcryptjs';

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello!';
        },
        User: (_p, { id }, _c) => {
            return UserModel.findById({ _id: id });
        },
        Users: () => {
            return UserModel.find();
        },
    },

    Mutation: {
        async createUser(_, { userInput }) {
            const { fullName, email, password } = userInput;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new UserModel({
                fullName,
                email,
                password: hashedPassword,
            });
            return user.save();
        },
        async updateUser(_, { id, userInput }) {
            return UserModel.findByIdAndUpdate({ _id: id }, userInput);
        },
        async deleteUser(_, { id }) {
            await UserModel.findByIdAndUpdate({ _id: id }, { isDeleted: true });
            return 'OK';
        },
    },
};
