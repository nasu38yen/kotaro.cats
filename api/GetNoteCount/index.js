module.exports = async function (context, req, values) {
    context.res = {
        body: values[0].$1
    };
}