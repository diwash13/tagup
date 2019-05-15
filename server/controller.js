// module.exports = {
//     getLog: (req, res) => {
//         res.status(200).send(log)
//     },

//     createLog: (req, res) => {
//         const { title } = req.body
//         log.push({id, title})
//         id++
//         res.status(200).send(log)
//     },

//     removeLog: (req, res) => {
//         const { id } = req.params;

//         const index = log.findIndex(player => player.id == id)

//         log.splice(index, 1);

//         res.status(200).send(log)
//     }
// }