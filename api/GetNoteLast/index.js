module.exports = async function (context, req, notes) {
    context.res = {
        body: notes[0]
    };
}