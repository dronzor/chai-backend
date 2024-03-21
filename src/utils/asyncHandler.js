//promises systex
const aysncHandler=(requestHandler)=>{
    return (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

// }

export { aysncHandler }

//its a higher order function
// step1->step2->step3
// const aysncHandler=()=>{}
// const aysncHandler=(fn)=>{()=>{}}
// const aysncHandler=(fn)=>async()=>{}


        //try-catch syntex
const aysncHandler1 = (fn) => async (req, res, next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            sucess: false,
            massage: error.massage
        })
    }
}

// this is similer to above code->
// // Define a function called asyncHandler
// const asyncHandler1 = function(fn) {
//     // This function returns another function which takes req, res, next parameters
//     return async function(req, res, next) {
//         try {
//             // Inside this returned function, await the execution of the provided function fn
//             await fn(req, res, next);
//         } catch (error) {
//             // If an error occurs during the execution of fn, catch it
//             // Set the HTTP status code of the response to the error's code property if it exists, or 500 otherwise
//             res.status(error.code || 500);
//             // Send a JSON response with success set to false and the error message included in the response body
//             res.json({
//                 success: false,
//                 message: error.message
//             });
//         }
//     };
// };
