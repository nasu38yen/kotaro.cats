module.exports = async function (context, req, sales) {
    context.res = {
        body: sales
    };
}