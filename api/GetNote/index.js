module.exports = async function (context, req, note) {
    context.log('GetNote function processed');
    if (!note)
    {
        context.log("Note not found, id=" * context.bindingData.id);
    }
    else
    {
        context.log("Note Found, id=" + note.id);
    }
    context.res = {
        body: note
    };
}