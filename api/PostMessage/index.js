module.exports = async function (context, req) {
    var data = req.body;
    context.bindings.messages = data;
    context.done();
}