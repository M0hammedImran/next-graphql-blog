import { makeSchema, queryType } from 'nexus';

const Query = queryType({
    definition(t) {
        t.string('name', {
            description: 'Returns Mohammedimran',
            resolve: () => 'Mohammed Imran',
        });
    },
});

export const schema = makeSchema({
    types: { Query },
});
