exports.handler = (event, context, callback) => {
    // TODO implement
   var sum = event.number1 + event.number2;
   var result = {"sum":sum}
    callback(null, JSON.stringify(result));
};