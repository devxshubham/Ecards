const zod = require('zod')

const validSchema = zod.object({
    name : zod.string(),
    description : zod.string(),
    socials : zod.object({
        twitter : zod.string(),
        linkedin : zod.string()
    }),
    interest : zod.string()
});
 
module.exports.validateBody = (req, res, next) => {
    const valid = validSchema.safeParse(req.body)

    if( !valid.success ){
        res.status(500).send("invalid input")
    }
    else{
        next();
    }
}
