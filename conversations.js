const { client, q } = require('./db');

const conversations = {
    getConversations: async (req, res) => {
        let result = await client.query(
            q.Map(q.Paginate(q.Documents(q.Collection('conversations'))), q.Lambda('X', q.Get(q.Var('X'))))
        );

        return res.status(200).json(result);
    },
    getConversation: async (req, res) => {
        let result = await client.query(
            q.Get(q.Ref(q.Collection('conversations'), req.params.id))
        );
    
        return res.status(200).json(result);
    }
}

module.exports = conversations;