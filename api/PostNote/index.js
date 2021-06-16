module.exports = async function (context, req) {
    var data = req.body;
    context.bindings.notes = data;
    context.done();
}