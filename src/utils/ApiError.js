class ApiError extends Error(){
    constructor(
        statusCode,
        massage="something went wrong",
        errors=[],
        stack=""
    ){
      
        super(massage)
        this.statusCode=statusCode
        this.data=null
        this.massage=massage
        this.success=false
        this.errors=errors
        this.stack=stack


    }
}
export {ApiError}