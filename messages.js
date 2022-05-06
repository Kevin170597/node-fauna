const { client, q } = require('./db');

const moment = require('moment');

const messages = {
    getMessages: async (req, res) => {
        let result = await client.query(
            q.Map(q.Paginate(q.Documents(q.Collection('messages'))), q.Lambda('X', q.Get(q.Var('X'))))
        );

        return res.status(200).json(result);
    },
    getMessage: async (req, res) => {
        let result = await client.query(
            q.Get(q.Ref(q.Collection('messages'), req.params.id))
        );
    
        return res.status(200).json(result);
    },
    insertMessage: async (req, res) => {
        let result = await client.query(
            q.Create(q.Collection('messages'), { data: { 
                content: req.body.content,
                direction: req.body.direction,
                created_at: moment().format('MMMM Do YYYY, h:mm:ss a')
            }
        }));

        return res.status(200).json(result);
    },
    updateMessage: async (req, res) => {
        let result = await client.query(
            q.Update(q.Ref(q.Collection('messages'), req.params.id), { data: { content: req.body.content }})
        );

        return res.status(200).json(result);
    },
    deleteMessage: async (req, res) => {
        let result = await client.query(
            q.Delete(q.Ref(q.Collection('messages'), req.params.id))
        );

        return res.status(200).json(result);
    }
}

module.exports = messages;